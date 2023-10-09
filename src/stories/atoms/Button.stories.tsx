import type { Meta, StoryObj } from "@storybook/react";
import { Button, StyledButtonProps } from "@/components/atoms/Button";

const meta = {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // bgColor: "primary",
    size: "small",
    textColor: "blue",
    rounded: "circle",
    // shadow: "primary",
    // borderSize,
    // borderType,
    // borderColor: "primary ",
  },
};

export default meta;
