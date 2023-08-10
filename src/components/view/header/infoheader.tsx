import { HaederBox, HeadSpan } from './style'

const InfoHeader = ({text}:{text:string}) => {
  return (
    <HaederBox>
        <HeadSpan>
            {text}
        </HeadSpan>
    </HaederBox>
  ) 
}

export default InfoHeader
