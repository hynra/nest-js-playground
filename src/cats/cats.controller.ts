import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return 'This action returns all cats';
    }
}
