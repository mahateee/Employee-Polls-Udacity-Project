import React from "react";

export default function Container({ children }) {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {children}
      </div>
    </section>
  );
}
