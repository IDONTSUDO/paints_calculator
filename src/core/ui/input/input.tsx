import * as React from "react";
import { CoreText, CoreTextType } from "../text/text";

interface IInputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  validation?: (value: string) => boolean;
  error?: string;
  style?: React.CSSProperties;
}

export const CoreInput = (props: IInputProps) => {
  const [value, setValue] = React.useState<string>(() => props.value ?? "");
  const ref = React.useRef<HTMLDivElement>(null);
  const [isAppendInnerText, setAppendInnerText] = React.useState(true);
  React.useEffect(() => {
    if (ref.current && isAppendInnerText) {
      ref.current.innerText = value;
      setAppendInnerText(false);
    }
  }, [ref, value, isAppendInnerText, setAppendInnerText]);

  return (
    <div
      style={Object.assign(
        {
          backgroundColor: "rgba(230, 224, 233, 1)",
          height: 30,
          borderRadius: "4px 4px 0px 0px",
          borderBottom: "solid 1px black",
          padding: "10px 10px 10px 10px",
        },
        props.style
      )}
    >
      <CoreText type={CoreTextType.small} text={props.label} />

      <input
        defaultValue={props.value}
        style={{
          backgroundColor: "#00008000",
          border: 1,
          fontSize: 16,
          fontFamily: "Roboto",
          color: "#1D1B20",
          height: 24,
          width: "100%",
          userSelect: "none",
          outline: "none",
        }}
        onChange={(e) => {
          const val = e.target.value;
          setValue(val);
          if (val) {
            if (
              props.validation !== undefined &&
              props.validation(val) &&
              props.onChange
            ) {
              props.onChange(val);
              return;
            }

            if (props.onChange && props.validation === undefined) {
              props.onChange(val);
              return;
            }
          }
        }}
      />
      {value ? (
        props.validation ? (
          props.validation(value) ? null : (
            <div style={{ color: "#ff1d0c" }}>
              {props.error ? props.error : "error"}
            </div>
          )
        ) : null
      ) : null}
    </div>
  );
};
