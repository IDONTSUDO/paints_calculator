import React from "react";
import { CoreText, CoreTextType } from "../text/text";

interface ISelectCoreProps {
  items: string[];
  value: string;
  label: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}
export const SelectCore = (props: ISelectCoreProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [cursorIsCorses, setCursorIsCorses] = React.useState(false);
  const [value, setValue] = React.useState(props.value);
  React.useEffect(() => {
    ref.current?.addEventListener("mousemove", () => {
      setCursorIsCorses(true);
    });
    ref.current?.addEventListener("mouseleave", () => {
      setCursorIsCorses(false);
    });
  }, [ref, setCursorIsCorses]);

  return (
    <div ref={ref} style={props.style}>
      <div
        style={{
          backgroundColor: "rgba(230, 224, 233, 1)",
          height: 31,
          borderRadius: "4px 4px 0px 0px",
          borderBottom: "solid 1px black",
          padding: "10px 10px 10px 10px",
        }}
      >
        <CoreText type={CoreTextType.small} text={props.label} />
        <div
          style={{
            fontSize: 16,
            fontFamily: "Roboto",
            color: "#1D1B20",
            height: 24,
          }}
        >
          {value}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(243, 237, 247, 1)",
          boxShadow:
            "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
          borderRadius: 4,
        }}
      >
        {cursorIsCorses
          ? props.items.map((el) => (
              <div
                onClick={() => {
                  setValue(el);
                  props.onChange(el);
                }}
                style={{
                  height: 48,
                  textAlign: "center",
                  alignContent: "center",
                  cursor: "pointer",
                  borderBottom: "1px solid",
                }}
              >
                {el}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
