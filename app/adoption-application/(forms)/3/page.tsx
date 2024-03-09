'use client';

import { Option, Select, Card, Typography } from "@material-tailwind/react";
import { PetInfo } from '@/app/components/PetInfo';

export default function Page() {
  return (
    <>
      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <div>
            <Typography variant="h5" color="blue-gray">
              Pet History
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Please tell us about your current and past pet ownership.
            </Typography>
          </div>
          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg mt-4">
            <Select variant="standard" label="How Many Pets Do You Own?">
              <Option>0</Option>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5+</Option>
            </Select>

            <Select variant="standard" label="How Many Pets Have You Owned?">
              <Option>0</Option>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5+</Option>
            </Select>
          </div>
        </fieldset>
      </Card>
      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <div className="flex items-center justify-center content-center w-full col-span-2">
            <PetInfo />
          </div>
        </fieldset>
      </Card>
    </>
  );
}
