'use client';

import { CatCard } from "@/app/components/CatCard";
import Image from 'next/image';
import heroImg from '../public/images/9LivesSimba.png';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

export default function Page() {

  return (
      <>
        <div className="flex flex-column flex-md-row h-[50vh] mt-20">
          <div className="flex flex-1 items-center z-10">
            <div className="p-10">
              <h3 className="text-5xl font-bold">Be a Hero to Furry Friends: Support Our Cat Rescue Mission!</h3>
              <p className="text-xl mt-6">
                Change a cat&apos;s life today by opening your heart and home to a furry friend waiting for a family.
              </p>
                <Link href="available-cats">
                    <Button className="btn btn-primary bg-primary mt-6 text-white">Browse Cats</Button>
                </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <Image className="w-full" src={heroImg} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-4 h-[90vh]">
          <h2 className="text-2xl mb-2">Featured Cats:</h2>
          <CatCard />
        </div>
      </>
  );

}
