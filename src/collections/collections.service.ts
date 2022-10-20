import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Collections, CollectionsDocument } from './schemas/collections.schema';
@Injectable()
export class CollectionsService {
  // create(createCollectionDto: CreateCollectionDto) {
  //   return 'This action adds a new collection';
  // }
  constructor(@InjectModel(Collections.name) private collectionModel: Model<CollectionsDocument>) { }

  async create(createCollectionDto: CreateCollectionDto): Promise<Collections> {
    const createdCollection = new this.collectionModel(createCollectionDto);
    return createdCollection.save();
  }
  async findAll(): Promise<Collections[]> {
    return this.collectionModel.find().exec();
  }


  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
  uploadFile(file: Express.Multer.File): any {
    return { file: file }
  }

}


