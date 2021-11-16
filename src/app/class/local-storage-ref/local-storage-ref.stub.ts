export class LocalStorageRefStub {
  store = {};
  mockLocalStorage = {
    getItem: (key: string): string => (key in this.store ? this.store[key] : null),
    setItem: (key: string, value: string) => {
      this.store[key] = value;
    },
    removeItem: (key: string) => {
      delete this.store[key];
    },
  };

  public getLocalStorage() {
    return this.mockLocalStorage;
  }
}
