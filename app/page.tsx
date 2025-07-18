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

<main className="flex flex-col lg:flex-row justify-between font-medium mt-20 px-2 text-xs lg:text-sm lg:px-48 py-20 gap-10 items-center text-[#6A8FB1]">
      <div>
        <Image src="/john.png" alt="image" width={400} height={100} />
      </div>
      <div
        className="w-1/2">
        <Image src="/mission.svg" alt="txt" width={300} height={0} />
        <p
          className="py-12 text-ms">
          To inspire, motivate, and educate about FIRST, and to make STEAM an
          integral part of our students lives as well as our community. We are
          dedicated to teaching members real-world applications in both
          engineering and community outreach so that they will be able to
          succeed in the real world. We strive to maintain outstanding
          relationships between students, advisors, mentors, sponsors, and
          teachers. We believe that engineering is for everyone.
        </p>
      </div>
    </main>        

        <div className="flex justify-between gap-10 m-16 p-6 items-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  );
}
