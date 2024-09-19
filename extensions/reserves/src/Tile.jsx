import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'Reserves',
    subtitle: 'Annotate Order',
    enabled: true,
    onPress: () => {
      api.cart.addCartProperties({CoesType: 'Reserve'});
    },
  });

  root.append(tile);
});
