const SHOWY_AD_SELECTOR = '.myBot';
const SCAN_PERIOD = 25;

Lampa.Listener.follow('activity', ({ type, component }) => {
  console.log(type, component);
  if (type === 'start' && ['showy', 'smotrolet'].includes(component)) {
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

setTimeout(() => {
  console.log(
    'rad_fix',
    [...document.querySelectorAll('[data-component]')].map((e) =>
      e.getAttribute('data-component')
    )
  );
}, 30000);

let elem = Lampa.Menu.addaddElement(document.createElement('button'), () => {
  // вызывается при нажатии на элемент
  console.log(
    'rad_fix',
    [...document.querySelectorAll('[data-component]')].map((e) =>
      e.getAttribute('data-component')
    )
  );
});
elem.addClass('my_class');
