import * as React from "react";
import { Link } from "@inertiajs/react";
import beginner from "../../assets/beginner.png";
import intermediate from "../../assets/intermediate.png";
import advance from "../../assets/advance.png";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

export function Training() {
    const trainingLevels = [
        {
            title: "Beginner",
            description: "For those just starting their fitness journey.",
            link: "/beginner",
            foto: beginner
        },
        {
            title: "Intermediate",
            description: "For those with some experience.",
            link: "/intermediate",
            foto: intermediate
        },
        {
            title: "Advanced",
            description: "For those with a high level of fitness.",
            link: "/advance",
            foto: advance
        },
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
                            <Link href={level.link}>    
                                <Card className="rounded-md shadow-lg cursor-pointer">
                                    <img
                                        src={level.foto}
                                        alt="trainingfoto"
                                        className="object-cover w-full h-48 rounded-t-md "
                                    />

                                    <CardContent className="p-4 text-left bg-black/70 rounded-b-md">
                                        <h3 className="text-[20px] font-bold font-poppins text-[#896CFE]">
                                            {level.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {level.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
