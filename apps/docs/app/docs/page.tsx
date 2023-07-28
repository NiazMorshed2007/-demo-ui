import React from "react";
import { Button } from "demo-ui-niaz/src";

const Page = () => {
  return (
    <div className="p-6 px-[5%] flex gap-4 flex-wrap">
      <Button>I'm Primary</Button>
      <Button variant="secondary">I'm Secondary</Button>
      <Button variant="ghost">I'm Ghost</Button>
      <Button variant="destructive">I'm Destructive</Button>
    </div>
  );
};

export default Page;
