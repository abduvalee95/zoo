import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string{
        return "MEYOW MEYOW hello "
    }

    public introduce():string {
        return "My Name is TOM"
    }
}
