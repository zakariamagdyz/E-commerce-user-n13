import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <main className="">
      <article className="flex items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight">404</h1>
        <Separator orientation="vertical" className="h-14" />
        <p className="text-xl">This page could not be found</p>
      </article>
    </main>
  );
}
