'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { memo } from 'react';

interface SuggestedActionsProps {
  chatId: string;
  setInput: (value: string) => void;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
}

function PureSuggestedActions({ chatId, setInput, textareaRef }: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: 'Help me write',
      label: 'a compelling executive summary',
      action: 'Help me write a compelling executive summary that highlights our key capabilities and competitive advantages',
    },
    {
      title: 'Review and enhance',
      label: 'my tender response',
      action: 'Review and enhance my tender response to maximize scoring potential and ensure compliance with all requirements',
    },
    {
      title: 'Create a template for',
      label: 'capability statement',
      action: 'Create a professional capability statement template that showcases our experience, certifications, and past successes',
    },
    {
      title: 'Analyze tender',
      label: 'requirements and scoring criteria',
      action: 'Help me analyze the tender requirements and scoring criteria to identify our competitive advantages and areas needing attention',
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-2 w-full max-w-2xl">
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setInput(suggestedAction.action);
              
              // Focus and adjust textarea height
              if (textareaRef?.current) {
                textareaRef.current.style.height = 'auto';
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
                textareaRef.current.focus();
              }
            }}
            className="text-left border rounded-xl px-3 py-2.5 text-sm flex flex-col w-full h-auto justify-start items-start hover:bg-muted/50"
          >
            <span className="font-medium text-sm">{suggestedAction.title}</span>
            <span className="text-muted-foreground text-xs">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
