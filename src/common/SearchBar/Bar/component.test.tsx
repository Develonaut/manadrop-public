import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-ui/core";
import React from "react";
import { setupShallowTest } from "tests/utils";
import { CancelButton } from "../ClearButton";
import { HelperText } from "../HelperText";
import { Bar } from "./component";

const mockOnChange = jest.fn();

const getDefaultProps = () => ({
  onChange: mockOnChange
});

const setupShallow = setupShallowTest(Bar, getDefaultProps);

describe("SearchBar", () => {
  const { wrapper } = setupShallow();
  test("should render with an Input and Icon", () => {
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Input).props().startAdornment).toStrictEqual(
      <FontAwesomeIcon icon={faSearch} />
    );
    expect(wrapper.find(Input).props().endAdornment).toMatchInlineSnapshot(`
      <Memo
        active={true}
        onClick={[Function]}
      />
    `);
    expect(wrapper.find(HelperText)).toHaveLength(1);
  });

  test("should use 'Search...' as the default placeholder", () => {
    expect(wrapper.find(Input).props().placeholder).toBe("Search...");
  });
});
