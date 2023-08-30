/**
 * QUESTO COMPONENTE GESTISCE LE PROPRIETA' DI FLEXBOX
 * TRA I NOSTRI ELEMENTI, ALLINEAMENTI VARI, SIA
 * VERTICALE CHE ORIZZONTALE, E LO SPAZIO
 * TRA QUESTI ELEMENTI.
 * LO COSTRUIAMO DI MODO CHE SIA SUPPORTATO
 * DA TUTTI I BROWSERS. GESTIREMO IL MARGINE 
 * IN MANIERA NATIVA
 */
import {
    flexbox,
    border,
    layout,
    color,
    space,
    position,
    compose
} from "styled-system";
import styled from "styled-components";
import { css } from "@styled-system/css";


const StackWrapper = styled("div")(
    (
        {
            childrenMarginTop,
            childrenMarginBottom,
            childrenMarginLeft,
            childrenMarginRight,
            align,
            justify,
            direction
        }) => css({
            display: "flex",
            alignItems: align,
            justifyContent: justify,
            flexDirection: direction,

            /**
             * USIAMO UN SELETTORE CHE RISPETTO A SE STESSO
             * OVVERO A QUESTO DIV, VIENE APPLICATO A TUTTI 
             * I SUOI FIGLI DEI FIGLI.
             * ESEMPIO: SE QUESTO ELEMENTO E' IL NUMERO 0,
             * IL SELETTORE SI APPLICA AL NUMERO 1,
             * SE E' IL NUMERO 1 ALLORA AL NUMERO 2 ETC...
             * DI MODO CHE IL PRIMO ELEMENTO NON SUBISCA QUESTO EFFETTO
             * MA QUELLO CHE E' CONTENUTO AL SUO INTERNO.
             * SE PER ESEMPIO STO ANDANDO AD IMITARE IL 
             * COMPORTAMENTO DELLA PROPRIETA' GAP VERSO
             * FLEX-DIRECTION: ROW, HO BISOGNO CHE IL MARGINE VENGA
             * APPLICATO CORRETTAMENTE SOLO A TUTTI GLI ELEMENTI
             * (FIGLI INTERNI) TRANNE IL PRIMO (IL PADRE ESTERNO )
             */
            "& > * + * ": {
                marginTop: childrenMarginTop,
                marginBottom: childrenMarginBottom,
                marginLeft: childrenMarginLeft,
                marginRight: childrenMarginRight,
            },
        }),
    compose(
        flexbox,
        border,
        layout,
        color,
        space,
        position
    )
);


const Stack = ({
    align,
    justify,
    /** DO UN VALORE DI DEFALT A DIREZIONE */
    direction = "row",
    spacing,
    children,
    ...rest
}) => {
    return (
        < StackWrapper
            {...rest}
            align={align}
            justify={justify}
            direction={direction}
            /**
             * NON VOGLIOMO CHE LO SPACING VENGA ASSOCIATO
             * O DISTRIBUITO VERTICALMENTE A MENO CHE
             * LA DIREZIONE DEL NOSTRO FLEX NON SIA
             * IN COLONNA, INFATTI NOI UTIIZIAMO SPACING
             * PER DEFINIRE LA QUANTITA' DI MARGINE CHE
             * VENGA UTILIZZATO COME GAP TRA I NOSTRI COMPONENTI
             * QUANDO LI FLEXEREMO
             */
            childrenMarginTop={direction === "column" ? spacing : 0}

            /**QUANDO IL COMPONENTE SI RIBALTA NON VOGLIOMO CHE CI SIA UN MARGINE NEL FONDO */
            childrenMarginBottom={direction === "column-reverse" ? spacing : 0}

            childrenMarginLeft={direction === "row" ? spacing : 0}
            childrenMarginRight={direction === "row-reverse" ? spacing : 0}


        >
            {children}
        </StackWrapper >
    );
};

export default Stack


