export class HttpContextStore {
  private store: any;

  constructor() {
    Object.defineProperty(this, "store", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: {},
    });
  }

  set(name: string, value: any) {
    this.store[name] = value;
  }

  get(name: string) {
    return this.store[name];
  }
}
