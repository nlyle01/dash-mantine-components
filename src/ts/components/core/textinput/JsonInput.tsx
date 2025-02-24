import React from "react";
import { DefaultProps, InputComponentProps } from "../../../props";
import { JsonInput as MantineJsonInput } from "@mantine/core";

type Props = {
    /** Value for controlled input */
    value?: string;
    /** Format json on blur */
    formatOnBlur?: boolean;
    /** Error message shown when json is not valid */
    validationError?: React.ReactNode;
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
} & InputComponentProps &
    DefaultProps;

/**
 * Capture json data from user. For more information, see: https://mantine.dev/core/json-input/
 */
const JsonInput = (props: Props) => {
    const { setProps, ...other } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return <MantineJsonInput {...other} onChange={onChange} />;
};

JsonInput.defaultProps = { value: "" };

export default JsonInput;
