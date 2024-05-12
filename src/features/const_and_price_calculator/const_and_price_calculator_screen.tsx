import { observer } from "mobx-react-lite";
import { ConstAndPriceCalculatorStore } from "./const_and_price_calculator_store";
import React from "react";
import { SelectCore } from "../../core/ui/select/select";
import { CoreButton } from "../../core/ui/button/button";
import { CoreText, CoreTextType } from "../../core/ui/text/text";
import { CoreInput } from "../../core/ui/input/input";

export const ConstAndPriceCalculatorScreenPath = "/";

export const ConstAndPriceCalculatorScreen = observer(() => {
  const [store] = React.useState(() => new ConstAndPriceCalculatorStore());
  React.useEffect(() => {
    store.init();
  }, []);
  return (
    <div>
      <CoreText
        text="Калькулятор себестоймости и прайса"
        type={CoreTextType.header}
      />
      {store.costAndPriceViewModel.costViewModels.map((el, index) => (
        <div key={index}>
          <div style={{ textAlign: "center" }}>
            <CoreText text={String(index + 1)} type={CoreTextType.header} />
          </div>
          <div style={{ height: 10 }} />
          <SelectCore
            items={store.paints?.map((el) => el.pigmentId) ?? []}
            value={""}
            label={"Пигмент"}
            onChange={(value: string) => {
              store.changePigment(value, index);
            }}
          />
          <CoreInput
            label={"Вес потраченой краски"}
            validation={(val) => Number().isValid(val)}
            error="Только числа"
            onChange={(text) =>
              store.changePigmentConsumption(Number(text), index)
            }
          />
        </div>
      ))}
      <div style={{ height: 15 }} />
      <CoreButton
        text="Добавить новый пигмент"
        onClick={() => store.addNewPigment()}
        style={{ width: "max-content" }}
      />
      <div style={{ height: 15 }} />

      <CoreInput
        label={"Процент наценки %"}
        validation={(val) => Number().isValid(val)}
        error="Только числа"
        onChange={(text) => store.changePercent(Number(text)) }
      />
      <div style={{ height: 15 }} />
      <CoreButton
        text="Расчитать"
        onClick={() => store.total()}
        style={{ width: "max-content" }}
      />

      {store.costAndPriceViewModel.total ? (
        <div>
          <CoreText
            text={`Итоговая себестоймость: ${store.costAndPriceViewModel.total.sum}`}
            type={CoreTextType.large}
          />
          <CoreText
            text={`Итоговый прайс: ${store.costAndPriceViewModel.total.amountWithExtraCharge}`}
            type={CoreTextType.large}
          />
        </div>
      ) : null}
    </div>
  );
});
