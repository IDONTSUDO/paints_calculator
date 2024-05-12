import { makeAutoObservable } from "mobx";
import { Result } from "../../core/helper/result";
import { IPaintViewModel } from "../type_paint_and_price/paint_view_model";
export interface ICostViewModel {
  paint: IPaintViewModel;
  pigmentWeightConsumption: number;
}
export interface ITotalViewModel {
  sum: number;
  operations: [];
}
export class CostAndPriceViewModel {
  costViewModels: ICostViewModel[] = [];
  markupPercentage = 0;
  total?: ITotalViewModel;
  constructor() {
    makeAutoObservable(this);
  }
  isValid(): Result<string, void> {
    return Result.ok();
  }
  static empty() {
    return new CostAndPriceViewModel();
  }
  calculate() {
    this.total = {
      sum: this.costViewModels.reduce(
        (acc, el) =>
          (acc +=
            (el.paint.price / el.paint.pigmentWeight) *
            el.pigmentWeightConsumption),
        0
      ),
      operations: [],
    };
  }
}
