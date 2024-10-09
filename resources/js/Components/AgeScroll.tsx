import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/Components/ui/carousel";

interface AgeScrollProps {
    onAgeChange: (age: number) => void;
}

export function AgeScroll({ onAgeChange }: AgeScrollProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);
        onAgeChange(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            const newAge = api.selectedScrollSnap() + 1;
            setCurrent(newAge);
            onAgeChange(newAge);
        });
    }, [api]);

    return (
        <div className="mx-auto text-center">
            <div className="relative flex flex-col items-center">
                <div className="text-[64px] font-bold text-white">
                    {current}
                </div>
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

                <div className="relative w-screen mt-4 bg-[#B3A0FF]">
                    <Carousel
                        setApi={setApi}
                        className="w-full max-w-xs mx-auto"
                        opts={{
                            dragFree: true,
                        }}
                    >
                        <CarouselContent className="flex w-full">
                            {Array.from({ length: 100 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="grid pl-8 place-content-center basis-1/5"
                                >
                                    <span
                                        className={`my-10 text-[40px] font-semibold ${
                                            current === index - 1
                                                ? "text-white"
                                                : current === index ||
                                                  current === index - 2
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
