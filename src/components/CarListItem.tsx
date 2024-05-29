import { CarWithDeps } from '@/types/prismaTypes';
import Link from 'next/link';
import Card from './Card';

const CarListItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`car/${car.id}`} className="cursor-pointer">
      <Card dark>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <span className="bg-white py-2 px-4 rounded-[50%] text-xl">🚗</span>
            <div>
              <p>{car.brand.name}</p>
              <p>{car.model.name}</p>
            </div>
          </div>
          <div>
            <p>{car.price ? `${car.price} kč` : 'by arrangement'}</p>
            <p>{car.location}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CarListItem;
