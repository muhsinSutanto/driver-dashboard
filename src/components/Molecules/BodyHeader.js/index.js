import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style";

const BodyHeader = () => {
   const classes = useStyles();
   return (
      <div className={classes.container}>
         <div>
            <h1>Driver Management</h1>
            <p>Data driver yang bekerja dengan Anda.</p>
         </div>
         <div>
            <TextField
               variant="outlined"
               placeholder="Cari Driver"
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
