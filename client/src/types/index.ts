export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  url: string;
}

interface NavItem {
  id: number;
  label: string;
  href: string;
  external: boolean;
  variant: ButtonVariant | null;
  icon: string;
}

interface Cta {
  id: number;
  label: string;
  href: string;
  external: boolean;
  variant: ButtonVariant | null;
  icon: string;
}

interface Logo {
  id: number;
  text: string;
  image: Image;
}

export interface HeaderData {
  id: number;
  documentId: string;
  logo: Logo;
  navItems: NavItem[];
  cta: Cta[];
}

export interface ProductResponse {
  data: ProductData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ProductData {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  featured?: boolean;
  price: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: Image[];
  banner?: Image;
  quantity: number;
  basePath: string;
  className?: string;
  features: {
    id: number;
    text: string;
  }[];
}

type ComponentType =
  | "blocks.hero"
  | "blocks.card-carousel"
  | "blocks.section-heading"
  | "blocks.content-with-image"
  | "blocks.content";

interface Base<T extends ComponentType, D extends {} = {}> {
  __component: T;
  id: string;
  createdAt: string;
  updatedAt: string;
  data: D;
}

export interface NavLink {
  href: string;
  label: string;
  isExternal: boolean;
  isPrimary: boolean;
}

export type Block =
  | HeroProps
  | CardCarouselProps
  | SectionHeadingProps
  | ContentWithImageProps
  | ContentProps;

export interface HeroProps extends Base<"blocks.hero"> {
  heading: string;
  text: string;
  topLink?: NavLink;
  buttonLink?: NavLink[];
  image: {
    url: string;
    alternativeText: string | null;
    name: string;
  };
}

export interface CardCarouselProps extends Base<"blocks.card-carousel"> {
  cardItems: {
    id: string;
    heading: string;
    text: string;
    icon: string;
  }[];
}

export interface SectionHeadingProps extends Base<"blocks.section-heading"> {
  heading: string;
  subHeading: string;
  text: string;
  centered?: boolean;
}

export interface ContentWithImageProps
  extends Base<"blocks.content-with-image"> {
  reverse: boolean;
  image: {
    url: string;
    name: string;
  };
  heading: string;
  subHeading: string;
  text: string;
}

export interface ContentProps extends Base<"blocks.content"> {
  text: string;
}
