/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class Auth {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: [true, 'Email already registered'], required: [true] })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
