import React from "react";
import { Header } from "../header/header";

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps): React.ReactElement => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
