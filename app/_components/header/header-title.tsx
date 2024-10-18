import { ReactNode } from "react";

const HeaderTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

export default HeaderTitle;
