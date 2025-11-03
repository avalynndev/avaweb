import Link from "next/link";
import { WorkItem } from "./work-item";

export function Projects() {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-12 py-4">
      <div className="flex flex-col py-6">
        <p className="text-xs font-semibold text-muted-foreground/55 font-geistMono pb-2">
          Notable Work
        </p>
        <div className="grid grid-cols-1 mt-2 h-auto gap-12">
          <WorkItem
            title="Enjoytown"
            date="2024 - 12"
            description="Full-featured anime, drama, and movie streaming platform with Next.js and shadcn/ui"
            href="https://github.com/avalynndev/enjoytown"
          />
        </div>
      </div>

      <div className="flex flex-col py-6">
        <p className="text-xs font-semibold text-muted-foreground/55 font-geistMono ml-auto w-fit pb-3">
          Featured Projects
        </p>
        <div className="grid grid-cols-1 mt-2 h-auto gap-12">
          <WorkItem
            title="Anonypost"
            date="2024 - 07"
            description="Anonymous post sharing platform built with Next.js, tRPC, and shadcn/ui"
            href="https://github.com/avalynndev/anonypost"
          />
          <WorkItem
            title="Document Viewer"
            date="2024 - 08"
            description="Universal file viewer supporting multiple formats with Next.js and shadcn/ui"
            href="https://github.com/avalynndev/document-viewer"
          />
        </div>
        <Link href="https://github.com/avalynndev" className="w-full mt-4">
          <p className="text-xs font-semibold text-neutral-500 font-geistMono ml-auto w-fit">
            View all
          </p>
        </Link>
      </div>
    </div>
  );
}
