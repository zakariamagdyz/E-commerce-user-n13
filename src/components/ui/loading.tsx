"use client";
import React from "react";
import { ClipLoader } from "react-spinners";

function Loading() {
  return (
    <section className="grid min-h-[70vh] place-items-center">
      <ClipLoader color="#3498db" size={50} />
    </section>
  );
}

export default Loading;
