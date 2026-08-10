'use client';

const categories = [
  {
    label: 'Android',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 16V9a7 7 0 0 1 14 0v7M12 5v1M8 3h8M7 16a2 2 0 0 1-2-2m14 2a2 2 0 0 0 2-2m-16 0h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Coroutines', 'Flow/StateFlow', 'Room', 'Hilt/Dagger', 'OkHttp/Retrofit', 'Firebase'],
  },
  {
    label: 'Backend',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M5 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['Spring Boot', 'REST API', 'Microservices', 'Hibernate/JPA', 'PostgreSQL', 'MySQL', 'ISO8583', 'JPOS'],
  },
  {
    label: 'Architecture',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['System Design', 'Distributed Systems', 'Scalable Systems', 'Microservices'],
  },
  {
    label: 'DevOps',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure', 'Virtual Machine', 'Networking'],
  },
  {
    label: 'Tools',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Agile/Scrum'],
  },
  {
    label: 'Security',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['Vulnerability Assessment', 'Penetration Testing', 'Secure Coding'],
  },
  {
    label: 'Domain',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['Fintech', 'Mobile Banking', 'Payment Systems', 'ISO8583', 'E-KYC'],
  },
  {
    label: 'Leadership',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ['Technical Leadership', 'Team Management', 'Mentoring', 'Code Review'],
  },
];

export default function TechStack() {
  return (
    <section id="capabilities" className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.2), rgba(59,130,246,0.2), transparent) 1' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-1/4 h-1/2 bg-accent-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="site-wrap relative">
        <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Capabilities</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
          <span className="bg-gradient-to-r from-white to-brand-200 bg-clip-text text-transparent">Technical stack</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group rounded-xl p-5 transition-all duration-300 bg-gradient-to-br from-brand-500/5 to-transparent border border-brand-500/10 hover:border-brand-500/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-brand-400 group-hover:text-brand-300 transition-colors">
                  {cat.icon}
                </div>
                <div className="text-sm font-medium text-text-primary">{cat.label}</div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="border border-brand-500/15 rounded-md px-2.5 py-1 text-xs text-text-secondary hover:border-brand-500/40 hover:text-brand-300 hover:bg-brand-500/10 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
