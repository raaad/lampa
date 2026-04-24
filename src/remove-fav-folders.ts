/// <reference path="./lampa.d.ts" />

const COMPONENT_NAME = 'bookmarks';
const FOLDER_SELECTOR = '.bookmarks-folder';

const component = Lampa.Component.get(COMPONENT_NAME);

Lampa.Component.add(
  COMPONENT_NAME,
  function (this: Function, ...args: unknown[]) {
    const instance = component.apply(this, args);
    const render = instance.render;

    instance.render = function (...args: unknown[]) {
      const el = render.apply(this, args);

      el && $(el).find(FOLDER_SELECTOR).remove();
      console.log('rad_fix', 'Favorite folders removed');

      return el;
    };

    return instance;
  }
);

console.log('rad_fix', 'Favorite folders patched');
