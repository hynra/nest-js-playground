import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto) {
        console.log(createCatDto)
        return 'This action adds a new cat';
    }

    @Get()
    findAll(@Query() query) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `This action removes a #${id} cat`;
    }
}