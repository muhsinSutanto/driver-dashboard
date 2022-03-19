import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style";
import { searchDriver } from "../../../redux/actions/driverAction";
import { useDispatch, useSelector } from "react-redux";

const BodyHeader = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const { drivers } = useSelector((state) => state);

   return (
      <div className={classes.container}>
         <div>
            <h1>Driver Management</h1>
            <p>Data driver yang bekerja dengan Anda.</p>
         </div>
         <div>
            <TextField
               onKeyUp={(e) =>
                  dispatch(searchDriver(e.target.value, drivers.page, drivers.rawData))
               }
               variant="outlined"
               placeholder="Cari Driver"
               className={classes.inputField}
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                        <SearchIcon />
                     </InputAdornment>
                  ),
               }}
            />

            <Button variant="contained" endIcon={<AddIcon />}>
               tambah driver
            </Button>
         </div>
      </div>
   );
};

export default BodyHeader;
