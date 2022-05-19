import React, { useState, useEffect } from "react";
import classes from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.MyInput} {...props} />;
});

export default MyInput;
