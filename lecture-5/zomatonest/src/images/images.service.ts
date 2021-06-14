import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image, ImageDocument } from './schemas/image.schema';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  async create(imageBody: Image): Promise<Image> {
    const createdCollection = new this.imageModel(imageBody);
    let response = await createdCollection.save();
    return response;
  }

  async findOne(fname: string): Promise<Image> {
    let response = await this.imageModel.findOne({name : fname});
    return response;
  }
}
