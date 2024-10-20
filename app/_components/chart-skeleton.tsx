const ChartSkeleton = () => {
  const days = Array.from({ length: 14 });

  return (
    <div className="flex flex-col justify-around rounded bg-white p-6">
      <div className="space-y-2">
        <div className="animate-pulse-custom h-5 w-20 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-5 w-28 animate-pulse rounded bg-gray-300"></div>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div className="animate-pulse-custom h-16 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-8 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-9 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-24 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-9 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-8 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-72 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-40 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-32 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-48 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-64 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-56 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-60 w-12 animate-pulse rounded bg-gray-300"></div>
        <div className="animate-pulse-custom h-56 w-12 animate-pulse rounded bg-gray-300"></div>
      </div>

      <div className="flex justify-between gap-2">
        {days.map((_, index) => (
          <div
            key={index}
            className="animate-pulse-custom h-5 w-12 animate-pulse rounded bg-gray-300"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ChartSkeleton;
