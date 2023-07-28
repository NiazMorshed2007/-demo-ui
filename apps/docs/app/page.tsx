import { Button } from "demo-ui-niaz/src";
import { ArrowRight, GridIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center">
      <h1 className="text-5xl font-bold">SmartRoof UI</h1>
      <p className="w-6/12 text-primary-accent6 mt-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolor
        soluta iure quam numquam aliquam ducimus, pariatur cupiditate
        accusantium excepturi illum voluptate magni at et consectetur earum,
        placeat ea quisquam.
      </p>
      <div className="buttons-wrapper mt-7 flex items-center gap-6">
        <Link href="/docs">
          <Button size="lg">
            Get Started
            <ArrowRight size={16} />
          </Button>
        </Link>
        <Button variant="secondary" size="lg">
          <GridIcon size={16} />
          Explore Components
        </Button>
      </div>
    </main>
  );
}
