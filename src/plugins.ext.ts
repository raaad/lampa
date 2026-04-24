/// <reference path="./lampa.d.ts" />

(function () {
  'use strict';

  Lampa.Utils.putScriptAsync(
    [
      'https://plugin.rootu.top/tmdb.js',
      'https://amikdn.github.io/anti-dmca.js',
      'https://lampame.github.io/main/pubtorr.js',
      'https://cub.rip/plugin/lgbt'
    ],
    () => {}
  );

  console.log('rad_fix', 'Extra plugins inititalized');
})();
