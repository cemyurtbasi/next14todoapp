"use client";

import { FC, useCallback, useState } from "react";
import Image from "next/image";

type CheckboxProps = {
  checked: boolean;
  onChange?: (value: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  const [checkedState, setCheckedState] = useState<boolean>(checked);

  const handleClick = useCallback(() => {
    setCheckedState((prev) => {
      if (onChange) onChange(!prev);

      return !prev;
    });
  }, [onChange]);

  return (
    <div onClick={handleClick}>
      {checkedState ? (
        <Image src="/images/checked.svg" alt="checked" width="30" height="30" />
      ) : (
        <Image
          src="/images/unchecked.svg"
          alt="unchecked"
          width="30"
          height="30"
        />
      )}
    </div>
  );
};
