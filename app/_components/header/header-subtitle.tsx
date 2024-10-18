import { ReactNode } from "react";

const HeaderSubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-xs font-semibold text-slate-500">{children}</span>
  );
};

export default HeaderSubTitle;
