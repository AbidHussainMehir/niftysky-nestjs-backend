import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpensesDto } from './dto/create-expenses.dto';
import { UpdateExpensesDto } from './dto/update-expenses.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly catsService: ExpensesService) { }

  @Post()
  create(@Body() createExpensesDto: CreateExpensesDto) {
    return this.catsService.create(createExpensesDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.catsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return this.catsService.update(+id, updateCatDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.catsService.remove(+id);
  // }
}
