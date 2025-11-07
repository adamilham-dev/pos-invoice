import Image from "next/image";
import { Bell, Menu } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <div className="w-full flex items-center justify-between bg-primary px-4 py-2">
      <div className="flex items-center gap-3 md:divide-x">
        <Button
          onClick={onMenuClick}
          variant={"ghost"}
          className="lg:hidden text-neutral-10 p-0 h-auto"
        >
          <Menu />
        </Button>
        <div className="w-[75px] h-auto pr-3">
          <Image
            src={"/logo-white.png"}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <p className="heading-5 text-neutral-10 hidden sm:block">PosInvoice</p>
      </div>
      <div className="flex items-center gap-4 text-neutral-10">
        <Bell fill="white" />
        <div className="md:pl-5 md:pr-1.5 md:py-1.5 p-1.5 bg-white/15 flex items-center gap-3 rounded-full">
          <div className="hidden sm:flex flex-col text-end">
            <p className="body-small-semibold">Fadhil Ibrahim</p>
            <p className="caption-small-reguler">Admin</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-neutral-60 body-large-semibold flex items-center justify-center">
            FI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
