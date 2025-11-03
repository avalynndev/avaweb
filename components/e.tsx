<div className="z-1005 dark:fixed hidden dark:block inset-x-0 top-0 pointer-events-none">
  {[...Array(10)].map((_, i) => (
    <div
      key={i}
      className="absolute inset-0 bg-neutral-900/5 pointer-events-none"
      style={{
        backdropFilter: `blur(${10 - i}px)`,
        height: "12px",
        top: `${i * 12}px`,
      }}
    />
  ))}
</div>;
