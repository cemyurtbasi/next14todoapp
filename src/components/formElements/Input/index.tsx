import { cx } from "@/shared/utlis/concatClasses";
import { FC } from "react";

import variables from "./input.module.scss";

type InputProps = {
  value: string;
  placeHolder: string;
  customClass?: string;
  onChange: (value: string) => void;
};

// Form item, Label ++ extra validasyon konrolleri eklenebilir
// Input elementini ayrı tutabil
export const Input: FC<InputProps> = ({
  value,
  onChange,
  customClass,
  placeHolder,
}) => {
  return (
    <div className={cx(variables.container, customClass)}>
      <input
        type="text"
        value={value}
        className={variables.input}
        onChange={(ev) => onChange(ev.target.value)}
        placeholder={placeHolder}
      />
    </div>
  );
};
