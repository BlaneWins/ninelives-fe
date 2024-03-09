import {Card, Typography, Textarea} from "@material-tailwind/react";
import React from "react";


export default function Page() {
  return (
    <>
      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <Typography variant="h4" color="blue-gray">References</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Please list two (2) references (non-relatives) who are familiar with you and your relationship with animals:
          </Typography>
          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
          </div>
        </fieldset>
      </Card>

      <Card className="mx-auto mt-8 mb-2 w-80 md:w-3/4">
        <fieldset className="w-3/4 mx-auto mb-10">
          <Typography variant="h4" color="blue-gray">Feedback, Sign, & Submit</Typography>
          <Typography color="gray" className="mt-1 mb-4 font-normal">
            Finish the application and let us know if there&apos;s anything you&apos;d like to add.
          </Typography>

          <div className="md:grid gap-6 md:grid-cols-2 max-w-screen-lg">
            <div className="col-span-2">
              <Textarea variant="standard" label="Anything you want to add (questions or comments):" />
            </div>

            <div className="col-span-2">
              <Typography variant="small">I hereby swear that the answers given by me on this application are true and complete to the best of my knowledge and I understand the application
                process.</Typography>
            </div>
          </div>

        </fieldset>
      </Card>
    </>
);
};

