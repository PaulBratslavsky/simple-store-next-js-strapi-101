import type { Block } from "@/types";

import { Hero } from "@/components/blocks/hero";
import { SectionHeading } from "@/components/blocks/section-heading";
import { ContentWithImage } from "@/components/blocks/content-with-image";
import { Content } from "@/components/blocks/content";
import { CardCarousel } from "@/components/blocks/card-carousel";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero":
      return <Hero key={index} {...block} />;
    case "blocks.card-carousel":
      return <CardCarousel key={index} {...block} />;
    case "blocks.section-heading":
      return <SectionHeading key={index} {...block} />;
    case "blocks.content-with-image":
      return <ContentWithImage key={index} {...block} />;
    case "blocks.content":
      return <Content key={index} {...block} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
