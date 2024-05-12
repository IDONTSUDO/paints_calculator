import makeAutoObservable from "mobx-store-inheritance";

export class CountingPaintThiningStore {
  constructor() {
    makeAutoObservable(this);
  }
}
