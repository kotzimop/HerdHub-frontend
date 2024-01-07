"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-16 w-24 mr-4">
          <Image fill alt="Logo" src="/images/logo-tr-white.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          iHerdHub
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={user ? "/dashboard" : "/auth/register"}>
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-100 rounded-full"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
