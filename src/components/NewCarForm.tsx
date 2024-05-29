'use client';
import { createCar } from '@/utils/actions';
import { Brand, CarModel } from '@prisma/client';
import Card from './Card';
import TextInput from './input/TextInput';
import SelectInput from './input/SelectInput';

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold pb-4">Add new Car</h2>
      <form action={createCar} className="flex flex-col gap-4">
        <SelectInput
          label="Brand"
          name="brandId"
          items={brands.map((brand) => ({
            label: brand.name,
            value: brand.id,
          }))}
        />
        <SelectInput
          label="Model"
          name="modelId"
          items={models.map((model) => ({
            label: model.name,
            value: model.id,
          }))}
        />
        <TextInput label="Description" name="description" required />
        <TextInput label="Location" name="location" required />
        <TextInput label="Price" type="number" name="price" required />

        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </Card>
  );
};

export default NewCarForm;
