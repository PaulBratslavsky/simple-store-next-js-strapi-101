import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_carousels';
  info: {
    description: '';
    displayName: 'Card Carousel';
  };
  attributes: {
    cardItems: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_with_images';
  info: {
    displayName: 'Content With Image';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.Component<'shared.link', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    topLink: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button-link', true>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_links';
  info: {
    description: '';
    displayName: 'Button Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<['ShoppingCart', 'UserIcon']>;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['default', 'ghost', 'outline', 'destructive', 'secondary', 'link']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['Frame', 'Download', 'Globe', 'Sparkles', 'LayoutPanelLeft', 'Palette']
    >;
    text: Schema.Attribute.Text;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-carousel': BlocksCardCarousel;
      'blocks.content': BlocksContent;
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.hero': BlocksHero;
      'blocks.section-heading': BlocksSectionHeading;
      'layout.header': LayoutHeader;
      'shared.button-link': SharedButtonLink;
      'shared.card': SharedCard;
      'shared.feature': SharedFeature;
      'shared.link': SharedLink;
      'shared.logo': SharedLogo;
    }
  }
}
