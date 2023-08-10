import React from 'react';
import ContentHead from "../../../components/head/contenthead"; 
import InfoHeader from '../../../components/view/header/infoheader';
import ContentBody from '../../../components/view/body/contentBody';
import News from '../../../components/news/news';
import { data } from '../data/data';

const Page : React.FC = () => {
  return (
    <div>
      <ContentHead />
      <InfoHeader text="Company Overview"/>
      <ContentBody data={data}/>
      <InfoHeader text="Management"/>
      <ContentBody data={data}/>
      <InfoHeader text="Stockholder"/>
      <ContentBody data={data}/>
      <InfoHeader text="Report Articles"/>
      <News data={data}/>
    </div>
  )
}

export default Page
 