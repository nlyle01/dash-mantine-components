import React from "react";
import { DefaultProps } from "../../props";
import { ColorPicker as MantineColorPicker } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Controlled component value */
    value?: string;
    /** Color format */
    format?: "hex" | "rgba" | "rgb" | "hsl" | "hsla";
    /** Set to false to display swatches only */
    withPicker?: boolean;
    /** Predefined colors */
    swatches?: string[];
    /** Number of swatches displayed in one row */
    swatchesPerRow?: number;
    /** Predefined component size */
    size?: MantineSize;
    /** Force picker to take 100% width of its container */
    fullWidth?: boolean;
    /** Should interactive elements be focusable */
    focusable?: boolean;
} & DefaultProps;

/**
 * Inline color picker. For more information, see: https://mantine.dev/core/color-picker/
 */
const ColorPicker = (props: Props) => {
    const { setProps, value, ...other } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return <MantineColorPicker onChange={onChange} {...other} />;
};

ColorPicker.defaultProps = {};

export default ColorPicker;
