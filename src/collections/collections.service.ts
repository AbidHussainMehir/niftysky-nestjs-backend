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

  async find(id: number, page: number, limit: number): Promise<Collections[] | any> {
    try {
      console.log("error",id)

      let skip = (page - 1) * limit;
      let count = await this.collectionModel.find({
        niftysky_category_id: id
      }).find({
        niftysky_category_id: id
      }).count().exec();
      let res = await this.collectionModel.find({
        niftysky_category_id: id
      })
        .sort({ _id: 1 })
        .skip(skip)
        .limit(10)
        .exec();
      return { data: res, range: `${skip + 1}-${skip + limit}`, total_records: count }
    } catch (error) {
      console.log("error",error)
      return error;
    }
    return

  }
  async findOne(id: string): Promise<Collections | any> {
    try {
      return this.collectionModel.findById(
        id
      ).exec();
    } catch (error) {
      return { message: "Something went wrong!" }
    }

  }
  async itemCount(id: string): Promise<Collections | any> {
    try {
      return this.collectionModel.find({
        niftysky_category_id: id
      }).count().exec();

    } catch (error) {
      return "Something went wrong!"
    }

  }


  async getCategories(): Promise<any> {
    try {
      return this.collectionModel.
        aggregate(
          [
            {

              $group: {
                count: { $sum: 1 },
                "_id": { niftysky_category_id: "$niftysky_category_id", niftysky_category: "$niftysky_category" }
              },

            },
            {
              $sort: { _id: -1 }
            }
          ]
        ).exec();
    } catch (error) {
      return { message: error.message }
    }

  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  async remove(id: string): Promise<Collections> {
    return this.collectionModel.findByIdAndUpdate({ _id: id }, { isActive: false, createdBy: 'Abid Hussain' }).exec()
  }
  uploadFile(file: Express.Multer.File): any {
    return { file: file }
  }

}


