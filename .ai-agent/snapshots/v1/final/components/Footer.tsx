export default function Footer() {
  return (
    <footer className="w-full border-t border-surfaceBorder bg-surface py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-2">Dedy Wijaya</h2>
          <p className="text-gray-500 text-sm">Technical Lead & Senior Android Engineer | Backend Specialist</p>
        </div>
        <div className="flex flex-col items-center md:items-end text-sm text-gray-500">
          <p>boys.mtv@gmail.com</p>
          <p>08158844424</p>
          <p className="mt-4 text-xs opacity-50">© {new Date().getFullYear()} Dedy Wijaya. Built with Next.js, Framer Motion & Docker.</p>
        </div>
      </div>
    </footer>
  );
}
