import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, buttonVariants } from "../src";
import { User } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: "New Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ...buttonVariants,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    children: (
      <>
        <User size={14} />
        User Button
      </>
    ),
  },
};

export const Secondary = () => {
  return (
    <div>
      <p>Heyyy</p>
      <Button variant={"secondary"}>Secondary Button</Button>
    </div>
  );
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
