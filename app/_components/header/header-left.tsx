import { ReactNode } from "react";

const HeaderLeft = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-1">{children}</div>;
};

export default HeaderLeft;
