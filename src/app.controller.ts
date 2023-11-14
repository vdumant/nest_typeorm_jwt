import { Controller, Get, UseGuards, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';

import { ApiKeyGuard } from './auth/guards/api-key.guard';

@UseGuards(ApiKeyGuard) //guardian Todos Endpoints
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @SetMetadata('isPublic', true) //Omitir guardian Sin Decorator
  @Public() //Omitir guardian Con Decorator
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @UseGuards(ApiKeyGuard) //guardian 1 Endpoint
  @Get('nuevo')
  @Public()
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  // @Get('tasks')
  // tasks() {
  //   return this.appService.getTasks();
  // }
}
