import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../const/styles";

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
         color: COLORS.BLACK,
      },
   },

   itemContainerActive: {
      borderLeft: `3px solid ${COLORS.RED_PRIMARY}`,
      "& svg": {
         color: COLORS.RED_PRIMARY,
      },
      "& div:nth-child(1)": {
         minWidth: "36px",
      },
      "& span": {
         color: COLORS.RED_PRIMARY,
         fontWeight: "bold",
      },
   },
}));

export { useStyles };
