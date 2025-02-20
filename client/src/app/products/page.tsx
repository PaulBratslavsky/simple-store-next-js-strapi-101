import { ProductData } from "@/types";
import { SearchInput } from "@/components/custom/search-input";
import { ContentList } from "@/components/custom/content-list";
import { PaginationComponent } from "@/components/custom/pagination-component";
import { ProductCard } from "@/components/custom/product-card";
import { Metadata } from "next";
import { getContent } from "@/lib/data/loaders";

interface ContentResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      pageCount: number;
    };
  };
}

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

interface PageProps {
  searchParams: Promise<{ page?: string; search?: string }>;
}

const featuredProductsQuery = (currentPage: number, search: string) => {
  return {
    populate: {
      images: {
        fields: ["name", "alternativeText", "url"],
      },
      banner: {
        fields: ["name", "alternativeText", "url"],
      },
    },
    pagination: {
      page: currentPage,
      pageSize: 3,
    },
    filters: {
      name: {
        $containsi: search,
      },
    },
  };
};

export default async function ProductsRoute({ searchParams }: PageProps) {
  const resolveParams = await searchParams;
  const currentPage = Number(resolveParams?.page) || 1;
  const search = resolveParams?.search ?? "";

  const response = await getContent(
    "products",
    featuredProductsQuery(currentPage, search)
  );
  const { data, meta } = response as ContentResponse<ProductData>;
  const pageCount = meta?.pagination?.pageCount ?? 1;

  return (
    <div className="flex flex-col gap-4">
      <SearchInput className="mb-4" />
      <ContentList
        data={data}
        headline="All Products"
        component={ProductCard}
        path="/products"
      />
      <PaginationComponent pageCount={pageCount} className="mt-4" />
    </div>
  );
}
