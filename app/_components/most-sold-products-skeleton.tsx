const MostSoldProductsSkeleton = () => {
  const products = Array.from({ length: 3 });

  return (
    <div className="flex flex-col justify-between rounded-lg bg-white p-6">
      <div className="animate-pulse-custom h-5 w-48 animate-pulse rounded bg-gray-300"></div>

      {products.map((_, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="animate-pulse-custom h-5 w-28 animate-pulse rounded bg-gray-300"></div>
            <div className="animate-pulse-custom h-5 w-20 animate-pulse rounded bg-gray-300"></div>
            <div className="animate-pulse-custom h-5 w-28 animate-pulse rounded bg-gray-300"></div>
          </div>

          <div className="animate-pulse-custom h-5 w-28 animate-pulse rounded bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default MostSoldProductsSkeleton;
