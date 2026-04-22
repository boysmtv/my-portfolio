'use client';
import { motion } from 'framer-motion';

export default function CaseStudy() {
  return (
    <section className="relative glass-panel rounded-2xl p-8 md:p-12 border border-surfaceBorder">
      <div className="mb-8">
        <span className="text-primary font-mono text-sm tracking-wider uppercase">Deep Dive Case Study</span>
        <h2 className="text-3xl font-bold mt-2">BRI ISO8583 Payment Integration</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-red-500 rounded-full"/> Problem
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Legacy banking systems required highly concurrent, extremely low-latency transaction processing over TCP/IP sockets using the complex ISO8583 standard. The existing monolithic structure was dropping packets under high load.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-green-500 rounded-full"/> Solution
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Architected a resilient middleware layer utilizing JPOS for ISO8583 packing/unpacking. Implemented a robust connection pool and asynchronous message processing queues using Spring Boot to decouple receiving, processing, and responding.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-yellow-500 rounded-full"/> Challenges
            </h3>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              <li>Handling endianness and bitmap parsing manually for proprietary extensions.</li>
              <li>Ensuring 99.99% uptime with automatic reconnects on socket drop.</li>
              <li>Maintaining exactly-once processing semantics for financial ledgers.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-primary rounded-full"/> Impact
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Reduced transaction timeout errors by 98%. Scaled throughput to handle peak holiday traffic without degradation. Extracted core modules to be reusable for BNI and Brizzi integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}