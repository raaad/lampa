type LampaEvent = { type: string; component: string };

declare var Lampa: {
  Manifest: {
    plugins: any;
  };

  Storage: {
    get(name: string, empty: string): unknown;
    set(name: string, value: string): void;
    field(name: string): string;
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

  Utils: {
    putScript(urls: string[], callback: () => void): void;
    putScriptAsync(urls: string[], callback: () => void): void;
    protocol(): string;
  };

  TMDB: {
    image(url: string): string;
    api(url: string): string;
  };

  Settings: {
    listener: { follow(mode: 'open', callback: (e: unknown) => void): void };
  };
};
