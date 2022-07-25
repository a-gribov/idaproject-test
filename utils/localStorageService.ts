export class LocalStorageService {
  static set(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val))
  }

  static has(key: string): boolean {
    return !!localStorage.getItem(key)
  }

  static get(key: string) {
    if (LocalStorageService.has(key)) {
      const val = localStorage.getItem(key)
      return val !== null ? JSON.parse(val) : val
    }
    return null
  }

  static getLength() {
    return localStorage.length
  }
}
