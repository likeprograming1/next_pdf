import { styled } from "styled-components";
import { Button, Box , Container} from "@mui/material";

interface Styled {

}

const Boxs = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    *{
        font-family: 'Pretendard Variable';
    }
`;

const ExportBtn = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border: none;
    background-color: #17217A;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    right: 42px;
    top: 81px;
    color: white;
    img {
        margin-left: 4px;
    }
`;

const ImageBox = styled(Box)<{width?: string}>`
    position: relative;
    width: ${(props) => props.width};
    border-radius: 10px;
    background: var(--white, #FFF);
    box-shadow: 4px 4px 20px 0px rgba(23, 33, 122, 0.30);
`;

const MainBox = styled(Box)`
    padding: 20px 22px;
    height: 100%;
`;

const Span = styled.span`
    color: var(--black, #1D1B1B);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export {Boxs, ImageBox, ExportBtn, MainBox, Span}