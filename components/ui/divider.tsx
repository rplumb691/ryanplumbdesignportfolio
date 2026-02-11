export function Divider() {
  return (
    <div className="flex items-center gap-4 py-12">
      <span className="h-px flex-1 bg-border" />
      <div className="flex items-center gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-border" />
        ))}
      </div>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
