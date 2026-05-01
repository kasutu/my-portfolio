export function AboutCard({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/).filter(Boolean);

  return (
    <div className="w-full p-4 bg-background rounded-[32px] border flex flex-col gap-2 overflow-hidden">
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">About</h3>
      <div className="flex flex-col">
        {paragraphs.map((para, i) => (
          <p key={i} className="leading-7 not-first:mt-4 text-base text-card-foreground">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}