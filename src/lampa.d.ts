type LampaEvent = { type: string; component: string };

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
    follow(name: string, callback: (e: LampaEvent) => void): void;
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
