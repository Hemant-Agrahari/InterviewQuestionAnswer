'use client';

import { useState } from 'react';
import TabNavigation from '@/components/TabNavigation';
import QuestionCard from '@/components/QuestionCard';
import { getCategoryQuestions, Question } from '@/data/questions';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Question['category']>('html');
  const questions = getCategoryQuestions(activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interview Questions & Answers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Master frontend development with curated Q&A
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Questions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {activeTab.toUpperCase()} Questions ({questions.length})
            </h2>
          </div>
          
          {questions.map((question, index) => (
            <QuestionCard 
              key={question.id} 
              question={question} 
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Click on any question to expand and view the answer
          </p>
        </div>
      </div>
    </div>
  );
}
