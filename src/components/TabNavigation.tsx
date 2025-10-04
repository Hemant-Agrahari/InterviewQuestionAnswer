"use client";

import { Question } from "@/data/questions";

interface TabNavigationProps {
  activeTab: Question["category"];
  onTabChange: (tab: Question["category"]) => void;
}

const tabs: { id: Question["category"]; label: string; color: string }[] = [
  {
    id: "html",
    label: "HTML",
    color: "bg-orange-500 hover:bg-orange-600 cursor-pointer",
  },
  {
    id: "css",
    label: "CSS",
    color: "bg-blue-500 hover:bg-blue-600 cursor-pointers",
  },
  {
    id: "javascript",
    label: "JavaScript",
    color: "bg-yellow-500 hover:bg-yellow-600 cursor-pointer",
  },
  {
    id: "nextjs",
    label: "Next.js",
    color: "bg-black hover:bg-gray-800 cursor-pointer",
  },
  {
    id: "react",
    label: "React",
    color: "bg-cyan-500 hover:bg-cyan-600 cursor-pointer",
  },
  {
    id: "output-based",
    label: "Output Based",
    color: "bg-green-500 hover:bg-green-600 cursor-pointer",
  },
];

export default function TabNavigation({
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 transform
              ${
                activeTab === tab.id
                  ? `${tab.color} scale-105 shadow-lg`
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
