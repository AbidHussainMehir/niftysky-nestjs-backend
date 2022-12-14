import { Injectable } from '@nestjs/common';
import { CreateRealEstateDto } from './dto/create-realestate.dto';
import { UpdateRealEstateDto } from './dto/update-realestate.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RealEstate, RealEstateDocument } from './schemas/realestate.schema';
@Injectable()
export class RealEstateService {
  // create(createCollectionDto: CreateCollectionDto) {
  //   return 'This action adds a new collection';
  // }
  constructor(@InjectModel(RealEstate.name) private collectionModel: Model<RealEstateDocument>) { }

  async create(createCollectionDto: CreateRealEstateDto): Promise<RealEstate> {
    const createdCollection = new this.collectionModel(createCollectionDto);
    return createdCollection.save();
  }
  async findAll(): Promise<RealEstate[]> {
    return this.collectionModel.find().exec();
  }

  async find(id: string, page: number, limit: number): Promise<any> {
    let skip = (page - 1) * limit;
    let count = await this.collectionModel.find({
      category: id
    }).count().exec();
    let res = await this.collectionModel.find({
      category: id
    })
      .sort({ _id: 1 })
      .skip(skip)
      .limit(limit)
      .exec();
    return { data: res, current:skip+limit,range: `${skip + 1}-${skip + limit}`, total_records: count }
  
   
   
    return this.collectionModel.find({
      category: id
    }).exec();
  }
  async findOne(id: string): Promise<RealEstate | any> {
    try {
      return this.collectionModel.findById(
        id
      ).exec();
    } catch (error) {
      return { message: "Something went wrong!" }
    }

  }
  async getCategories(): Promise<any> {
    try {
      return this.collectionModel.
        aggregate(
          [
            { $group: { "_id": { niftysky_category_id: "$niftysky_category_id", niftysky_category: "$niftysky_category" } } }
          ]
        ).exec();
    } catch (error) {
      return { message: "Something went wrong!" }
    }

  }

  update(id: number, updateCollectionDto: UpdateRealEstateDto) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
  uploadFile(file: Express.Multer.File): any {
    return { file: file }
  }

}


