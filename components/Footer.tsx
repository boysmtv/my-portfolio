import { siteSummary } from './portfolio-data';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.2), rgba(59,130,246,0.2), transparent) 1' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-1/4 h-1/2 bg-brand-500/3 rounded-full blur-[80px]" />
      </div>

      <div className="site-wrap relative py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-brand-400 mb-2">Dedy Wijaya</div>
            <div className="text-lg font-medium">
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">Technical Lead</span>
              <span className="text-text-muted"> &middot; </span>
              <span className="text-text-primary">Android</span>
              <span className="text-text-muted"> &middot; </span>
              <span className="text-text-primary">Payments</span>
            </div>
          </div>
          <div className="text-sm text-text-muted">
            <a href={`mailto:${siteSummary.contactEmail}`} className="hover:text-brand-400 transition-colors">
              {siteSummary.contactEmail}
            </a>
            <div className="mt-1 text-xs">&copy; {new Date().getFullYear()} Dedy Wijaya</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
