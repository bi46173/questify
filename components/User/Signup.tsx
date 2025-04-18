import { SignUp, useClerk } from "@clerk/nextjs";
import Lottie from "lottie-react";
import formLottie from "@/public/lotties/forms.json";
import { clerkAppearance } from "@/lib";
import Link from "next/link";

export default function SignUpForm() {
  const { loaded } = useClerk();
  return (
    <>
      <div className="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href="/">Questify</Link>
          </div>
          <Lottie
            animationData={formLottie}
            className="flex justify-center items-center p-16"
            loop={true}
          />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Create and customize your survey or questionnaire with ease.
              </p>
            </blockquote>
          </div>
        </div>
        <div className="flex justify-center">
          {loaded ? <SignUp appearance={clerkAppearance} /> : "Loading..."}
        </div>
      </div>
    </>
  );
}
