
(function () {
  "use strict";

  Lampa.Manifest.plugins = {
    type: "plugin",
    version: "0.0.1",
    name: "Strip All",
    description: "",
    component: "strip_all",
  };

  appendStyle(styleBody);

  patchAd();

  function appendStyle(content) {
    var el = document.createElement("style");
    el.innerHTML = content;
    document.getElementsByTagName("head")[0].appendChild(el);

    console.log("##### MENU ITEM PATCHED");
  }

  function patchAd() {
    const user = {
      id: 1,
      premium: new Date(2099, 0, 0).getTime(),
    };

    const get = Lampa.Storage.get;

    Lampa.Storage.get = (name, empty) =>
      name === "account_user" ? user : get.call(Lampa.Storage, name, empty);

    console.log("##### AD PATCHED");
  }
})();
