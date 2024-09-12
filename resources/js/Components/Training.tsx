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
    return (
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 md:basis-1/2 lg:basis-1/4"
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
                                        Beginner
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        lorem ipsum
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
