import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   logo: {
      width: "150px",
   },
   itemContainer: {
      borderLeft: "3px solid #fff",
      "& svg": {
         color: "#000",
      },
      "& div:nth-child(1)": {
         minWidth: "36px",
      },
      "& span": {
         color: "#000",
      },
   },

   itemContainerActive: {
      borderLeft: "3px solid #eb3434",
      "& svg": {
         color: "#eb3434",
      },
      "& div:nth-child(1)": {
         minWidth: "36px",
      },
      "& span": {
         color: "#eb3434",
      },
   },
}));

export { useStyles };
