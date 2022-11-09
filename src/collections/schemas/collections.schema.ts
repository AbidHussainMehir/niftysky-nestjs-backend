import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CollectionsDocument = Collections & Document;

@Schema()
export class Collections {
    @Prop()
    title: string;

    @Prop({ type: String })
    slug: string;

    @Prop()
    image: string;

    @Prop()
    niftysky_category: string;

    @Prop()
    niftysky_category_id: number;

    @Prop()
    description: string;

    @Prop()
    wikidescription: string;

    @Prop()
    wikipedia: string;

    @Prop()
    stellarium: string;

    @Prop()
    price: number;

    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;

    @Prop()
    createdBy: string;
    @Prop()
    updatedBy: string;

    @Prop()
    isActive: boolean;

    @Prop()
    owner: string;

    @Prop()
    ipfs: string;


}

export const CollectionsSchema = SchemaFactory.createForClass(Collections);