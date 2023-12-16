import { useEffect } from "react";

export default function useFocusOnToggle(
  inputRef: HTMLInputElement | null,
  watchState: boolean | undefind,
) {
  useEffect(() => {
    if (inputRef && watchState) {
      setTimeout(() => {
        inputRef.focus();
      }, 100);
    }
  }, [watchState, inputRef]);
}
