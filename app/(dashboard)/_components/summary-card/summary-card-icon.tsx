import { ReactNode } from "react";

const SummaryCardIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-slate-500 bg-opacity-10 text-slate-500">
      {children}
    </div>
  );
};

export default SummaryCardIcon;
