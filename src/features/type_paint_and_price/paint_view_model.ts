import { Result } from "../../core/helper/result";

export interface IPaintViewModel {
  pigmentWeight: number;
  pigmentId: string;
  price: number;
}

export class PaintViewModel implements IPaintViewModel {
  constructor(
    public pigmentWeight: number,
    public pigmentId: string,
    public price: number
  ) {}
  isValid(): Result<string, IPaintViewModel> {
    if (this.pigmentId.isEmpty()) {
      return Result.error("pigmentId is empty");
    }
    if (this.pigmentWeight === 0) {
      return Result.error("pigmentWeight is 0");
    }
    return Result.ok(this);
  }
  static empty() {
    return new PaintViewModel(0, "", 0);
  }
}
