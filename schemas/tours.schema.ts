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
  @Prop({ required: [true, 'A tour must have a name'], unique: true })
  name: string;

  @Prop()
  slug: string;

  @Prop({ required: [true, 'A tour must have a price'] })
  price: number;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop({
    default: 0,
  })
  rating: number;

  @Prop()
  duration: number;

  @Prop()
  maxGroupSize: number;

  @Prop()
  difficulty: string;

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
