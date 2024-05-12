import makeAutoObservable from "mobx-store-inheritance";
import {
  IPaintViewModel as IPaintModel,
  PaintViewModel,
} from "./paint_view_model";
import { UiFormState } from "../../core/store/base_store";
import { NavigateFunction } from "react-router-dom";
import { TypePaintAndPriceLocalStorageRepository } from "./type_paint_and_price_repository";
import { message } from "antd";

export class TypePaintAndPriceStore extends UiFormState<PaintViewModel, any> {
  deletePaint = (pigmentId: string) => {
    this.typePaintAndPriceLocalStorageRepository.deletePaint(pigmentId);
    this.getAllPaints();
  };

  viewModel: PaintViewModel = PaintViewModel.empty();
  paints?: IPaintModel[];

  typePaintAndPriceLocalStorageRepository =
    new TypePaintAndPriceLocalStorageRepository();
  constructor() {
    super();
    makeAutoObservable(this);
  }
  errorHandingStrategy: (error: any) => void;
  init = async (navigate?: NavigateFunction | undefined) => {
    this.getAllPaints();
    console.log(this.paints);
  };
  getAllPaints() {
    this.paints = this.typePaintAndPriceLocalStorageRepository.getAllPaints();
  }
  addNewPaint() {
    this.viewModel.isValid().fold(
      (model) => {
        this.typePaintAndPriceLocalStorageRepository.savePaint(model);
        this.getAllPaints();
      },
      (_) => message.error(_)
    );
  }
}
