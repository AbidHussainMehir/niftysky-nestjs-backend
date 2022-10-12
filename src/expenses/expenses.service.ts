import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses, ExpensesDocument } from './schemas/expenses.schema';
import { CreateExpensesDto } from './dto/create-expenses.dto';

@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expenses.name) private catModel: Model<ExpensesDocument>) { }

  async create(createCatDto: CreateExpensesDto): Promise<Expenses> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Expenses[]> {
    return this.catModel.find().exec();
  }
}