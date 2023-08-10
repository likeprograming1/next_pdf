import { styled } from "styled-components";

const BoxHead = styled.div`
    height: 121px;
    border-radius: 10px;
    border: 1px solid var(--light-p, #A7A7CE);
    background: var(--white, #FFF);
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CompanySub = styled.div`
    display: flex;
    margin-top: 13px; 
    margin-bottom: 12px;
`;

const SubCotent = styled.span`
    color: var(--black, #1D1B1B);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Line = styled.span`
    margin: 0px 17px;
    color: var(--light-gray, #EEEEF6);
`;

const Foot = styled.div`
    color: var(--gray, #73767C);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export {BoxHead, SubCotent, CompanySub, Line, Foot}