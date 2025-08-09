import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import type { FastifyReply } from 'fastify';

interface ResponseData {
  message?: string;
  data?: unknown;
}

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<{
    statusCode: number;
    success: boolean;
    message: string;
    data: unknown;
  }> {
    return next.handle().pipe(
      map((data: ResponseData) => {
        return {
          statusCode: context.switchToHttp().getResponse<FastifyReply>()
            .statusCode,
          success: true,
          message: data.message || 'Request successful',
          data: data.data ?? data,
          timestamp: new Date().toISOString(),
        };
      }),
    );
  }
}
