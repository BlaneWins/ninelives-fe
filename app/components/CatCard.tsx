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
    <div className="flex justify-evenly gap-4 w-full">
      {data.map((item : any, key) => (
        <Card className="w-96" key={key} >
          <CardHeader floated={false} className="h-80">
            <img src={item.PrimaryPictureUrl} alt="profile-picture" className="w-full h-full object-cover" />
          </CardHeader>

          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {item.Attributes.Name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {item.Attributes.AgeGroup}
            </Typography>
          </CardBody>

          <CardFooter className="flex flex-col justify-center pt-0">
            <div className="flex flex-row justify-center gap-2 mb-4">
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
            <p className="line-clamp-3">
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

