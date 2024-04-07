'use client';

import { CatCard } from "@/app/components/CatCard";
import Image from 'next/image';
import heroImg from '../public/images/9LivesSimba.png';
import { Card, Button } from '@material-tailwind/react';
import Link from 'next/link';
import { gabriela } from '@/app/ui/fonts';
import dynamic from 'next/dynamic';
import "odometer/themes/odometer-theme-default.css";
import React, {useEffect, useState} from "react";


const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <div>

  </div>,
})

const Page = () => {



  const [value, setValue] = useState(0o0);

  useEffect(() => {
    const timeoutId = setTimeout(() => setValue(4589), 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row md:w-[1200px] mx-auto my-6">
        <div className="hidden md:block bg-emerald bg-blur bg-shape opacity-30"></div>
        <div className="hidden md:block bg-xanthous bg-blur bg-shape opacity-30"></div>
        <div className="hidden md:block bg-bright-pink bg-blur bg-shape opacity-30"></div>
        <div className="flex flex-1 items-center z-10">
          <div className="p-10">
            <h3 className={`${gabriela.className} text-2xl md:text-5xl font-semibold`}>9 Lives Cat Rescue</h3>
            <h3 className={"text-xl md:text-2xl font-semibold mt-4"}>Support Our Cat Rescue
              Mission!</h3>
            <p className="text-sm md:text-lg mt-6">
              Change a cat&apos;s life today by opening your heart and home to a furry friend waiting for a family.
            </p>

            <Link href="available-cats">
              <Button className="btn btn-primary bg-primary w-full md:w-48 mt-6 text-white block md:inline-block mx-auto">Browse Cats</Button>
            </Link>

            <Link href="about">
              <Button className="btn text-accent border-accent w-full md:w-48 mt-6 md:ml-6 block md:inline-block mx-auto" variant="outlined" >About Our Mission</Button>
            </Link>


          </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <Image className="w-3/4 md:w-full" src={heroImg} alt=""/>
        </div>
      </div>


      <div className="flex flex-col justify-start items-center m-4 md:w-[1200px] md:h-[800px] mx-auto p-6">
        <h2 className="text-2xl mb-2">Featured Cats:</h2>
        <CatCard/>
      </div>


      <div className="flex flex-col md:flex-row gap-10 mt-6 justify-center items-center">
        <Card className="w-72 h-48 p-4 items-center justify-evenly bg-primary text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
          </svg>

          <h3 className="mt-6 text-xl bold">
            Cats adopted to date:
          </h3>
          <div className="mt-2">
            <Odometer value={value} format='(,ddd)' animation="count" className="!text-5xl" theme="default"/>
          </div>
        </Card>

        <Card className="w-72 h-48 p-4 items-center justify-evenly bg-secondary text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
          </svg>

          <h3 className="mt-6 text-xl bold">
            Cats adopted to date:
          </h3>
          <div className="mt-2">
            <Odometer value={value} format='(,ddd)' animation="count" className="!text-5xl" theme="default"/>
          </div>
        </Card>

        <Card className="w-72 h-48 p-4 items-center justify-evenly bg-accent text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
          </svg>

          <h3 className="mt-6 text-xl bold">
            Cats adopted to date:
          </h3>
          <div className="mt-2">
            <Odometer value={value} format='(,ddd)' animation="count" className="!text-5xl" theme="default"/>
          </div>
        </Card>
      </div>
    </>
  );

}

export default Page
