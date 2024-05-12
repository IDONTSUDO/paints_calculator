import {
  ConstAndPriceCalculatorScreen,
  ConstAndPriceCalculatorScreenPath,
} from "../../features/const_and_price_calculator/const_and_price_calculator_screen";
import { TypePaintAndPriceScreen, TypePaintAndPriceScreenPath } from "../../features/type_paint_and_price/type_paint_and_price_screen";
import { IRouter } from "./routers";

export const publicRouters: IRouter[] = [
  {
    path: ConstAndPriceCalculatorScreenPath,
    element: <ConstAndPriceCalculatorScreen />,
  },
  {
    path: TypePaintAndPriceScreenPath,
    element: <TypePaintAndPriceScreen />,
  },
];
