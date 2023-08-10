import React from 'react'
import { ContentBox, Content, Span } from './style'

const ContentBody = ({data}:{data:any}) => {
  return (
    <ContentBox>
      {data && data.map((item:string, idx:number) => {
        return (
            <Content key={idx}>
              <Span> 
                Company Info
              </Span>
            </Content>
            )
        })}     
    </ContentBox>
  )
}

export default ContentBody
