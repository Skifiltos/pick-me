import styled from "styled-components";
import {
    space,
    layout,
    background,
    border,
    position,
    compose,
    variant
} from "styled-system";



const Container = styled("div")(
    variant({
        prop: "size",
        variant: {
            fullwidth: {
                maxWidth: "100%",
                with: "100%",
            },
            xl: {
                maxWidth: "1140px",
                with: "calc(100% - 48px)",
            },
            md: {
                maxWidth: "768px",
                with: "calc(100% - 24px)",
            },
            sm: {
                maxWidth: "568px",
                with: "calc(100% - 12px)",
            },
            xs: {
                maxWidth: "440px",
                with: "calc(100% - 6px%"
            }
        }
    }),
    compose(space, layout, background, border, position)
);

// Container.defaultProps = {
//     ml: "auto",
//     mr: "auto",
//     size: "xl"
// }


export default Container