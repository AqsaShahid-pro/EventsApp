import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>root Layout</p>
      {children}
    </div>
  );
};

export default Layout;
