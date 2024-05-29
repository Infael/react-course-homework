import CarListItem from './CarListItem';
import { CarWithDeps } from '@/types/prismaTypes';

type Props = {
  cars: CarWithDeps[];
};

const CarList = ({ cars }: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {cars.map((car) => (
        <CarListItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
