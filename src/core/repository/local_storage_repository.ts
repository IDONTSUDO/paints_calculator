import { Result } from "../helper/result";

export class LocalStorageRepository {
  _setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  _getItem(key: string): Result<null, string> {
    const result = localStorage.getItem(key);
    if (result === null) {
      return Result.error(result);
    }
    return Result.ok(result);
  }
}
