import Link from "next/link";

export function WorkItem({
  title,
  date,
  description,
  href,
}: {
  title: string;
  date: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div className="flex flex-col relative max-h-96 h-full group cursor-pointer">
      <div className="absolute -inset-2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-lg bg-muted-foreground/20 transition-all pointer-events-none" />
      <div className="flex items-center w-full space-x-4 z-10 relative">
        <p className="text-sm font-semibold font-geistSans text-nowrap underline decoration-wavy decoration-muted-foreground/55 underline-offset-4 group-hover:decoration-muted-foreground transition-colors">
          {title}
        </p>
        <div className="w-full h-0.5 bg-muted-foreground rounded-full" />
        <p className="text-xs font-semibold text-neutral-500 font-geistMono text-nowrap">
          {date}
        </p>
      </div>
      <p className="text-xs font-semibold text-neutral-500 font-geistMono mt-2">
        {description}
      </p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
