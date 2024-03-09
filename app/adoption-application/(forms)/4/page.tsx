import React from 'react';
import {Card, Input, Option, Radio, Select, Typography} from "@material-tailwind/react";


export default function Page() {
  return (
    <>
      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">

          <Typography variant="h4" color="blue-gray">Questionnaire</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Please fill out the rest of the questions to help us determine your eligibility.
          </Typography>

          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">

            <div>
              <Typography>Will the animal live with you?</Typography>
              <div className="flex gap-10 text-sm">
                <Radio name="type" label="Yes" crossOrigin={undefined}/>
                <Radio name="type" label="No" crossOrigin={undefined}/>
              </div>
            </div>

            <div className="col-span-2">
              <Input variant="standard" label="If not, with whom will the animal live:" crossOrigin={undefined}/>
            </div>

            <div>
              <Typography>Have you ever surrendered an animal to a shelter?</Typography>
              <div className="flex gap-10 text-sm">
                <Radio name="type" label="Yes" crossOrigin={undefined}/>
                <Radio name="type" label="No" crossOrigin={undefined}/>
              </div>
            </div>

            <div className="col-span-2">
              <Input variant="standard" label="If so, explain:" crossOrigin={undefined}/>
            </div>


            <div className="col-span-2">
              <Typography>Would you agree to a <strong className="font-bold">9 Lives Cat Rescue</strong> representative
                visiting your home to check on the animal you are adopting?</Typography>
              <div className="flex gap-10 text-sm">
                <Radio name="type" label="Yes" crossOrigin={undefined}/>
                <Radio name="type" label="No" crossOrigin={undefined}/>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-2">
                <Typography>In order to provide for any necessary medical care and nutritional requirements for this
                  animal, I am willing to spend <strong className="underline font-bold">yearly</strong>:</Typography>
              </div>
            </div>

            <Select variant="standard" label="How much?" >
              <Option>$50</Option>
              <Option>$100</Option>
              <Option>$250</Option>
              <Option>$500</Option>
              <Option>Other</Option>
            </Select>

            <div className="col-span-2">
              <Input variant="standard" label="If Other input dollar amount:" placeholder="" crossOrigin={undefined}/>
            </div>

          </div>
        </fieldset>
      </Card>
    </>
);
}

