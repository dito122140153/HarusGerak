import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/Components/ui/carousel";

interface HeightScrollProps {
    onHeightChange: (age: number) => void;
}

export function HeightScroll({ onHeightChange }: HeightScrollProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 100);
        onHeightChange(api.selectedScrollSnap() + 100);

        api.on("select", () => {
            const newAge = api.selectedScrollSnap() + 100;
            setCurrent(newAge);
            onHeightChange(newAge);
        });
    }, [api]);


// export function HeightScroll() {
//     const [api, setApi] = React.useState<CarouselApi>();
//     const [current, setCurrent] = React.useState(100);
//     const [count, setCount] = React.useState(0);

//     React.useEffect(() => {
//         if (!api) {
//             return;
//         }

//         setCount(api.scrollSnapList().length);
//         setCurrent(api.selectedScrollSnap() + 100);

//         api.on("select", () => {
//             setCurrent(api.selectedScrollSnap() + 100);
//         });
//     }, [api]);

    return (
        <div className="max-w-xs mx-auto ">
            <div className="text-[64px] font-bold text-white">
                {current} <span className="text-[20px]">Cm</span>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div className="bg-[#B3A0FF] rounded-full">
                    <Carousel
                        opts={{
                            align: "start",
                            dragFree: true,
                        }}
                        orientation="vertical"
                        setApi={setApi}
                        className="w-full max-w-xs"
                    >
                        <CarouselContent className="h-[400px]">
                            {Array.from({ length: 100 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="grid px-8 place-content-center basis-1/5"
                                >
                                    <span
                                        className={` font-semibold ${
                                            current === index + 98
                                                ? "text-white text-[40px]"
                                                : current === index + 99 ||
                                                  current === index + 97
                                                ? "text-[#232323] text-[30px]"
                                                : "text-[#232323] text-opacity-50 text-[20px]"
                                        }`}
                                    >
                                        {index + 98}
                                    </span>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#E2F163] icon icon-tabler icons-tabler-filled icon-tabler-triangle mb-10"
                    transform="rotate(-90 12 12)"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" />
                </svg>
            </div>
        </div>
    );
}
