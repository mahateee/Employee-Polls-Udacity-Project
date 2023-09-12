import React from "react";
import Nav from "./Nav";
import Container from "./Container";
import { useState } from "react";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  return (
    <div>
      <Nav />
      <Container>
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li class="mr-2">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
                onClick={() => handleTabSelect("tab1")}
                class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
              >
                About
              </button>
            </li>
            <li class="mr-2">
              <button
                id="services-tab"
                data-tabs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="false"
                onClick={() => handleTabSelect("tab2")}
                class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Services
              </button>
            </li>
          </ul>
          {activeTab === "tab1" ? (
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
            </div>
          ) : null}
          {activeTab === "tab2" ? (
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing 22
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
              <div class="p-8">
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Marketing
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Plan it, create it, launch it. Collaborate seamlessly with all
                  the organization and hit your marketing goals every month with
                  our marketing plan.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
