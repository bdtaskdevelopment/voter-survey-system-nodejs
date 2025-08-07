import {
  Repository,
  FindOptionsWhere,
  ILike,
  ObjectLiteral,
  DeepPartial,
  FindOperator,
  FindOptionsOrder,
} from 'typeorm';

export interface PaginationDto {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

export interface PaginationResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export abstract class BaseService<T extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    try {
      return await this.repository.find();
    } catch (error) {
      console.error(`Error fetching all records:`, error);
      return [];
    }
  }

  async findOne(id: number): Promise<T | null> {
    try {
      return await this.repository.findOne({
        where: { id } as unknown as FindOptionsWhere<T>,
      });
    } catch (error) {
      console.error(`Error fetching record with id ${id}:`, error);
      return null;
    }
  }

  async create(createDto: Partial<T>): Promise<T> {
    try {
      const entity = this.repository.create(createDto as DeepPartial<T>);
      return await this.repository.save(entity);
    } catch (error) {
      console.error('Error creating record:', error);
      throw error;
    }
  }

  async update(id: number, updateDto: Partial<T>): Promise<T | null> {
    try {
      await this.repository.update(id, updateDto);
      return this.findOne(id);
    } catch (error) {
      console.error(`Error updating record with id ${id}:`, error);
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      console.error(`Error deleting record with id ${id}:`, error);
      throw error;
    }
  }

  async softRemove(id: number): Promise<void> {
    try {
      await this.repository.update(id, {
        is_active: false,
      } as unknown as Partial<T>);
    } catch (error) {
      console.error(`Error soft deleting record with id ${id}:`, error);
      throw error;
    }
  }

  async findAllWithPagination(
    paginationDto: PaginationDto,
    searchField: string = 'name',
  ): Promise<PaginationResponse<T>> {
    try {
      const {
        page = 1,
        limit = 10,
        search,
        sortBy = 'id',
        sortOrder = 'ASC',
      } = paginationDto;

      const skip = (page - 1) * limit;

      // Build where clause
      const whereClause: Record<string, FindOperator<string>> = {};
      if (search) {
        whereClause[searchField] = ILike(`%${search}%`);
      }

      // Build order clause
      const orderClause: Record<string, 'ASC' | 'DESC'> = {};
      orderClause[sortBy] = sortOrder;

      // Get data with pagination
      const [data, total] = await this.repository.findAndCount({
        where: whereClause as unknown as FindOptionsWhere<T>,
        order: orderClause as unknown as FindOptionsOrder<T>,
        skip,
        take: limit,
      });

      const totalPages = Math.ceil(total / limit);
      const hasNext = page < totalPages;
      const hasPrev = page > 1;

      return {
        data,
        meta: {
          page,
          limit,
          total,
          totalPages,
          hasNext,
          hasPrev,
        },
      };
    } catch (error) {
      console.error('Error fetching records with pagination:', error);
      return {
        data: [],
        meta: {
          page: 1,
          limit: 10,
          total: 0,
          totalPages: 0,
          hasNext: false,
          hasPrev: false,
        },
      };
    }
  }

  async findActive(): Promise<T[]> {
    try {
      return await this.repository.find({
        where: { is_active: true } as unknown as FindOptionsWhere<T>,
      });
    } catch (error) {
      console.error('Error fetching active records:', error);
      return [];
    }
  }

  async count(): Promise<number> {
    try {
      return await this.repository.count();
    } catch (error) {
      console.error('Error counting records:', error);
      return 0;
    }
  }

  async exists(id: number): Promise<boolean> {
    try {
      const count = await this.repository.count({
        where: { id } as unknown as FindOptionsWhere<T>,
      });
      return count > 0;
    } catch (error) {
      console.error(`Error checking if record exists with id ${id}:`, error);
      return false;
    }
  }
}
