import React from 'react'
import { BoxHead, CompanySub, SubCotent, Line, Foot } from './style'
import { Span } from '../../app/search_info/style'

const ContentHead : React.FC= () => {
  return (
    <BoxHead>
       <Span>COMPANY NAME</Span>
       <CompanySub>
        <SubCotent>CEO NAME</SubCotent>
        <Line>|</Line>
        <SubCotent>Business Number</SubCotent>
        <Line>|</Line>
        <SubCotent>corporate form</SubCotent>
       </CompanySub>
       <Foot>Establishment</Foot>
    </BoxHead>
  )
}

export default ContentHead
