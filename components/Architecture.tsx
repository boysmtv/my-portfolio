'use client';
import { motion } from 'framer-motion';

export default function Architecture() {
  return (
    <section id="architecture" className="relative">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Architecture & System Design</h2>
        <p className="text-gray-400 max-w-3xl">
          I advocate for Clean Architecture and modularization. By separating concerns into distinct layers, we achieve testability, maintainability, and scalable codebases.
        </p>
      </div>

      <div className="p-8 rounded-xl bg-surface border border-surfaceBorder overflow-x-auto">
        <div className="min-w-[700px] flex items-center justify-between gap-4 font-mono text-sm">
          {/* UI Layer */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg text-center">
              <span className="text-blue-400 font-bold block mb-1">UI Layer</span>
              <span className="text-gray-400 text-xs">Activities, Fragments, Compose</span>
            </div>
          </div>
          
          <div className="text-gray-600">→</div>

          {/* Presentation Layer */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg text-center">
              <span className="text-purple-400 font-bold block mb-1">ViewModel</span>
              <span className="text-gray-400 text-xs">MVI State Management, LiveData/Flow</span>
            </div>
          </div>

          <div className="text-gray-600">→</div>

          {/* Domain Layer */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-center">
              <span className="text-green-400 font-bold block mb-1">Domain</span>
              <span className="text-gray-400 text-xs">UseCases, Entities, Business Logic</span>
            </div>
          </div>

          <div className="text-gray-600">→</div>

          {/* Data Layer */}
          <div className="flex flex-col gap-2 flex-[1.5]">
            <div className="w-full bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg text-center mb-2">
              <span className="text-orange-400 font-bold block mb-1">Repository</span>
              <span className="text-gray-400 text-xs">Data Abstraction</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-red-500/10 border border-red-500/30 p-2 rounded text-center text-xs text-red-400">Local (Room)</div>
              <div className="flex-1 bg-teal-500/10 border border-teal-500/30 p-2 rounded text-center text-xs text-teal-400">Remote (API)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}