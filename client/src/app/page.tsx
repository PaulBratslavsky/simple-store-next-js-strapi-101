import { Metadata } from "next";

import { getPageBySlug } from "@/lib/data/loaders";
import { BlockRenderer } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing page",
};

export default async function HomeRoute() {
  const data = await getPageBySlug("landing-page");
  const blocks = data?.data[0]?.blocks;
  if (!blocks) return null;
  return <div>{blocks ? <BlockRenderer blocks={blocks} /> : null}</div>;
}
