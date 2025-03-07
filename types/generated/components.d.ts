import type { Schema, Struct } from '@strapi/strapi';

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentNavbar extends Struct.ComponentSchema {
  collectionName: 'components_component_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    Test: Schema.Attribute.String;
  };
}

export interface HeaderMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_items';
  info: {
    description: '';
    displayName: 'MenuItems';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card': CardCard;
      'component.navbar': ComponentNavbar;
      'header.menu-items': HeaderMenuItems;
    }
  }
}
