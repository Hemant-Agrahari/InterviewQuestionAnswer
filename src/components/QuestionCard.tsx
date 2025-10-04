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
        border-l-4 rounded-lg p-6 transition-all duration-300 cursor-pointer
        ${categoryColors[question.category]}
        hover:shadow-lg
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-sm font-bold ${categoryTextColors[question.category]}`}>
              Q{index + 1}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {question.question}
            </h3>
          </div>
          
          <div className={`
            overflow-hidden transition-all duration-300
            ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
              {question.answer.split('\n').map((line, idx) => (
                line.trim() && <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`
          transition-transform duration-300 text-gray-500
          ${isExpanded ? 'rotate-180' : 'rotate-0'}
        `}>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        {isExpanded ? 'Click to collapse' : 'Click to expand answer'}
      </div>
    </div>
  );
}

