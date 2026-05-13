'use client';
import { motion } from 'framer-motion';

const skills = [
  { category: "Android", items: ["Kotlin", "Jetpack Compose", "MVVM / MVI", "Hilt / Dagger", "Retrofit", "Coroutines/Flow"] },
  { category: "Backend", items: ["Java", "Spring Boot", "REST API", "Microservices", "ISO8583 / JPOS"] },
  { category: "Infrastructure", items: ["Docker", "Kubernetes", "CI/CD Pipeline", "Git", "Linux"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "Room / SQLite", "Redis"] }
];

export default function TechStack() {
  return (
    <section className="relative">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i}
            className="glass-panel p-6 rounded-xl border border-surfaceBorder"
          >
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-surfaceBorder pb-2">{group.category}</h3>
            <ul className="space-y-3">
              {group.items.map(item => (
                <li key={item} className="flex items-center text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}