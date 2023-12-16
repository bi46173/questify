import { Search } from "../ui/search";
import { BellIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Questify from "@/public/images/questify.png";
import Image from "next/image";
import { useMediaScreen } from "@/lib";
import NavMobile from "./NavMobile";
interface P {
  toggleNav?: () => void;
}

export const Header = ({ toggleNav }: P) => {
  const [smScreen] = useMediaScreen("sm");
  return (
    <div className="pt-4 md:px-4 px-1 flex flex-col">
      <div className=" h-[100px] flex flex-row items-center">
        <div className="lg:w-1/2 w-1/6 md:text-xl sm:text-sm text-xs font-bold text-gray-700">
          {smScreen && (
            <HamburgerMenuIcon
              className="h-[32px] w-[32px] pl-2 hover:scale-110 cursor-pointer"
              onClick={() => smScreen && toggleNav && toggleNav()}
            />
          )}
          {!smScreen && <NavMobile />}
        </div>
        <div className="flex lg:w-1/2 w-5/6 items-center justify-end">
          <Search className="md:px-2 px-1" />
          <div className="flex justify-center items-center h-[32px] w-[32px]">
            <BellIcon className="h-[24px] w-[24px] hover:scale-110" />
          </div>
          <div className="px-2">
            <SignedIn>
              <UserButton afterSignOutUrl="/login" signInUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};
