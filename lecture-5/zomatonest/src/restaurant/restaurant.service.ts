import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async create(restaurantBody: Restaurant): Promise<Restaurant> {
    const createdCollection = new this.restaurantModel(restaurantBody);
    let response = await createdCollection.save();
    return response;
  }

  async findAll(): Promise<Array<Restaurant>> {
    let response = await this.restaurantModel.find();
    return response;
  }

  async findOne(id: string): Promise<Restaurant> {
    let response = await this.restaurantModel.findById(id);
    return response;
  }

  async update(id: string, restaurantBody: Restaurant) {
    await this.restaurantModel.findByIdAndUpdate(id, restaurantBody);
    return await this.restaurantModel.findById(id);
  }

  remove(id: string) {
    let response = this.restaurantModel.findByIdAndDelete(id);
    return response;
  }
}
