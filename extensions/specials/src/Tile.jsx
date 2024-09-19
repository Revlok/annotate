import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'Specials',
    subtitle: 'Annotate Order',
    enabled: true,
    onPress: () => {
      api.cart.addCartProperties({CoesType: 'Special'});
    },
  });

  root.append(tile);
});
