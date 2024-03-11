declare var Lampa: {
  Manifest: {
    plugins: any;
  };

  Storage: {
    get: (name: string, empty: string) => unknown;
  };
};
