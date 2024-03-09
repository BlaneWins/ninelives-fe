'use client';

import { useState } from 'react';
import {Checkbox, Input, Option, Select, Radio, Typography, Card } from "@material-tailwind/react";

export default function Page() {
  const [status, setStatus] = useState(0)

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <>
      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <Typography variant="h4" color="blue-gray">Home Status</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Please tell us about your living situation.
          </Typography>

          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
            <Select variant="standard" label="Type of Home">
              <Option>House</Option>
              <Option>Apartment</Option>
              <Option>Mobile Home</Option>
              <Option>Dormitory</Option>
              <Option>Condominium</Option>
            </Select>

            <div className="col-span-2">
              <Typography className="text-blue-gray-500 font-normal">Do You Rent Or Own?</Typography>
              <div className="flex gap-10 text-sm text-blue-gray-500 font-normal">
                <Radio name="type" label="I rent/lease" checked={status === 1} onClick={(e) => radioHandler(1)} crossOrigin={undefined} />
                <Radio name="type" label="I own" checked={status === 2} onClick={(e) => radioHandler(2)} crossOrigin={undefined} />
              </div>
            </div>

            {status === 1 && (
              <>
                <Input variant="standard" label="Rental Company Name" crossOrigin={undefined} />
                <Input variant="standard" label="Landlord's Name" crossOrigin={undefined} />
                <Input variant="standard" label="Landlord's Phone" crossOrigin={undefined} />

                <div className="col-span-2">
                  <Typography className="text-blue-gray-500 font-normal">Is There A Pet Fee?</Typography>
                  <div className="flex gap-10 text-sm text-blue-gray-500 font-normal">
                    <Radio name="type" label="Yes" crossOrigin={undefined} />
                    <Radio name="type" label="No" crossOrigin={undefined} />
                  </div>
                </div>

                <Input variant="standard" label="Pet Fee Dollar Amount" crossOrigin={undefined} />

              </>
            )}

          </div>
        </fieldset>
      </Card>

      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <Typography variant="h4" color="blue-gray">Household Info</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Please tell us about who you live with.
          </Typography>

          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
            <Select variant="standard" label="Number of Adults in Household?">
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5+</Option>
            </Select>

            <div className="col-span-2">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Who Do You Live With? (Check all that apply):</Typography>
              <div className="flex flex-col md:grid md:grid-cols-2 outline rounded-sm mt-2 md:place-items-center py-2 md:mx-16">
                <div className="w-32">
                  <Checkbox label="Parents" crossOrigin={undefined} />
                </div>
                <div className="w-32">
                  <Checkbox label="Roomates" crossOrigin={undefined} />
                </div>
                <div className="w-32">
                  <Checkbox label="Spouse" crossOrigin={undefined} />
                </div>
                <div className="w-32">
                  <Checkbox label="Children" crossOrigin={undefined} />
                </div>
                <div className="w-32">
                  <Checkbox label="Other Pets" crossOrigin={undefined} />
                </div>
                <div className="w-32">
                  <Checkbox label="Alone" crossOrigin={undefined} />
                </div>
              </div>
            </div>




            <Input variant="standard" label="Children's Ages" crossOrigin={undefined} />

            <div className="col-span-2">
              <Typography className="text-blue-gray-500 font-normal">Do Any Members Suffer From Pet Allergies?</Typography>
              <div className="flex gap-10 text-sm text-blue-gray-500 font-normal">
                <Radio name="type" label="Yes" checked={status === 3} onClick={(e) => radioHandler(3)} crossOrigin={undefined} />
                <Radio name="type" label="No" checked={status === 4} onClick={(e) => radioHandler(4)} crossOrigin={undefined} />
              </div>
            </div>

            {status === 3 && (
              <div>
                <Typography className="text-blue-gray-500 font-normal">Allergic To</Typography>
                <div className="columns-2">
                  <div className="basis-1/2">
                    <Checkbox label="Dogs" crossOrigin={undefined} />
                  </div>
                  <div className="basis-1/2">
                    <Checkbox label="Cats" crossOrigin={undefined} />
                  </div>
                </div>
              </div>
            )}

          </div>
        </fieldset>
      </Card>
    </>
  );
}

