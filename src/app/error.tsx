"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function ErrorShowPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-5  rounded-md border border-red-500 text-center">
        <h2 className="text-xl">Oops!</h2>
        <h4>Something went wrong!!</h4>
        <Link href={"/"}>
          <Button color="primary" variant="faded" fullWidth>
            Back to home page
          </Button>
        </Link>
      </div>
    </div>
  );
}
