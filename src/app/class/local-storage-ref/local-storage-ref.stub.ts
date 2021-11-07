export class LocalStorageRefStub {
  store = {};
  mockLocalStorage = {
    getItem: (key: string): string => {
      return key in this.store ? this.store[key] : null;
    },
    setItem: (key: string, value: string) => {
      this.store[key] = value;
    },
    clear: () => {
      this.store = {};
    },
  };

  public getLocalStorage() {
    return this.mockLocalStorage;
  }
}
