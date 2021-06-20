import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  phoneNo: number;

  @Prop()
  email: string;

  @Prop()
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
