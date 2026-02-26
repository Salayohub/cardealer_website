export default function LatestProductsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="lpg-skeleton-card">
          <div className="lpg-skeleton-img" />
          <div className="lpg-skeleton-content">
            <div className="lpg-skeleton-line lpg-skeleton-line-short" />
            <div className="lpg-skeleton-line lpg-skeleton-line-med" />
            <div className="lpg-skeleton-line" />
          </div>
        </div>
      ))}
    </>
  );
}
