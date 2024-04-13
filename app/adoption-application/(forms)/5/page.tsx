'use client';

import {Card, Checkbox, Input, Option, Radio, Select, Typography} from "@material-tailwind/react";


export default function Page() {
  return (
    <>
      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
            <div className="col-span-2">
              <Typography variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70">Reason(s) for wanting cat (check all that
                apply):</Typography>
              <div className="columns-1 md:columns-2 outline rounded-sm mt-4">
                <div className="basis-1/2">
                  <Checkbox label="Gift" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="Barn Cat" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="Breeding" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="Mouser" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="House Pet" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="For Children" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="Companionship" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="Replacement" crossOrigin={undefined}/>
                </div>
                <div className="basis-1/2">
                  <Checkbox label="Other" crossOrigin={undefined}/>
                </div>
              </div>
            </div>


            <div className="col-span-2">
              <Input variant="standard" label="If Other was selected, why:" crossOrigin={undefined}/>
            </div>

            <div>
              <Select variant="standard" label="Where will this cat live?">
                <Option>Outdoors</Option>
                <Option>Indoors</Option>
                <Option>Both</Option>
              </Select>
            </div>

            <div className="col-span-2">
              <Input variant="standard"
                     label="How long after adoption would you start allowing your cat/kitten outdoors?"
                     crossOrigin={undefined}/>
            </div>

            <div className="col-span-2">
              <Input variant="standard"
                     label="Who will care for this cat when you leave for vacation?"
                     crossOrigin={undefined}/>
            </div>

            <div className="col-span-2">
              <Input variant="standard"
                     label="What would you do if your new cat is not using the litter pan?"
                     crossOrigin={undefined}/>
            </div>

            <div className="col-span-2">
              <Input variant="standard"
                     label="What would you do if your new cat starts clawing the furniture?"
                     crossOrigin={undefined}/>
            </div>

            <div className="col-span-2">
              <Typography>If you currently have a dog/cat, are you using heartworm preventative?</Typography>
              <div className="flex gap-10 text-sm">
                <Radio name="currentHeartworm" label="Yes" crossOrigin={undefined}/>
                <Radio name="currentHeartworm" label="No" crossOrigin={undefined}/>
              </div>
              <Input variant="standard"
                     label="If so, what kind:"
                     crossOrigin={undefined}/>
            </div>

            <div className="col-span-2">
              <Typography>If you currently have a dog/cat, are you using flea and tick preventative?</Typography>
              <div className="flex gap-10 text-sm">
                <Radio name="currentFlea" label="Yes" crossOrigin={undefined}/>
                <Radio name="currentFlea" label="No" crossOrigin={undefined}/>
              </div>
              <Input variant="standard"
                     label="If so, what kind:"
                     crossOrigin={undefined}/>
            </div>

          </div>
        </fieldset>
      </Card>
    </>
  );
}

