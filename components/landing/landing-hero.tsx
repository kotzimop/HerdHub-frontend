"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export const LandingHero = () => {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Your Co-Pilot to Manage</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ["Births.", "Milkings.", "Alerts.", "Full Details."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Manage your Livestock 10x faster.
      </div>
      <div>
        <Link href={!isLoading && user ? "/dashboard" : "/auth/register"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Exploring Now
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
