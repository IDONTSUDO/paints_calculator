import { LocalStorageRepository } from "../../core/repository/local_storage_repository";
import { IPaintViewModel } from "./paint_view_model";

export class TypePaintAndPriceLocalStorageRepository extends LocalStorageRepository {
  deletePaint = (pigmentId: string) =>
    this.savePaints(
      this.getAllPaints().filter((el) => el.pigmentId !== pigmentId)
    );
  key = "paints";
  getAllPaints = (): IPaintViewModel[] =>
    this._getItem(this.key).fold(
      (s) => {
        return JSON.parse(s);
      },
      (e) => []
    );
  savePaints = (models: IPaintViewModel[]) =>
    this._setItem(this.key, JSON.stringify(models));
  savePaint = (model: IPaintViewModel) =>
    this._setItem(this.key, JSON.stringify(this.getAllPaints().add(model)));
}
