import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../const/styles";

const useStyles = makeStyles((theme) => ({
   containerWrapper: {
      backgroundColor: `${COLORS.WHITE} !important`,
   },
   container: {
      display: "flex",
      justifyContent: "flex-end",
   },
   contentContainer: {
      display: "flex",
      alignItems: "center",
      "& div": {
         display: "flex",
         alignItems: "center",
      },
      "& P": {
         color: COLORS.BLACK,
      },
      "& span": {
         color: COLORS.RED_PRIMARY,
      },
      "& svg": {
         fontSize: "40px",
         color: COLORS.GREY,
         marginLeft: "12px",
      },
      "& img": {
         width: "120px",
         display: "none",
      },
   },

   "@media (max-width: 450px)": {
      contentContainer: {
         justifyContent: "space-between",
         width: "100%",
         "& img": {
            display: "block",
            paddingTop: "10px",
         },
      },
   },
}));

export { useStyles };
