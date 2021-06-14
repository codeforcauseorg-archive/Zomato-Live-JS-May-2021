import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  Address: string;

  @Prop()
  PhoneNo: number;

  @Prop()
  Rating: number;

  @Prop()
  Menu: Array<object>;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
