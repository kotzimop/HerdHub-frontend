import { PasswordResetForm } from "@/components/forms";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "iHerdHub | Password Reset",
  description: "iHerdHubpassword reset page",
};

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-36 w-auto"
          src="/images/logo-tr.png"
          width={150}
          height={150}
          alt="Auth"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <PasswordResetForm />
      </div>
    </div>
  );
}
