"use client";

import Image from "next/image";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
interface Event {
    event: string;
    overall_status: string;
    awards: string[];
}

interface BotInfo {
    year: number;
    totalWins?: number;
    totalLosses?: number;
    events: Event[];
    [key: string]: any;
}

interface RobotDrawerProps {
    year: number;
    info: BotInfo;
}

export function RobotDrawer({ year, info }: RobotDrawerProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className="justify-start mx-2 my-2">
                    {year}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-2xl text-center">{year}</DrawerTitle>
                </DrawerHeader>

                <div className="flex flex-row px-20 py-6 justify-center gap-40">
                    <div className="flex justify-center">
                        <Image
                            className="object-scale-down"
                            src={`/robots/${year}.png`}
                            alt={`${year} Robot`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "250px" }}
                        />
                    </div>
                    <div className="flex flex-col">
                        {info.totalWins !== undefined && info.totalLosses !== undefined && (
                            <p className="text-sm">
                                The team went{" "}
                                <strong>
                                    {info.totalWins}-{info.totalLosses}
                                </strong>{" "}
                                during the {year} season.
                            </p>
                        )}
                        <h3 className="font-semibold mt-2">
                            Awards & Accomplishments
                        </h3>
                        {info.events.map((e, index) => (
                            <div key={index}>
                                {/* <div
                                    dangerouslySetInnerHTML={{ __html: e.overall_status }}
                                /> */}

                                {e.awards.length > 0 && (
                                    <>


                                        <ul className="list-disc list-inside text-sm">
                                            {e.awards.map((award, i) => (
                                                <li key={i}>{award}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
