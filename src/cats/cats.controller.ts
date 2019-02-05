import { Controller, Get, Req, Param, Post } from '@nestjs/common';
import { create } from 'domain';

@Controller('cats')
export class CatsController {

    @Get()
    findAll() {
        return 'This action returns all cats';
    }

    @Post()
    create() {
        return 'This action adds a new cat'
    }

    @Get('ab*cd')
    findAllWillcard() {
        return 'This route uses a wildcard';
    }
}
