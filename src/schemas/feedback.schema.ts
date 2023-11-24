import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type FeedbackDocument = Document & Feedback;

class FeedBackDetail {
  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  value: string;
}
@Schema({ timestamps: true })
export class Feedback {
  @Prop({ type: Array<FeedBackDetail> })
  answers: FeedBackDetail[];
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
