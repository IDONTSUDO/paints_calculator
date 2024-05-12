import { makeAutoObservable } from "mobx";
import { Result } from "../../core/helper/result";
import { IPaintViewModel } from "../type_paint_and_price/paint_view_model";
export interface ICostViewModel {
  paint: IPaintViewModel;
  pigmentWeightConsumption: number;
}
export interface ITotalViewModel {
  sum: number;
  amountWithExtraCharge: number;
}
export class CostAndPriceViewModel {
  costViewModels: ICostViewModel[] = [];
  markupPercentage = 1;
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
  getSum = () =>
    this.costViewModels.reduce(
      (acc, el) =>
        (acc +=
          (el.paint.price / el.paint.pigmentWeight) *
          el.pigmentWeightConsumption),
      0
    );
  calculate() {
    this.total = {
      sum: this.getSum(),
      amountWithExtraCharge:
        (this.getSum() / 100) * this.markupPercentage + this.getSum(),
    };
  }
}
