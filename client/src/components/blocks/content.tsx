import { type ContentProps } from "@/types";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownText({ content }: { content: string }) {
  return (
    <section className="w-2/3 mx-auto rich-text py-6 dark:bg-black dark:text-gray-50 my-12">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </section>
  );
}

export function Content(data: Readonly<ContentProps>) {
  if (!data) return null;
  return <MarkdownText content={data.text} />;
}