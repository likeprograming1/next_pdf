import { styled } from "styled-components";

const ContentBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 8px;
    grid-column-gap: 28px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #D9D9D9;
`;

const Span = styled.span`
    margin-left: 20px;
    color: var(--gray, #73767C);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export { Content, Span, ContentBox}