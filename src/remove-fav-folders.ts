const COMPONENT_NAME = 'bookmarks';
const FOLDER_SELECTOR = '.bookmarks-folder';

const component = Lampa.Component.get(COMPONENT_NAME);

Lampa.Component.add(COMPONENT_NAME, function (...args: unknown[]) {
  const instance = component.apply(this, args);
  const create = instance.create;

  instance.create = function (...args: unknown[]) {
    const el = create.apply(this, args);

    el.find(FOLDER_SELECTOR).remove();
    console.log('rad_fix', 'Favorite folders removed');

    return el;
  };

  return instance;
});

console.log('rad_fix', 'Favorite folders patched');
