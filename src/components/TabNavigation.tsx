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
    color: "bg-blue-500 hover:bg-blue-600 cursor-pointer",
  },
  {
    id: "javascript",
    label: "JavaScript",
    color: "bg-yellow-500 hover:bg-yellow-600 cursor-pointer",
  },
  {
    id: "typescript",
    label: "TypeScript",
    color: "bg-blue-600 hover:bg-blue-700 cursor-pointer",
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
  {
    id: "redux",
    label: "Redux",
    color: "bg-purple-500 hover:bg-purple-600 cursor-pointer",
  },
  {
    id: "socket",
    label: "Socket",
    color: "bg-pink-500 hover:bg-pink-600 cursor-pointer",
  },
];

export default function TabNavigation({
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform
                relative overflow-hidden group
                ${
                  activeTab === tab.id
                    ? `${tab.color} scale-105 shadow-lg ring-4 ring-opacity-50`
                    : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 hover:scale-102"
                }
              `}
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
