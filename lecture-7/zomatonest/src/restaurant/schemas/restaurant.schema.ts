import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  phoneNo: string;

  @Prop()
  rating: string;

  @Prop()
  menu: Array<object>;

  @Prop()
  onlineOrder: string;

  @Prop()
  photo: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
