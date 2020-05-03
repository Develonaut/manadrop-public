import classNames from "classnames";
import { usePrevious } from "core/hooks/common";
import React, {
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-ui/core";
import { ClearButton } from "../ClearButton";
import { HelperText } from "../HelperText";

import { styles } from "./styles";

export interface ExternalClasses {
  root?: string;
}

export interface PublicProps {
  onChange?: (value: string) => void;
  size?: string;
  defaultValue?: string;
  classes?: ExternalClasses;
  placeholder?: string;
  debounce?: number;
  onSubmit?: (value: string) => void;
  onCancel?: () => void;
}

export const Bar: FunctionComponent<PublicProps> = ({
  classes = {},
  defaultValue = "",
  placeholder = "Search...",
  onSubmit = () => undefined
}) => {
  const _classes = styles();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocused] = useState(true);
  const [value, setValue] = useState(defaultValue);
  const [submitHelper, setSubmitHelper] = useState(false);
  const previousValue = usePrevious(value);
  const resetValue = () => setValue(defaultValue);
  const blurInput = () => (inputRef.current ? inputRef.current.blur() : null);

  const handleFocus = () => {
    if (value) setSubmitHelper(true);
    setFocused(true);
  };

  const handleBlur = () => {
    blurInput();
    setFocused(false);
    setSubmitHelper(false);
  };

  const handleReset = () => {
    resetValue();
  };

  const handleSubmit = () => {
    onSubmit(value);
    setSubmitHelper(false);
  };

  const handleChange = ({ target: { value: inputValue = "" } }) =>
    setValue(inputValue);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") handleSubmit();
  };

  useEffect(() => {
    if (value !== previousValue) setSubmitHelper(true);
    if (!value) setSubmitHelper(false);
  }, [value, previousValue]);

  return (
    <div className={classNames(_classes.root, classes.root)}>
      <Input
        value={value}
        ref={inputRef}
        fullWidth={true}
        autoFocus={true}
        placeholder={placeholder}
        classes={{
          root: _classes.inputRoot,
          input: _classes.inputInput
        }}
        startAdornment={useMemo(
          () => (
            <FontAwesomeIcon icon={faSearch} />
          ),
          []
        )}
        endAdornment={<ClearButton active={isFocused} onClick={handleReset} />}
        inputProps={{ "aria-label": placeholder }}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <HelperText active={submitHelper} />
    </div>
  );
};
