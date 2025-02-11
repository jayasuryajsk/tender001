import type { Attachment } from 'ai';
import { FileIcon, LoaderIcon } from './icons';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export const PreviewAttachment = ({
  attachment,
  isUploading = false,
}: {
  attachment: Attachment;
  isUploading?: boolean;
}) => {
  const { name, url, contentType } = attachment;
  const isPDF = contentType === 'application/pdf';

  return (
    <div className="flex flex-col gap-2">
      <div className={cn(
        "w-20 h-16 aspect-video rounded-md relative flex flex-col items-center justify-center",
        isPDF ? "bg-red-50 dark:bg-red-900/20 ring-1 ring-red-500/20" : "bg-muted"
      )}>
        {contentType ? (
          isPDF ? (
            <>
              <div className="flex items-center justify-center text-red-500/70">
                <FileIcon size={24} />
                <span className="text-xs ml-1 font-medium">PDF</span>
              </div>
              {!isUploading && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                  onClick={() => window.open(url, '_blank')}
                >
                  View
                </Button>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center text-muted-foreground">
              <FileIcon size={32} />
            </div>
          )
        ) : (
          <div className="flex items-center justify-center text-muted-foreground">
            <FileIcon size={32} />
          </div>
        )}

        {isUploading && (
          <div className="animate-spin absolute text-zinc-500">
            <LoaderIcon />
          </div>
        )}
      </div>
      <div className="text-xs text-zinc-500 max-w-16 truncate">{name}</div>
    </div>
  );
};
