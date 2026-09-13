import React from 'react';
import { Bold, Italic, List } from 'lucide-react';

interface FormattingToolbarProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onApplyFormat: (formattedValue: string) => void;
}

export function FormattingToolbar({
  textareaRef,
  onApplyFormat,
}: FormattingToolbarProps): React.JSX.Element {
  const insertFormatting = (prefix: string, suffix: string = prefix): void => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;
    const selected = currentVal.substring(start, end);

    const replacement = `${prefix}${selected || 'text'}${suffix}`;
    const nextVal = currentVal.substring(0, start) + replacement + currentVal.substring(end);

    onApplyFormat(nextVal);

    // Maintain focus and update cursor
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + (selected ? selected.length : 4)
      );
    }, 10);
  };

  const insertBullet = (): void => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;
    const selected = currentVal.substring(start, end);

    const replacement = selected ? `\n- ${selected}` : '\n- Key Concept';
    const nextVal = currentVal.substring(0, start) + replacement + currentVal.substring(end);

    onApplyFormat(nextVal);
  };

  return (
    <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs">
      <button
        type="button"
        onClick={() => insertFormatting('**')}
        className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 border border-slate-700/50 transition font-bold"
        title="Bold (**text**)"
      >
        <Bold className="w-3.5 h-3.5" />
        <span>Bold</span>
      </button>

      <button
        type="button"
        onClick={() => insertFormatting('*')}
        className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-purple-500/20 hover:text-purple-300 text-slate-300 border border-slate-700/50 transition italic"
        title="Italic (*text*)"
      >
        <Italic className="w-3.5 h-3.5" />
        <span>Italic</span>
      </button>

      <button
        type="button"
        onClick={insertBullet}
        className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-amber-500/20 hover:text-amber-300 text-slate-300 border border-slate-700/50 transition"
        title="Bullet List (- item)"
      >
        <List className="w-3.5 h-3.5" />
        <span>Bullet</span>
      </button>

      <span className="ml-auto text-[10px] text-slate-500 font-mono pr-1">
        Markdown 3-Button Editor
      </span>
    </div>
  );
}
