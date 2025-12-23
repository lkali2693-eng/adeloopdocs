import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/lib/icons";
import {
  PanelsTopLeft,
  Server,
  Album,
} from "lucide-react";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Logo />
        <span className="font-medium [header_&]:text-[15px]">
          Adeloop
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [
    {
      type: "menu",
      text: "Documentation",
      url: "/docs/adeloop",
      items: [
        {
          icon: <Album />,
          text: "Getting Started",
          description: "Your Journey into Data Analytics with Adeloop.",
          url: "/docs/adeloop",
          active: "nested-url",
          menu: {
            className: "md:row-span-2",
          },
        },
        {
          icon: <PanelsTopLeft />,
          text: "Adeloop Platform",
          description: "Learn about the Adeloop cloud Jupyter notebook platform.",
          url: "/docs/adeloop",
          active: "nested-url",
          menu: {
            className: "lg:col-start-2",
          },
        },
        {
          icon: <Server />,
          text: "Adeloop Agent",
          description: "AI Agent for data analytics and visualization.",
          url: "/docs/agent",
          active: "nested-url",
          menu: {
            className: "lg:col-start-2",
          },
        },
      ],
    },
    {
      text: "Highlights",
      url: "/#highlights",
      active: "nested-url",
    },
  ],
};