import { ThemeToggle } from "@/components/theme-toggle";
import { Clock } from "@/components/clock";
import { Footer } from "@/components/footer";
import { Stack } from "@/components/stack";
import { Socials } from "@/components/socials";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="mx-auto py-32 relative max-w-2xl min-h-screen overflow-hidden sm:overflow-visible px-6 sm:px-0">
      <div className="flex justify-between items-center py-10 w-full text-sm font-mono text-muted-foreground">
        <p>living on a cloud</p>
        <div className="flex justify-between gap-2">
          <Clock />
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
        <p className="text-lg font-semibold">avalynndev</p>
        <p className="text-xs font-semibold text-muted-foreground/55">
          Full-Stack Developer & Game Creator
        </p>

        <div className="w-auto text-base py-6">
          <span>
            15-year-old indie developer crafting web applications and games{" "}
            <span className="italic font-serif">
              with Next.js, TypeScript, and Godot
            </span>
            . I specialize in{" "}
            <span className="font-serif italic underline">
              full-stack development
            </span>
            , game development, and{" "}
            <span className="italic font-serif underline">
              open-source projects
            </span>
            . Currently exploring database inegration.
          </span>
        </div>
      </div>
      <Stack />
      <Projects/>
      <Socials/>
      <Footer />
    </main>
  );
}
