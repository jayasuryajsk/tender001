'use client';

import { BlockKind } from './block';

export const DocumentSkeleton = ({ blockKind }: { blockKind: BlockKind }) => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center h-[calc(100dvh-60px)]">
      <div className="animate-pulse rounded-lg bg-muted-foreground/20 w-full h-96" />
    </div>
  );
};

export const InlineDocumentSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="animate-pulse rounded-lg h-4 bg-muted-foreground/20 w-48" />
      <div className="animate-pulse rounded-lg h-4 bg-muted-foreground/20 w-3/4" />
      <div className="animate-pulse rounded-lg h-4 bg-muted-foreground/20 w-1/2" />
      <div className="animate-pulse rounded-lg h-4 bg-muted-foreground/20 w-64" />
      <div className="animate-pulse rounded-lg h-4 bg-muted-foreground/20 w-40" />
      <div className="animate-pulse rounded-lg h-4 bg-muted-foreground/20 w-36" />
      <div className="animate-pulse rounded-lg h-4 bg-muted-foreground/20 w-64" />
    </div>
  );
};
