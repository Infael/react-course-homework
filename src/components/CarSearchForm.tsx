import Card from './Card';
import SelectInput from './input/SelectInput';
import TextInput from './input/TextInput';
import { Brand, CarModel } from '@prisma/client';

interface CarSearchFormProps {
  models: CarModel[];
  brands: Brand[];
}

const CarSearchForm = ({ models, brands }: CarSearchFormProps) => {
  return (
    <Card>
      <form className="flex flex-col justify-center gap-4">
        <TextInput label="Location" name="location" />
        <SelectInput
          label="model"
          name="model"
          items={[
            { label: '', value: '' },
            ...models.map((model) => ({
              label: model.name,
              value: model.id,
            })),
          ]}
        />
        <SelectInput
          label="Brand"
          name="brand"
          items={[
            { value: '', label: '' },
            ...brands.map((brand) => ({
              label: brand.name,
              value: brand.id,
            })),
          ]}
        />
        <button type="submit" className="btn mt-4">
          Search
        </button>
      </form>
    </Card>
  );
};

export default CarSearchForm;
