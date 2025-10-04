'use client';

import { Question } from '@/data/questions';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
  index: number;
}

export default function QuestionCard({ question, index }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColors = {
    html: 'border-orange-500 bg-orange-50 dark:bg-orange-950/20',
    css: 'border-blue-500 bg-blue-50 dark:bg-blue-950/20',
    javascript: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20',
    nextjs: 'border-black dark:border-gray-400 bg-gray-50 dark:bg-gray-900/20',
    react: 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/20',
    'output-based': 'border-green-500 bg-green-50 dark:bg-green-950/20',
  };

  const categoryTextColors = {
    html: 'text-orange-700 dark:text-orange-300',
    css: 'text-blue-700 dark:text-blue-300',
    javascript: 'text-yellow-700 dark:text-yellow-300',
    nextjs: 'text-gray-900 dark:text-gray-100',
    react: 'text-cyan-700 dark:text-cyan-300',
    'output-based': 'text-green-700 dark:text-green-300',
  };

  return (
    <div 
      className={`
        border-l-4 rounded-xl p-6 transition-all duration-300 cursor-pointer
        ${categoryColors[question.category]}
        hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1
        backdrop-blur-sm
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`
              text-sm font-bold px-3 py-1 rounded-full
              ${categoryTextColors[question.category]}
              bg-white dark:bg-gray-800 shadow-sm
            `}>
              Q{index + 1}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100" style={{ fontFamily: 'var(--font-poppins)' }}>
              {question.question}
            </h3>
          </div>
          
          <div className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 text-[15px]">
                {question.answer.split('\n').map((line, idx) => (
                  line.trim() && <p key={idx} className="animate-fade-in">{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className={`
          transition-all duration-300 flex-shrink-0
          ${isExpanded ? 'rotate-180 text-indigo-500' : 'rotate-0 text-gray-400'}
        `}>
          <svg 
            className="w-7 h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
      
      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <span className={`
          inline-block w-2 h-2 rounded-full
          ${isExpanded ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}
        `}></span>
        {isExpanded ? 'Click to collapse' : 'Click to expand answer'}
      </div>
    </div>
  );
}

