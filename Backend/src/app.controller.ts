// src/app.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('api')  // prefix /api
export class AppController {
  @Get('hello')
  getHello() {
    return { message: 'Big back cock' };
  }

  @Post('echo')
  echo(@Body() body: any) {
    return { received: body };
  }
}
