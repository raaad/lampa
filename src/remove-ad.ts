const user = {
  id: 1,
  premium: new Date(2099, 0, 0).getTime()
};

const get = Lampa.Storage.get;

Lampa.Storage.get = (name, empty) =>
  name === 'account_user' ? user : get.call(Lampa.Storage, name, empty);

console.log('##### AD PATCHED');
