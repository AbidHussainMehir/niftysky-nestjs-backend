import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RealEstateDocument = RealEstate & Document;

@Schema()
export class RealEstate {
    @Prop()
    title: string;

    @Prop()
    image: string;

    @Prop()
    diameter: number;

    @Prop()
    center_latitude: number;

    @Prop()
    center_longitude: number;

    @Prop()
    northern_latitude: number;

    @Prop()
    southern_latitude: number;

    @Prop()
    eastern_longitude: number;

    @Prop()
    western_longitude: number;

    @Prop()
    feature_type: string;

    @Prop()
    quad: string;

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
    category: string;

    @Prop()
    ipfs: string;

    @Prop()
    index: string;

    @Prop()
    owner: string;

    @Prop()
    trxhash: string;

    @Prop()
    block_timestamp: string;

    @Prop()
    block_hash: string;

    @Prop()
    block_number: string;

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

}

export const RealEstateSchema = SchemaFactory.createForClass(RealEstate);