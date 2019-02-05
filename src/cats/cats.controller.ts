import { Controller, Get, Post, Body, Put, Param, Delete, Query, Res, HttpStatus } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAll(@Res() res) {
        res.status(HttpStatus.OK).json([]);
    }
}