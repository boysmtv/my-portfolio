'use client';

import { useState } from 'react';
import { education, certifications, achievements } from './portfolio-data';

const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
] as const;

export default function Background() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('education');

  return (
    <section id="background" className="py-24 border-t border-border-subtle">
      <div className="site-wrap">
        <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Background</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-text-primary">
          Credentials & education
        </h2>

        {/* Tab navigation */}
        <div className="flex gap-1 p-1 bg-base-800/50 rounded-lg w-fit mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-brand-500 text-white'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[200px]">
          {activeTab === 'education' && (
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="border border-border-subtle rounded-xl p-6 bg-base-800/30">
                  <h3 className="text-lg font-medium text-text-primary mb-1">{item.institution}</h3>
                  <p className="text-sm text-text-secondary">{item.degree}</p>
                  <p className="text-xs text-text-muted mt-2">{item.year}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-3">
              {certifications.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-border-subtle rounded-lg px-5 py-4 hover:border-brand-500/20 transition-colors duration-200"
                >
                  <div>
                    <div className="text-sm font-medium text-text-primary">{item.name}</div>
                    <div className="text-xs text-text-muted mt-0.5">{item.issuer}</div>
                  </div>
                  <div className="text-xs text-text-muted">{item.year}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-border-subtle rounded-lg px-5 py-4 hover:border-brand-500/20 transition-colors duration-200"
                >
                  <div>
                    <div className="text-sm font-medium text-text-primary">{item.title}</div>
                    <div className="text-xs text-text-muted mt-0.5">{item.organization}</div>
                  </div>
                  <div className="text-xs text-text-muted">{item.year}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
