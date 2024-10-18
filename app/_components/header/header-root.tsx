import { ReactNode } from "react";

const HeaderRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-between">{children}</div>
  );
};

export default HeaderRoot;
