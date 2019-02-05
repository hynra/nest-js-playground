import { Controller, Get, Req, Param, Post, Query } from '@nestjs/common';
import { create } from 'domain';

@Controller('cats')
export class CatsController {

    // standard
    /*@Get(':id')
    findOne(@Param() params) {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }*/

    //spesific
    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a #${id} cat`;
    }

    /*

        use @Query() to fetch all queryparams
        use @Query('name_of_query') to fetch spesific queryparam

    */
   
    @Get()
    find(@Query('test') q) {
        console.log(q)
        if (q)
            return `This action returns a ${q} cat`;
        else
            return `This action returns not a test cat`;
    }
}
