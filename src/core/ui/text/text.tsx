import * as React from "react";

export enum CoreTextType {
  header,
  medium,
  large,
  small,
}

export interface ITextProps {
  text: string;
  type: CoreTextType;
  color?: string;
}

export function CoreText(props: ITextProps) {
  if (props.type === CoreTextType.small) {
    return (
      <div
        style={{
          color: props.color ?? "rgba(73, 69, 79, 1)",
          fontSize: 12,
          fontFamily: "Roboto",
          fontWeight: 400,
          fontSizeAdjust: 14,
          textOverflow: "ellipsis",
        }}
      >
        {props.text}
      </div>
    );
  }
  if (props.type === CoreTextType.large) {
    return (
      <div
        style={{
          color: props.color ?? "#1D1B20",
          fontSize: 16,
          fontFamily: "Roboto",
          fontWeight: 400,
          fontSizeAdjust: 14,
          textOverflow: "ellipsis",
        }}
      >
        {props.text}
      </div>
    );
  }
  if (props.type === CoreTextType.medium)
    return (
      <div
        style={{
          color: props.color ?? "#1D1B20",
          fontSize: 14,
          fontFamily: "Roboto",
          fontWeight: 400,
          textOverflow: "ellipsis",
          fontSizeAdjust: 14,
        }}
      >
        {props.text}
      </div>
    );
  if (props.type === CoreTextType.header)
    return (
      <div
        style={{
          color: props.color ?? "#1D1B20",
          fontSize: 20,
          fontFamily: "Roboto",
          fontWeight: 500,
          textOverflow: "ellipsis",

          fontSizeAdjust: 16,
        }}
      >
        {props.text}
      </div>
    );
  return <div>{props.text}</div>;
}
