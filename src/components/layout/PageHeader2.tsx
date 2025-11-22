"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface IPageHeader2 {
  title: string;
  children?: React.ReactNode;
}

const PageHeader2 = ({ title, children }: IPageHeader2) => {
  const router = useRouter();

  return (
    <div className="flex items-center overflow-x-auto md:justify-between bg-neutral-10 px-6 h-20">
      <div onClick={() => router.back()} className="flex items-center gap-3">
        <Button variant={"outline"} className="w-10 h-10">
          <ArrowLeft />
        </Button>
        <p className="heading-6">{title}</p>
      </div>
      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
};

export default PageHeader2;
