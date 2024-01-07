import { Asap_Condensed } from "next/font/google";
import { FC } from "react";

type InputProps = {
  value: string;
  placeHolder: string;
  onChange: (value: string) => void;
};

// Form item, Label ++ extra validasyon konrolleri eklenebilir
// Input elementini ayrı tutabil
export const Input: FC<InputProps> = ({ value, onChange, placeHolder }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        placeholder={placeHolder}
      />
    </div>
  );
};
