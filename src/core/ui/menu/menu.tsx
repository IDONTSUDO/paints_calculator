import "./menu.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export enum Pages {
  SHOPS = "Магазины",
  TRACKING_CHAINS = "Отслеживание цепочек транзакций",
  EMPTY = "",
}
interface CoreMenuProps {
  page: Pages;
  children?: JSX.Element | JSX.Element[];
}

export const CoreMenu = (props: CoreMenuProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isOpen) {
      ref.current!.style.display = "none";
    } else {
      ref.current!.style.display = "";
    }
  }, [isOpen]);

  const page = [
    { page: Pages.EMPTY, name: "", path: null },
    { page: Pages.SHOPS, name: Pages.SHOPS, path: "" },
    {
      page: Pages.TRACKING_CHAINS,
      name: Pages.TRACKING_CHAINS,
      path: "",
    },
  ];
  return (
    <>
      <div
        style={{
          height: 101,
          paddingTop: 40,
          width: "100vw",
          textAlign: "center",
        }}
        ref={ref}
      >
        {props.page}
        <div style={{ paddingTop: 20 }}>{props.children}</div>
      </div>

      <input
        onClick={() => {
          setOpen(!isOpen);
        }}
        type="checkbox"
        id="overlay-input"
      />
      <label htmlFor="overlay-input" id="overlay-button">
        <span></span>
      </label>
      <div id="overlay">
        <ul style={{ color: "white" }}>
          {page.map((el) => (
            <li
              style={el.name === props.page ? { backgroundColor: "black" } : {}}
              onClick={() => {
                if (el.path) navigate(el.path);
              }}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
