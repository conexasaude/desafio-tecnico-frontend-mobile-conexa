import { SvgUri } from "react-native-svg";
import { SVGContainer } from "./styles";

export default function Logo() {
    return (
        <SVGContainer>
            <SvgUri
              width="100%"
              height="50px"
              uri="https://raw.githubusercontent.com/conexasaude/desafio-tecnico-frontend-mobile-conexa/b2e27512e27c5b718a20c9778719d902bafc989e/img/logo-conexa.svg"
            />
        </SVGContainer>
    )
}