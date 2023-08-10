// import html2pdf from "html2pdf.js";
 
export const ExportData = () => {
    window.open("/preview/download");
}

export const handleExportPDF = () => {
  const element = document.getElementById("myElement"); // 원하는 HTML 요소 선택

  if (element) {
    // html2pdf()
    //   .from(element)
    //   .set({
    //     margin: [10,0,10,0], // 여백 설정
    //     filename:     'myfile.pdf',
    //     image:        { type: 'jpeg', quality: 0.98 },
    //     html2canvas:  { scale: 2 },
    //     jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    //   })
    //   .save("mypdf.pdf");
  }
};