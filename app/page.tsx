"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" w-full">
        <div className="flex justify-between gap-10 pt-36 p-24 items-center">
          <div>
            <Image
              src="/test-team-303.svg"
              alt="Team Team 303"
              width={600}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/EI-2024.png"
              alt="Team pic of 303 winning impact at Warren Hills 2024"
              width={550}
              height={100}
            />
          </div>
        </div>

        <div className="flex justify-between gap-10 m-16 p-6 items-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  );
}
