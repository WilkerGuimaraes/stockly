import { ReactNode } from "react";

const SummaryCardRoot = ({ children }: { children: ReactNode }) => {
  return <div className="rounded-xl bg-white p-6">{children}</div>;
};

export default SummaryCardRoot;
