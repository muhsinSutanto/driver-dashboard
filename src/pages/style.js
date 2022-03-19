import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../const/styles";

const useStyles = makeStyles((theme) => ({
   cardsContainer: {
      display: "flex",
      overflowX: "scroll",
      width: "100%",
      marginTop: "24px",
   },

   emphtyData: {
      alignItems: "center",
      background: COLORS.RED_PRIMARY,
      padding: "20px",
      marginTop: "24px",
      "& h1": {
         margin: "0px",
         color: COLORS.WHITE,
         textTransform: "cammelcase",
         fontSize: "16px",
      },
   },
}));

export { useStyles };
