import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tours, ToursDocument } from './tours.schema';
import { Model } from 'mongoose';
@Injectable()
export class ToursService {
  constructor(
    @InjectModel(Tours.name)
    private tourModel: Model<ToursDocument>,
  ) {}

  async create(createTourDto: CreateTourDto): Promise<Tours> {
    const newTour = new this.tourModel(createTourDto);
    return newTour.save();
  }

  async findAll() {
    const tours = await this.tourModel.find();
    if (!tours || !tours.length) {
      throw new NotFoundException('Tours data not found');
    }
    return tours;
  }

  async findOne(id: string) {
    const tour = await this.tourModel.findById(id);
    if (!tour) {
      throw new NotFoundException('Tour not found');
    }
    return tour;
  }

  async update(id: string, updateTourDto: UpdateTourDto) {
    const existingTour = await this.tourModel.findByIdAndUpdate(
      id,
      updateTourDto,
      { new: true },
    );

    if (!existingTour) {
      throw new NotFoundException(`Tour ${id} not found`);
    }

    return existingTour;
  }

  async remove(id: string) {
    const deletedTour = await this.tourModel.findByIdAndDelete(id);
    if (!deletedTour) {
      throw new NotFoundException('Tour not found');
    }

    return deletedTour;
  }
}
