import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Expenses, ExpensesSchema } from './schemas/expenses.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Expenses.name, schema: ExpensesSchema }])],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule { }
