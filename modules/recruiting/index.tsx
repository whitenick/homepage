import { useState } from 'react';

export type Status = 'needs-reply' | 'pending' | 'closed';

export interface Opportunity {
  id: string;
  company: string;
  role: string;
  recruiter: string;
  recruiterEmail: string;
  agency: string;
  date: string;
  status: Status;
  followUps: number;
  snippet: string;
  comp?: string;
  notes?: string;
}

const STATUS_ORDER: Record<Status, number> = { 'needs-reply': 0, pending: 1, closed: 2 };

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function daysSince(d: string) {
  return Math.floor((Date.now() - new Date(d).getTime()) / 86_400_000);
}

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    'needs-reply': 'bg-red-100 text-red-700',
    pending: 'bg-yellow-100 text-yellow-700',
    closed: 'bg-gray-100 text-gray-500',
  };
  const labels: Record<Status, string> = {
    'needs-reply': 'Needs Reply',
    pending: 'Pending',
    closed: 'Closed',
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

type FilterValue = 'all' | Status;

export const RecruitingTracker = ({ initialOpportunities }: { initialOpportunities: Opportunity[] }) => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(() =>
    [...initialOpportunities].sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status] || new Date(b.date).getTime() - new Date(a.date).getTime())
  );
  const [filter, setFilter] = useState<FilterValue>('all');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const filtered = opportunities.filter(o => filter === 'all' || o.status === filter);

  const toggleExpand = (id: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const setStatus = (id: string, status: Status) => {
    setOpportunities(prev =>
      [...prev.map(o => o.id === id ? { ...o, status } : o)].sort(
        (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status] || new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );
  };

  const filters: { label: string; value: FilterValue }[] = [
    { label: 'All', value: 'all' },
    { label: 'Needs Reply', value: 'needs-reply' },
    { label: 'Pending', value: 'pending' },
    { label: 'Closed', value: 'closed' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-1">Recruiting Opportunities</h1>
      <p className="text-sm text-gray-500 mb-6">
        {opportunities.length} inbound opportunities · last scanned June 9, 2026
      </p>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-6">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              filter === f.value
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-400 mb-4">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {filtered.map(o => (
          <div key={o.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-4">
              <div>
                <div className="font-semibold text-base">{o.role}</div>
                <div className="text-sm text-gray-500 mt-0.5">{o.company} · {o.agency}</div>
              </div>
              <StatusBadge status={o.status} />
            </div>

            <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
              <span>📅 {formatDate(o.date)} ({daysSince(o.date)}d ago)</span>
              <span>👤 {o.recruiter}</span>
              {o.followUps > 0 && <span>🔁 {o.followUps} follow-up{o.followUps > 1 ? 's' : ''}</span>}
              {o.comp && <span className="text-emerald-600 font-medium">💰 {o.comp}</span>}
            </div>

            <button
              onClick={() => toggleExpand(o.id)}
              className="mt-3 text-xs text-blue-600 hover:underline"
            >
              {expanded.has(o.id) ? '▾ Hide details' : '▸ Show details'}
            </button>

            {expanded.has(o.id) && (
              <div className="mt-3 space-y-2">
                <p className="text-sm text-gray-700">{o.snippet}</p>
                {o.notes && <p className="text-sm text-gray-400 italic">{o.notes}</p>}
                <p className="text-xs text-gray-400">{o.recruiterEmail}</p>
                <div className="flex gap-2 pt-1 flex-wrap">
                  {o.status !== 'needs-reply' && (
                    <button
                      onClick={() => setStatus(o.id, 'needs-reply')}
                      className="text-xs px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
                    >
                      Mark Needs Reply
                    </button>
                  )}
                  {o.status !== 'pending' && (
                    <button
                      onClick={() => setStatus(o.id, 'pending')}
                      className="text-xs px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
                    >
                      Mark Pending
                    </button>
                  )}
                  {o.status !== 'closed' && (
                    <button
                      onClick={() => setStatus(o.id, 'closed')}
                      className="text-xs px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
                    >
                      Mark Closed
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">No opportunities match this filter.</div>
        )}
      </div>
    </div>
  );
};

export default RecruitingTracker;
