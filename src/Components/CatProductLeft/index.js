import React from "react";
import CatTitle from "../CatTitle";
import { Button } from "@mui/material";
import DateTimeContainer from "../DateTimeContainer";
import Style from "./Style.module.css";
const CatProductLeft = () => {
  return (
    <div className={Style.container}>
      <p className={Style.categories}>categories</p>
      <CatTitle title={"Enhance Your Music Experience"} />
      <div className={Style.dateTimeBlock}>
        <DateTimeContainer number={"23"} type={"Hours"} />
        <DateTimeContainer number={"05"} type={"Days"} />
        <DateTimeContainer number={"59"} type={"Minutes"} />
        <DateTimeContainer number={"35"} type={"Second"} />
      </div>
      <Button variant="contained" color="success" size="large" sx={{backgroundColor:'#00FF66'}}>
        Buy Now!
      </Button>
    </div>
  );
};

export default CatProductLeft;
