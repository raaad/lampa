const SHOWY_AD_SELECTOR = '.myBot';
const SCAN_PERIOD = 51;

Lampa.Listener.follow('activity', ({ type, component }) => {
  if (type === 'start' && component === 'showy') {
    const id = setInterval(() => {
      const ad = document.querySelector(SHOWY_AD_SELECTOR);
      if (ad) {
        ad.remove();
        clearInterval(id);
        console.log('rad_fix', 'Showy AD removed');
      }
    }, SCAN_PERIOD);

    setTimeout(() => clearInterval(id), 3e4);
  }
});

console.log('rad_fix', 'Showy AD patched');
