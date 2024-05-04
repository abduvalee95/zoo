import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }
  /*     //! bu paramni qabul qilish usuli
  @Get('greet/:id')
  public introduce(@Param() params: any): string {
      console.log("params:",params)
    return this.dogService.getHello();
  } 
  
  */
  /*     //! bu idni  qabul qilish usuli
  @Get('greet/:id')
  public introduce(@Param('id') id: string): string {
      console.log("params:",id)
    return this.dogService.getHello();
  } 
  */

  //! bu id-query qabul qilish usuli
  @Get('greet/:id')
  public introduce(@Param() param: any, @Query() query: any): string {
    console.log('params:', param);
    console.log('Query:', query);
    return this.dogService.getHello();
  }
    
    
  @Post('edit')
  public modifyDetail(@Body() body:any): string {
    console.log('params:', body);
    return this.dogService.modifyDetail();
  }
}
