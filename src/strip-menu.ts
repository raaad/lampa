import styleBody from './strip-menu.css?inline';

const el = document.createElement('style');
el.innerHTML = styleBody;
document.getElementsByTagName('head')[0].appendChild(el);

Lampa.Storage.set(
  'menu_hide',
  JSON.stringify([
    'Лента',
    'Фильмы',
    'Мультфильмы',
    'Персоны',
    'Каталог',
    'Фильтр',
    'Аниме',
    'Подписки',
    'Торренты',
    'Спорт'
  ])
);
Lampa.Storage.set(
  'menu_sort',
  JSON.stringify([
    'Главная',
    'Избранное',
    'Расписание',
    'Сериалы',
    'Релизы',
    'История'
  ])
);

console.log('rad_fix', 'Menu items patched');
