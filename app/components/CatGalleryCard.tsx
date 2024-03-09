'use client';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

export function CatGalleryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make API call when the component mounts
    fetch("https://ninelivesapi.azurewebsites.net/api/rescue-groups/available")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {data.map((item : any) => (
        // eslint-disable-next-line react/jsx-key
        <Card className="w-64 md:w-96 mx-auto">
          <CardHeader floated={false} className="h-64 w-64 mx-auto">
            <Image src={item.PrimaryPictureUrl} alt="profile-picture" className="w-full h-full object-cover" height={250} width={250} />
          </CardHeader>

          <CardBody className="text-center p-2">
            <Typography variant="h5" color="blue-gray">
              {item.Attributes.Name}
            </Typography>
            <Typography color="blue-gray" className="font-small" textGradient>
              {item.Attributes.AgeGroup}
            </Typography>

            <div className="flex flex-row justify-center gap-2 mt-2">
              <Chip
                size="sm"
                variant="outlined"
                className="rounded-full text-black lowercase"
                value="Playful"
              />
              <Chip
                size="sm"
                variant="outlined"
                className="rounded-full text-black lowercase"
                value="Affectionate"
              />
            </div>
          </CardBody>

          <CardFooter className="flex flex-col justify-center p-6">
            <p className="line-clamp-3 text-sm">
              {item.Attributes.DescriptionText}
            </p>
            <div className="card-actions flex justify-center w-full mt-4">
              <Button variant="outlined" className="w-full">
                Details
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
