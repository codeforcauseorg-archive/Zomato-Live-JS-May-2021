import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { Restaurant } from 'src/restaurant/schemas/restaurant.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  dishes: Array<object>;

  @Prop()
  bill: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' })
  restaurant: Restaurant;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
