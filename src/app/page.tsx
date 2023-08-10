import React from "react";
import PDF from "./search_info/Images/PDF.svg";
import { Boxs, ExportBtn, ImageBox, MainBox } from "./search_info/style";
import Page from "./search_info/pdf/page";
import { ExportData, handleExportPDF } from "./search_info/modules/modules";
// import { Link } from "react-router-dom";

function App({px, string}:{px:string, string:string}) {
  return (
    <Boxs>
      <ImageBox width={px}>
        <ExportBtn onClick={()=>{{string ? handleExportPDF() : ExportData()}}}>
          PDF
          <img src={PDF} alt="Export-img" />
        </ExportBtn>
        <MainBox id="myElement">
          <Page />
        </MainBox>
      </ImageBox>
    </Boxs>
  );
}

export default App;
