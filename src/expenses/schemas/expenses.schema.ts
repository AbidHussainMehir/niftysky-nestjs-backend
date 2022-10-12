import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpensesDocument = Expenses & Document;

@Schema()
export class Expenses {
    @Prop()
    title: string;

    @Prop()
    amount: number;

    @Prop()
    date: Date;

    @Prop()
    comment: string;
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);