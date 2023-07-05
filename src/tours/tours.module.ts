import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ToursService } from './tours.service';
import { ToursController } from './tours.controller';
import { Tours, ToursSchema } from './tours.schema';

@Module({
  controllers: [ToursController],
  providers: [ToursService],
  imports: [
    MongooseModule.forFeature([{ name: Tours.name, schema: ToursSchema }]),
  ],
})
export class ToursModule {}
