const TORRENT_BUTTON_SELECTOR = '.view--torrent';
const PLAY_BUTTTONS_SELECTOR = '.full-start__button.selector.button--play';

Lampa.Listener.follow('full', (e) => {
  if (e.type === 'complite') {
    const container = Lampa.Activity.active()?.activity.render().get(0);
    if (container) {
      const playButtons = container.querySelector(PLAY_BUTTTONS_SELECTOR);
      const parent = playButtons?.parentElement;
      const torrentsButton = container.querySelector(TORRENT_BUTTON_SELECTOR);

      if (parent && playButtons && torrentsButton) {
        parent.insertBefore(torrentsButton, playButtons);
        console.log('rad_fix', 'Torrens button pulled up');
      } else {
        console.log(
          'rad_fix',
          `Some elements not found: parent: ${!!parent}, play: ${!!playButtons}, torrents: ${!!torrentsButton}`
        );
      }
    } else {
      console.log('rad_fix', 'Activity component not found');
    }
  }
});

console.log('rad_fix', 'Torrent buttond patched');
