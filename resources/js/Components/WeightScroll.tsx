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

export function WeightScroll() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="mx-auto text-center">
            <div className="relative flex flex-col items-center">
                {/* Display current number */}
                <div className="text-[64px] font-bold text-white">
                    {current} <span className="text-[20px]">Kg</span>
                </div>

                {/* Triangle Icon under the current number */}
                <div className="mt-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-triangle text-[#E2F163]"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" />
                    </svg>
                </div>

                {/* Carousel */}
                <div className="relative w-screen mt-4 bg-[#B3A0FF]">
                    <div className="cursor-none pointer-events-none absolute -translate-x-1/2 -translate-y-1 left-1/2 h-[105%] border-l-4 border-r-4 z-50 border-white w-20"></div>
                    <Carousel
                        setApi={setApi}
                        className="w-full max-w-xs mx-auto"
                        opts={{
                            dragFree: true,
                        }}
                    >
                        <CarouselContent className="flex w-full ">
                            {Array.from({ length: 100 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="grid pl-8 place-content-center basis-1/5"
                                >
                                    <span
                                        className={`my-10 text-[40px] font-semibold ${
                                            current == index - 1
                                                ? "text-white"
                                                : current == index - 2 ||
                                                  current == index
                                                ? "text-[#232323]"
                                                : "text-[#232323] text-opacity-50"
                                        }`}
                                    >
                                        {index - 1}
                                    </span>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
