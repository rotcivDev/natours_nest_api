import { Injectable } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { readFileSync } from 'fs';
const selectTour = <T extends { slug: string; id: number }>(
  toursCollection: Array<T>,
  id: number | string,
) => {
  console.log(id);
  return toursCollection.find((el) => String(el.id) === id || el.slug === id);
};

const tours = JSON.parse(
  readFileSync(`${__dirname}/../../dev-data/data/tours-data.json`).toString(),
);

@Injectable()
export class ToursService {
  create(createTourDto: CreateTourDto) {
    return 'This action adds a new tour';
  }

  findAll() {
    return {
      tours,
    };
  }

  findOne(id: string) {
    return selectTour(tours, id) || null;
  }

  update(id: string, updateTourDto: UpdateTourDto) {
    return `This action updates a #${id} tour`;
  }

  remove(id: string) {
    return `This action removes a #${id} tour`;
  }
}
