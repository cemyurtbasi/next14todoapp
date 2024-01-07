"use client";

import { FC, useCallback, useState } from "react";
import Image from "next/image";

type CheckboxProps = {
  checked: boolean;
  onChange?: (value: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({ checked = false, onChange }) => {
  const [checkedState, setCheckedState] = useState<boolean>(checked);

  const handleClick = useCallback(() => {
    setCheckedState((prev) => {
      if (onChange) onChange(!prev);

      return !prev;
    });
  }, [onChange]);

  return (
    <div onClick={handleClick}>
      <div className={`checkbox ${checkedState ? "checked" : "unchecked"}`}>
        {checkedState ? (
          <Image
            src="/images/unchecked.svg"
            alt="checked"
            width="30"
            height="30"
          />
        ) : (
          <Image
            src="/images/checked.svg"
            alt="unchecked"
            width="30"
            height="30"
          />
        )}
      </div>
    </div>
  );
};