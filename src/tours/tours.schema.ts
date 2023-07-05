import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type Location = {
  type: string;
  coordinates: [number, number];
  address: string;
  description: string;
};

type StartLocation = {
  type: string;
  coordinates: [number, number];
};

@Schema()
export class Tours {
  @Prop({
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  })
  name: string;

  @Prop({ required: [true, 'A tour must have a duration'] })
  duration: number;

  @Prop({ required: [true, 'A tour must have a group size'] })
  maxGroupSize: number;

  @Prop({ required: [true, 'A tour must have a difficulty'] })
  difficulty: string;

  @Prop({
    default: 0,
  })
  ratingsQuantity: number;

  @Prop({
    default: 4.5,
  })
  ratingsAverage: number;

  @Prop({ required: [true, 'A tour must have a price'] })
  price: number;

  @Prop()
  priceDiscount: number;

  @Prop({ trim: true })
  summary: string;

  @Prop({ required: [true, 'A tour must have a description'] })
  description: string;

  @Prop({
    required: [true, 'A tour must have a image cover'],
  })
  imageCover: string;

  @Prop()
  images: [string];

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({})
  updatedAt: Date;

  @Prop()
  startDates: [Date];

  @Prop()
  slug: string;

  @Prop({ type: {} as StartLocation })
  startLocation: {
    type: string;
    coordinates: [number, number];
  };

  @Prop({ type: Array<Location> })
  locations: [
    {
      type: string;
      coordinates: [number, number];
      address: string;
      description: string;
    },
  ];
}

export type ToursDocument = Tours & Document;
export const ToursSchema = SchemaFactory.createForClass(Tours);
