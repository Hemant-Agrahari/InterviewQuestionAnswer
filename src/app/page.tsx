'use client';

import { useState } from 'react';
import TabNavigation from '@/components/TabNavigation';
import QuestionCard from '@/components/QuestionCard';
import { getCategoryQuestions, Question } from '@/data/questions';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Question['category']>('html');
  const questions = getCategoryQuestions(activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🎯 Ace Your Interview
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-sm" style={{ fontFamily: 'var(--font-poppins)' }}>
            Interview Questions & Answers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master frontend development with <span className="font-semibold text-indigo-600 dark:text-indigo-400">115+ curated</span> questions
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Questions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
              <span className="text-2xl">📚</span>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200" style={{ fontFamily: 'var(--font-poppins)' }}>
                {activeTab.toUpperCase()} Questions
              </h2>
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-bold">
                {questions.length}
              </span>
            </div>
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
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 justify-center">
              <span className="text-lg">💡</span>
              <span className="font-medium">Tip:</span> Click on any question to expand and view the answer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
