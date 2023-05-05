import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is my first NestJS project, 2nd build !';
  }
}
