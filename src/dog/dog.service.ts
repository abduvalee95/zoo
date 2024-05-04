import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Hello ! Im am Dog He cha cha ';
  }
  public introduce(): string {
    return 'My Name is Buldog And Im Very Strong Dog';
  }
}
