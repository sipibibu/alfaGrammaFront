import { ChangeEvent } from "react";
import { CheckboxOptions, RadioOptions } from "../types.ts";

export const useOptions = (
  options: string[],
  setOptions: (options: RadioOptions | CheckboxOptions) => void,
): ((event: ChangeEvent<HTMLInputElement>, key: number) => void) => {
  return (event: ChangeEvent<HTMLInputElement>, key: number) => {
    let newOptions: RadioOptions | CheckboxOptions;
    if (key === options.length) {
      newOptions = [...options, event.target.value];
    } else if (event.target.value === "") {
      newOptions = [
        ...options.slice(0, key),
        ...options.slice(key + 1, options.length),
      ];
    } else {
      newOptions = [
        ...options.slice(0, key),
        event.target.value,
        ...options.slice(key + 1, options.length),
      ];
    }
    setOptions(newOptions);
  };
};
