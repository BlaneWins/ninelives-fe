'use client';

import React from 'react';
import { Input, Button, Textarea } from "@material-tailwind/react";

export default function Contact() {
    return (
        <>
            <div className="flex items-center justify-center h-[80vh]">
                <form action="/public" method="post" className="w-full md:w-[40%] h-[500px] flex flex-col justify-around items-center p-10 md:outline md:outline-secondary rounded-lg">
                    <fieldset className="md:w-full md:relative">
                        <legend className="text-3xl mt-10 self-start md:absolute md:-top-[150px] md:bg-white md:p-4">Contact Us</legend>

                        <div className="w-full mt-10">
                            <Input label="Name" crossOrigin={undefined} />
                        </div>

                        <div className="w-full mt-6">
                            <Input label="Email" crossOrigin={undefined} />
                        </div>

                        <div className="w-full mt-6">
                            <Textarea label="Message" />
                        </div>

                        <div className="w-full mt-6">
                            <Button className="btn bg-primary text-white" type="submit">Send your message</Button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

