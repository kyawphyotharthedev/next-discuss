"use client";
import { RotateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className=" flex justify-center items-center">
      <RotateLoader color="#36d7b7" />
    </div>
  );
}
