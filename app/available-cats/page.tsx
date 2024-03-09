import React from 'react';
import { CatGalleryCard } from "../components/CatGalleryCard";

export default function Page() {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CatGalleryCard/>
        </div>
    );
}
