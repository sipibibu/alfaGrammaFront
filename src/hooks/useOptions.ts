import { ChangeEvent } from "react";
import { IAnswerVariants } from "../types.ts";

export const useOptions = (
  options: IAnswerVariants,
  setOptions: (options: IAnswerVariants) => void,
): ((event: ChangeEvent<HTMLInputElement>, key: number) => void) => {
  return (event: ChangeEvent<HTMLInputElement>, key: number) => {
    let newOptions: IAnswerVariants;
    if (key === options.length) {
      newOptions = [...options, { text: event.target.value }];
    } else if (event.target.value === "") {
      newOptions = [
        ...options.slice(0, key),
        ...options.slice(key + 1, options.length),
      ];
    } else {
      newOptions = [
        ...options.slice(0, key),
        { text: event.target.value },
        ...options.slice(key + 1, options.length),
      ];
    }
    setOptions(newOptions);
  };
};
