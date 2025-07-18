"use client";
import * as React from "react";
// import { useState } from "react";
import { RobotDrawer } from "@/components/robots";
import { items } from "@/data/events.json";
// import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const { bots } = items;

  return (
    <>
      <div className="pt-24 flex justify-center">
      <div className="w-2/3">
        {bots.map((bot, index) => (
          <RobotDrawer key={index} year={bot.year} info={bot} />
        ))}
      </div>
      </div>
    </>
  );
}

{/* <Carousel className="w-4/5 p-24 z-[0]">
        <CarouselContent>
          {bots.map((bot, index) => (
            <CarouselItem key={index}>
              <div>
                <div className="font-bold text-3xl p-12">
                  <h1>{bot.year}</h1>
                </div>
                <div className="flex justify-center gap-10 flex-col sm:flex-row">
                  <div>
                    <Image
                      className="object-scale-down"
                      src={`/robots/${bot.year}.png`}
                      alt="slides"
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "300px" }}
                    />
                  </div>
                  <div className="text-left flex items-start flex-col p-6 pl-0 w-1/2">
                    <p className="text-xs sm:text-sm">
                      <br />
                      The team went {bot.totalWins}-{bot.totalLosses} during the
                      2024 season.
                    </p>
                    <div className="p-6 pl-0 flex justify-center items-center w-[]]">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-[40vw] sm:w-[35vw]"
                      >
                        {bot.events.map((e, index) => (
                          <AccordionItem
                            value={`item-${index + 1}`}
                            key={index}
                          >
                            <AccordionTrigger>{e.event}</AccordionTrigger>
                            <AccordionContent>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: e.overall_status,
                                }}
                              ></div>
                              <h1 className="font-bold">
                                {e.awards.length > 0
                                  ? "Awards && Accomplishments"
                                  : " "}{" "}
                              </h1>
                              {e.awards}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1] scale-125" />
        <CarouselNext className="bg-[#DDEFEF12] border-[#DDEFEF32] text-[#6A8FB1] scale-125" />
      </Carousel> */}