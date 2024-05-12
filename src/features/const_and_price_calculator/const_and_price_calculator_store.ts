import makeAutoObservable from "mobx-store-inheritance";
import { UiFormState } from "../../core/store/base_store";
import { NavigateFunction } from "react-router-dom";
import { CostAndPriceViewModel } from "./cost_and_price_view_model";
import { TypePaintAndPriceLocalStorageRepository } from "../type_paint_and_price/type_paint_and_price_repository";
import { IPaintViewModel } from "../type_paint_and_price/paint_view_model";

export class ConstAndPriceCalculatorStore extends UiFormState<
  CostAndPriceViewModel,
  any
> {
  costAndPriceViewModel: CostAndPriceViewModel = CostAndPriceViewModel.empty();
  paints?: IPaintViewModel[];
  typePaintAndPriceLocalStorageRepository: TypePaintAndPriceLocalStorageRepository =
    new TypePaintAndPriceLocalStorageRepository();

  constructor() {
    super();
    makeAutoObservable(this);
  }

  addNewPigment = () => {
    this.costAndPriceViewModel.costViewModels.push({
      paint: {
        pigmentWeight: 0,
        pigmentId: "",
        price: 0,
      },
      pigmentWeightConsumption: 0,
    });
  };
  errorHandingStrategy: (error: any) => void;
  getAllTypePaints = () =>
    (this.paints = this.typePaintAndPriceLocalStorageRepository.getAllPaints());
  init = async (navigate?: NavigateFunction | undefined) => {
    this.getAllTypePaints();
  };
  changePigment = (pigmentId: string, i: number) => {
    const pigment = this.paints?.findLast((el) => el.pigmentId === pigmentId);
    if (pigment) {
      this.costAndPriceViewModel.costViewModels =
        this.costAndPriceViewModel.costViewModels.map((el, index) => {
          if (i !== index) {
            return el;
          }
          el.paint = pigment;
          return el;
        });
    }
  };
  changePigmentConsumption(cosumption: number, i: number) {
    this.costAndPriceViewModel.costViewModels =
      this.costAndPriceViewModel.costViewModels.map((el, index) => {
        if (i !== index) {
          return el;
        }
        el.pigmentWeightConsumption = cosumption;
        return el;
      });
  }
  changePercent(per: number): void {
    this.costAndPriceViewModel.markupPercentage = per;
  }
  total = () => this.costAndPriceViewModel.calculate();
}
