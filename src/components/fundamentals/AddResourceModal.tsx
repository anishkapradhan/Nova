import React, { useState, useRef } from 'react';
import { X, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import {
  DISCIPLINE_CATEGORIES,
  RESOURCE_TYPES,
  DIFFICULTY_LEVELS,
  DisciplineCategory,
  ResourceType,
  DifficultyLevel,
  FundamentalResource,
} from '@/types/fundamentals';
import { FormattingToolbar } from '@/components/common/FormattingToolbar';

interface AddResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  cadetHandle: string;
  onResourceAdded: (newResource: FundamentalResource) => void;
}

export function AddResourceModal({
  isOpen,
  onClose,
  cadetHandle,
  onResourceAdded,
}: AddResourceModalProps): React.JSX.Element | null {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<DisciplineCategory>(DISCIPLINE_CATEGORIES[0]);
  const [resourceType, setResourceType] = useState<ResourceType>(RESOURCE_TYPES[0]);
  const [targetUrl, setTargetUrl] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>(DIFFICULTY_LEVELS[0]);
  const [summary, setSummary] = useState('');
  const [isFreeAffirmed, setIsFreeAffirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTaskId, setSuccessTaskId] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setErrorMessage(null);

    if (!isFreeAffirmed) {
      setErrorMessage('You must affirm that this resource is 100% free with zero paywalls.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        title,
        category,
        resourceType,
        targetUrl,
        difficultyLevel,
        summary,
        prerequisites: ['Algebra I'],
        isFreeAffirmed: true,
        contributorHandle: cadetHandle,
      };

      const res = await fetch('/api/v1/fundamentals/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessTaskId(data.data.taskId);

        // Append to local live view
        const createdResource: FundamentalResource = {
          id: `res-user-${Date.now()}`,
          title,
          category,
          resourceType,
          targetUrl,
          publisherOrSource: 'Community Cadet Submission',
          difficultyLevel,
          summary,
          prerequisites: ['Algebra I'],
          highSchoolCurriculumTieIn: 'Curated Contributor Pathway',
          isFreeVerified: true,
          submittedByHandle: cadetHandle,
          createdAt: new Date().toISOString(),
        };

        onResourceAdded(createdResource);

        setTimeout(() => {
          setIsSubmitting(false);
          setSuccessTaskId(null);
          onClose();
        }, 1800);
      } else {
        setErrorMessage(data.error?.message || 'Failed to submit resource.');
        setIsSubmitting(false);
      }
    } catch (err) {
      setErrorMessage(String(err));
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl space-y-5 text-slate-100 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Contribute Study Resource
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMessage && (
          <div className="p-3 bg-red-950/70 border border-red-500/40 rounded-lg text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successTaskId && (
          <div className="p-4 bg-emerald-950/70 border border-emerald-500/40 rounded-lg text-emerald-300 text-sm flex items-center gap-3 animate-in zoom-in-95">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="font-semibold">Resource Submitted Successfully!</p>
              <p className="text-xs font-mono text-emerald-400/80">
                Tracking Task ID: {successTaskId}
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">
              Resource Title <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. MIT OCW Introduction to Aerospace Propulsion"
              className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Discipline</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as DisciplineCategory)}
                className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-200 text-xs focus:outline-none focus:border-cyan-400"
              >
                {DISCIPLINE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Resource Type</label>
              <select
                value={resourceType}
                onChange={(e) => setResourceType(e.target.value as ResourceType)}
                className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-200 text-xs focus:outline-none focus:border-cyan-400"
              >
                {RESOURCE_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                Verified HTTPS URL <span className="text-cyan-400">*</span>
              </label>
              <input
                type="url"
                required
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Target Difficulty</label>
              <select
                value={difficultyLevel}
                onChange={(e) => setDifficultyLevel(e.target.value as DifficultyLevel)}
                className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-200 text-xs focus:outline-none focus:border-cyan-400"
              >
                {DIFFICULTY_LEVELS.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Summary Textarea with 3-Button Toolbar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                Curriculum Summary <span className="text-cyan-400">*</span>
              </label>
              <span className="text-[10px] text-slate-500">{summary.length} / 2000</span>
            </div>

            <FormattingToolbar
              textareaRef={textareaRef}
              onApplyFormat={(val) => setSummary(val)}
            />

            <textarea
              ref={textareaRef}
              required
              rows={4}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Explain how this resource benefits high school physics or calculus students, key physical laws covered (e.g. **Newton's 2nd Law**), and topics..."
              className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs leading-relaxed font-sans"
            />
          </div>

          {/* Zero-Paywall Affirmation */}
          <label className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isFreeAffirmed}
              onChange={(e) => setIsFreeAffirmed(e.target.checked)}
              className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-cyan-400"
            />
            <span className="text-xs text-slate-300 leading-snug">
              I affirm that this resource is <strong className="text-emerald-400">100% Free Open Educational Resource (OER)</strong> with zero paywalls, credit cards, or forced accounts.
            </span>
          </label>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs transition shadow-lg shadow-cyan-500/20 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit for AI Verification'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
