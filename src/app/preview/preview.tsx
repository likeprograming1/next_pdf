import React from "react";
import Page from "../page";
import { useRouter } from "next/router";

const Preview = () => {
  const str = useRouter();
  console.log(str);
  return (
    <Page px="210mm" string={"download"} />
  )
}

export default Preview
