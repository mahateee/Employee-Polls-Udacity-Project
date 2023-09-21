import React from "react";
import Nav from "./Nav";

export default function Container({ children }) {
  return (
    <section className="bg-gray-50 h-fit dark:bg-gray-900">
      <Nav />
      <div className="lg:h-screen px-6 py-8 mx-auto md:h-screen lg:py-0">
        {children}
      </div>
    </section>
  );
}
