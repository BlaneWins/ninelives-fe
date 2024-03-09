import React from 'react';
import {Select, Option, Input, Radio, Typography, Card } from "@material-tailwind/react";

export default function Page() {
  const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  const StateList = () => (
    <Select variant="standard" label="State">
      {states.map(state => <Option key={state}>{ state }</Option>) }
    </Select>
  );

  const [status, setStatus] = React.useState(0)

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <>
      <div className="flex flex-col items-center w-3/4 mx-auto my-10 gap-6">
        <Typography variant="h6">Statement: The majority of our adoptable cats have not been tested for FIV or FelV.</Typography>
        <Typography variant="h6">You must be at least 21 years old to adopt as the adoption contract is a legal document.</Typography>
        <Typography variant="small">Many factors go into determining which applicant will be matched with a particular animal. If you are not chosen for this pet, it does not mean that you
          are not considered a good pet owner or that your home is not acceptable. Our goal is to place this animal in the home that will best suit its needs.</Typography>
      </div>

      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <Typography variant="h4" color="blue-gray">Kitten/Cat(s) Info</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Which Kitten(s) or Cat(s) will you be adopting today?
          </Typography>
          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
            <div className="col-span-2">
              <Input variant="standard" label="Cat/Kitten's Name" crossOrigin={undefined} />
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                If multiple, list seperated by commas, if name unknown put &quot;Cat&quot;
              </Typography>
            </div>

            <Select variant="standard" label="Gender">
              <Option>Male</Option>
              <Option>Female</Option>
            </Select>

            <Input variant="standard" label="Color/ Markings" crossOrigin={undefined} />

            <Input variant="standard" label="Approx. Age" crossOrigin={undefined} />

          </div>
        </fieldset>
      </Card>

      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <Typography variant="h4" color="blue-gray">Personal Info</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Nice to meet you! Please enter your details.
          </Typography>
          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
            <Input variant="standard" label="First Name" crossOrigin={undefined} />
            <Input variant="standard" label="Last Name" crossOrigin={undefined} />
            <div className="col-span-2">
              <Input variant="standard" label="Street Address" crossOrigin={undefined} />
            </div>
            <Input variant="standard" label="Apt, suite, floor" crossOrigin={undefined} />
            <Input variant="standard" label="City" crossOrigin={undefined} />

            <StateList />

            <Input variant="standard" label="Zipcode" crossOrigin={undefined} />
            <Input variant="standard" label="Home/Cell Phone" crossOrigin={undefined} />

            <div>
              <Input variant="standard" label="How Long At Present Address?" crossOrigin={undefined} />
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Please input in number of years and months
              </Typography>
            </div>

            <Select variant="standard" label="Age Group">
              <Option>1-20</Option>
              <Option>21-25</Option>
              <Option>25-35</Option>
              <Option>36-59</Option>
              <Option>60+</Option>
            </Select>
          </div>
        </fieldset>
      </Card>

      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <Typography variant="h4" color="blue-gray">Employment Info</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Please tell us about your work details.
          </Typography>

          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
            <div className="col-span-2">
              <Typography className="text-blue-gray-500 font-normal">Are You Employed?</Typography>
              <div className="flex gap-10 text-sm text-blue-gray-500 font-normal">
                <Radio label="Yes" name="type" checked={status === 1} onClick={(e) => radioHandler(1)}
                       crossOrigin={undefined} />
                <Radio label="No" name="type" checked={status === 2} onClick={(e) => radioHandler(2)} crossOrigin={undefined} />
              </div>
            </div>
            {status === 1 && (
              <>
                <Input variant="standard" label="Place Of Employment" crossOrigin={undefined} />
                <Input variant="standard" label="Position" crossOrigin={undefined} />
                <Input variant="standard" label="Years Of Employment" crossOrigin={undefined} />
              </>
            )}
          </div>
        </fieldset>
      </Card>

    </>
  );
}

