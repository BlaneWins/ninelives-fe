import React from "react";
import { PencilSquareIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Radio,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Pet Name", ""];

const TABLE_ROWS = [
  {
    name: "Bailey Atkinson",
  },
  {
    name: "Syrax Atkinson",
  },

];

export function PetInfo() {
  return (
    <Card className="h-full w-full" shadow={false}>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              List Pets
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Please list your present and past pets, starting with the most recent first.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <AddPet />
          </div>
        </div>

      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <Typography>
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
          </thead>
          <tbody>
          {TABLE_ROWS.map(
            ({ name }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">

                      <div className="flex flex-col">
                        <Typography>
                          {name}
                        </Typography>
                      </div>
                    </div>
                  </td>

                  <td className={classes + " flex justify-end"}>
                    <Tooltip content="Edit Pet">
                      <IconButton variant="text">
                        <PencilSquareIcon className="h-5 w-5" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            },
          )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export function AddPet() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [status, setStatus] = React.useState(0)

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="flex items-center gap-3" size="sm">
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Pet
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Pet Info</DialogHeader>
        <DialogBody>
          <fieldset className="w-3/4 mx-auto mb-10">
            <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">

              <Input variant="outlined" label="Pet Name" placeholder="Pet Name" crossOrigin={undefined} />
              <Input variant="outlined" label="Age" placeholder="Age" crossOrigin={undefined} />
              <Input variant="outlined" label="Breed/Type" placeholder="Breed/Type" crossOrigin={undefined} />

              <br/>
              <div>
                <Typography className="text-blue-gray-500 font-normal">Gender</Typography>
                <div className="flex gap-10 text-sm text-blue-gray-500 font-normal">
                  <Radio name="type" label="Male" crossOrigin={undefined} />
                  <Radio name="type" label="Female" crossOrigin={undefined} />
                </div>
              </div>

              <div>
                <Typography className="text-blue-gray-500 font-normal">Spayed/Neutered</Typography>
                <div className="flex gap-10 text-sm text-blue-gray-500 font-normal">
                  <Radio name="type" label="Yes" crossOrigin={undefined} />
                  <Radio name="type" label="No" crossOrigin={undefined} />
                </div>
              </div>

              <div>
                <Typography className="text-blue-gray-500 font-normal">Current Pet?</Typography>
                <div className="flex gap-10 text-sm text-blue-gray-500 font-normal">
                  <Radio name="type" label="Yes" checked={status === 1} onClick={(e) => radioHandler(1)} crossOrigin={undefined} />
                  <Radio name="type" label="No" checked={status === 2} onClick={(e) => radioHandler(2)} crossOrigin={undefined} />
                </div>
              </div>

              {status === 2 && (
                <div className="col-span-2">
                  <Input variant="outlined" label="What happened to the pet?" crossOrigin={undefined} />
                </div>
              )}


            </div>
          </fieldset>

        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}