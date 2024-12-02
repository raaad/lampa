declare var Lampa: {
  Manifest: {
    plugins: any;
  };

  Storage: {
    get(name: string, empty: string): unknown;
  };

  Component: {
    get(name: string): Function;
    add(name: string, component: Function): void;
  };

  Listener: {
    follow(name: string, callback: (e: Event) => void): void;
  };

  Activity: {
    active():
      | {
          activity: {
            render(): { get(index: number): HTMLElement };
          };
        }
      | undefined;
  };
};
