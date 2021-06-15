import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
  ) {}

  async create(orderBody: Order): Promise<Order> {
    const createdCollection = new this.orderModel(orderBody);
    let response = await createdCollection.save();
    return response;
  }

  async findAll(): Promise<Array<Order>> {
    let response = await this.orderModel.find();
    return response;
  }

  async findOne(id: string): Promise<Order> {
    let response = await this.orderModel.findById(id);
    return response;
  }

  async update(id: string, orderBody: Order) {
    await this.orderModel.findByIdAndUpdate(id, orderBody);
    return await this.orderModel.findById(id);
  }

  remove(id: string) {
    let response = this.orderModel.findByIdAndDelete(id);
    return response;
  }
}
