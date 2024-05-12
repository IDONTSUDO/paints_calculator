import { observer } from "mobx-react-lite";
import { CountingPaintThiningStore } from "./counting_paint_thining_store";
import React from "react";
 
export const CountingPaintThiningScreenPath = "/auth";

export const CountingPaintThiningScreen = observer(() => {
  const [store] = React.useState(() => new CountingPaintThiningStore());
  return <></>;
});
