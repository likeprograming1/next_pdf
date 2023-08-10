import { styled } from "styled-components";

const New = styled.div`
    margin: 30px 20px;  
`;

const Head = styled.div`
    margin-bottom: 8px;
`;

const Title = styled.span`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 8px;
`;

const Moment = styled.span`
    color: var(--gray, #73767C);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Content = styled.span`
  text-align: justify;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export { New, Head, Title, Moment, Content}