import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userBody: User): Promise<User> {
    const createdCollection = new this.userModel(userBody);
    let response = await createdCollection.save();
    return response;
  }

  async findAll(): Promise<Array<User>> {
    let response = await this.userModel.find();
    return response;
  }

  async findOne(id: string): Promise<User> {
    let response = await this.userModel.findById(id);
    return response;
  }

  async update(id: string, userBody: User) {
    await this.userModel.findByIdAndUpdate(id, userBody);
    return await this.userModel.findById(id);
  }

  remove(id: string) {
    let response = this.userModel.findByIdAndDelete(id);
    return response;
  }
}
