import * as React from "react";
import trainingfoto from "../../assets/training-photo.png";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

export function Training() {
    // Define content for each training level
    const trainingLevels = [
        { title: "Beginner", description: "Introduction to basics" },
        { title: "Intermediate", description: "Building on fundamentals" },
        { title: "Advanced", description: "Mastering complex concepts" },
    ];

    return (
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {trainingLevels.map((level, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <Card className="rounded-md shadow-lg ">
                                {/* Image Section */}
                                <img
                                    src={trainingfoto}
                                    alt="trainingfoto"
                                    className="object-cover w-full h-48 rounded-t-md "
                                />
                                {/* Content Section */}
                                <CardContent className="p-4 text-left bg-black/70 rounded-b-md">
                                    <h3 className="text-[20px] font-bold font-poppins text-[#896CFE]">
                                        {level.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {level.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
