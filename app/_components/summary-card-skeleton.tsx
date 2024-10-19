const SummaryCardSkeleton = () => {
  return (
    <div className="space-y-1 rounded-xl bg-white p-6">
      <div className="animate-pulse-custom h-9 w-9 animate-pulse rounded bg-gray-300"></div>
      <div className="animate-pulse-custom h-4 w-32 animate-pulse rounded bg-gray-300"></div>
      <div className="animate-pulse-custom h-9 w-60 animate-pulse rounded bg-gray-300"></div>
    </div>
  );
};

export default SummaryCardSkeleton;
