


interface ContentListProps<T> {
  headline: string;
  featured?: boolean;
  data: T[];
  component: React.ComponentType<T & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
  path: string;
}


export async function ContentList<T>({
  headline,
  component,
  headlineAlignment = "left",
  path,
  data,
}: Readonly<ContentListProps<T>>) {
  const Component = component;

  const headlineAlignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[headlineAlignment];


  return (
    <section>
      <h3 className={`text-2xl font-bold mb-6 ${headlineAlignmentClasses}`}>
        {headline || "Featured Articles"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Component key={(item as any).documentId} {...item} basePath={path} />
        ))}
      </div>
    </section>
  );
}