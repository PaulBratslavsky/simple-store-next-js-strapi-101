import { notFound } from "next/navigation";

import { getPageBySlug } from "@/lib/data/loaders";
import { BlockRenderer } from "@/components/blocks";
interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PageBySlugRoute({ params }: PageProps) {
  const resolveParams = await params;
  const slug = await resolveParams?.slug;

  const data = await getPageBySlug(slug);
  if (data?.data.length === 0) notFound();
  const blocks = data?.data[0]?.blocks;
  console.log("########### BLOCKS ###########", blocks);
  if (!blocks) return null;
  return <div>{blocks ? <BlockRenderer blocks={blocks} /> : null}</div>;
}