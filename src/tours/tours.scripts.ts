import { readFileSync } from 'fs';
import mongoose from 'mongoose';
import { Tours, ToursSchema } from './tours.schema';

const DB = process.env.DB_CONNECTION;

mongoose.connect(DB).then(() => {
  console.log('DB connected');
});

const ToursHandler = mongoose.model<Tours>('Tours', ToursSchema);

export const upload_local_tours_data = async (
  file_name = './dev-data/tours.json',
) => {
  const tours = readFileSync(file_name, 'utf-8');

  try {
    await ToursHandler.create(JSON.parse(tours));
    console.log('Data uploaded');
  } catch (err) {
    console.log(err);
  }
};

export const clear_tours_collection_data = async () => {
  try {
    await ToursHandler.deleteMany();
    console.log('Data deleted');
  } catch (err) {
    console.log(err);
  }
};
