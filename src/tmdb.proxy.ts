const host = '91.108.243.133'; //lampalands.ru

Lampa.TMDB.image = (url) => `http://${host}/tmdb/img/${url.replace('//', '/')}`;

Lampa.TMDB.api = (url) => `http://${host}/tmdb/api/3/${url}`;

console.log('rad_fix', 'TMDB proxy forced');
