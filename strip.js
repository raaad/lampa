(function () {
  "use strict";

  const styleBody = `
/* side menu */
[data-action=feed],
[data-action=catalog],
[data-action=filter],
[data-action=subscribes],
[data-action=anime],
[data-action=about],
/* head */
.head__action.open--premium,
.head__action.open--feed,
.head__action.open--notice,
.head__action.open--broadcast,
/* card */
.full-start-new__reactions,
.full-start__button.button--reaction
{
   display: none !important;
}

/* side menu reorder */
.menu__list{
  display: flex;
  flex-direction: column;
}

[data-action=main]
{
  order: -10;
}

[data-action=favorite][data-type=book]
{
  order: -9;
}

[data-action=timetable]
{
  order: -8;
}
`;

  Lampa.Manifest.plugins = {
    type: "plugin",
    version: "0.0.1",
    name: "Strip All",
    description: "",
    component: "strip_all"
  };
  
  appendStyle(styleBody);

  function appendStyle(content) {
    var el = document.createElement("style");
    el.innerHTML = content;
    document.getElementsByTagName("head")[0].appendChild(el);
  }
})();