import { observer } from "mobx-react-lite";
import { TypePaintAndPriceStore } from "./type_paint_and_price_store";
import React from "react";
import { CoreInput } from "../../core/ui/input/input";
import { CoreButton } from "../../core/ui/button/button";
import { CoreText, CoreTextType } from "../../core/ui/text/text";

export const TypePaintAndPriceScreenPath = "/paints";

export const TypePaintAndPriceScreen = observer(() => {
  const [store] = React.useState(() => new TypePaintAndPriceStore());
  React.useEffect(() => {
    store.init();
  }, []);
  return (
    <>
      <div>
        <CoreInput
          onChange={(text) => store.updateForm({ pigmentId: text })}
          label={"номер пигмента"}
        />
        <div style={{ height: 15 }} />
        <CoreInput
          onChange={(text) => store.updateForm({ pigmentWeight: Number(text) })}
          validation={(val) => Number().isValid(val)}
          error="введите число"
          label={"вес пигмента"}
        />
        <div style={{ height: 15 }} />
        <CoreInput
          onChange={(text) => store.updateForm({ price: Number(text) })}
          validation={(val) => Number().isValid(val)}
          error="введите число"
          label={"цена пигмента"}
        />
        <div style={{ height: 15 }} />
        <CoreButton
          text={"создать новую краску"}
          onClick={() => store.addNewPaint()}
          style={{ width: "max-content" }}
        />
      </div>
      <CoreText text="Пигменты" type={CoreTextType.header} />
      <div style={{ height: 15 }} />
      <div>
        {store.paints?.map((el) => (
          <div
            style={{
              backgroundColor: "#e6e0e9",
              margin: "10px",
              borderRadius: "12px",
              padding: 10,
            }}
          >
            <div style={{ height: 15 }} />

            <CoreText
              text={`Номер: ${el.pigmentId}`}
              type={CoreTextType.medium}
            />
            <div style={{ height: 15 }} />
            <CoreText
              text={`Вес: ${el.pigmentWeight}`}
              type={CoreTextType.medium}
            />
            <div style={{ height: 15 }} />
            <CoreText text={`Цена: ${el.price}`} type={CoreTextType.medium} />
            <div style={{ height: 15 }} />
            <CoreButton
              text={"Удалить"}
              onClick={() => store.deletePaint(el.pigmentId)}
              style={{ width: "max-content" }}
            />
          </div>
        ))}
      </div>
    </>
  );
});
