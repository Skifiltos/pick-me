import styled from "styled-components";
import {
    flexbox,
    border,
    layout,
    color,
    space,
    position,
    compose,
    background,
    borderColor,
    height,
    paddingLeft,
    paddingRight,
    lineHeight,
    typography,
    shadow
} from "styled-system";



const InputWrapper = styled("input")(
    {
        background: "var(--grey-900)",
        border: "1px solid",
        borderColor: "--gray-600",
        color: "var(--gray-600)",
        height: "48px",
        cursor: "text",
        borderRadius: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
        appearance: "none",
        outline: "none",
        footSize: "16px",
        lineHeight: "20px",
        "&::placeholder": {
            color: "var(--grey-700)",
            lineHeight: "20px",
        },

    },
    compose(
        layout,
        space,
        border,
        typography,
        shadow,
        color,
        background
    )

);

export default InputWrapper