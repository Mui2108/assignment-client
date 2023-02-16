import React from "react";
import { Dropdown as Option, MenuProps } from "antd";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
interface Props {
  value?: string;
  onChange?: (value: string) => void;
  items: MenuProps["items"];
  placeholder?: string;
}
const Dropdown = ({
  value,
  onChange,
  items,
  placeholder = "Select Organization ",
}: Props) => {
  const [calss, setClass] = useState<string>("fa-arrow-down");

  const onClick: MenuProps["onClick"] = ({ key, domEvent }) => {
    onChange && onChange(key);
  };

  const findItem = () => {
    const res: any = items?.find((item) => item?.key === value);

    return res.label;
  };
  return (
    <Option
      trigger={["click"]}
      menu={{ items, onClick, className: "menu-organiz" }}
      onOpenChange={(e) =>
        e ? setClass("fa fa-arrow-down open") : setClass("fa-arrow-down")
      }
    >
      <div className="dropdown-organiz">
        <p>{value ? findItem() : placeholder}</p>
        <AiFillCaretDown className={calss} />
      </div>
    </Option>
  );
};

export default Dropdown;
