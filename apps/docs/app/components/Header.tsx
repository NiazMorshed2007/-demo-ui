import React from "react";

const Header = () => {
  return (
    <header className="smartroof-header sticky top-0 w-full border-b flex items-center justify-between py-3 px-[4%]">
      <h1 className="text-xl font-semibold">SmartRoof UI</h1>
      <nav className="flex items-center gap-7 text-sm font-medium">
        <h1>Installation</h1>
        <h1>Components</h1>
        <h1>Examples</h1>
      </nav>
    </header>
  );
};

export default Header;
