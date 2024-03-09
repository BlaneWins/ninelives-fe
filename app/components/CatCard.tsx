import React, {useEffect, useState} from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";


export function CatCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make API call when the component mounts
    fetch("https://ninelivesapi.azurewebsites.net/api/rescue-groups/available/featured")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-4 w-full">
      {data.map((item : any, key) => (
        <Card className="w-64 md:w-96 mx-auto" key={key} >
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
    </div>
  );
};

