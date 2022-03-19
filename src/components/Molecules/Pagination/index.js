import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";
import { paginate } from "../../../redux/actions/driverAction";

const Pagination = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const { drivers } = useSelector((state) => state);

   return (
      <div>
         <Button
            disabled={drivers.page === 1}
            onClick={() => {
               dispatch(paginate(drivers.page - 1, "prev", drivers.rawData));
            }}
            startIcon={<ArrowBackIosIcon />}
         >
            Previous Page
         </Button>
         <Button
            disabled={drivers.page === drivers.totalPage}
            onClick={() => {
               dispatch(paginate(drivers.page + 1, "next", drivers.rawData));
            }}
            endIcon={<ArrowForwardIosIcon />}
         >
            Next Page
         </Button>
      </div>
   );
};

export default Pagination;
