import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../const/styles";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: COLORS.WHITE,
      padding: "20px",
      "& h1": {
         margin: "0px",
         color: COLORS.RED_PRIMARY,
         textTransform: "uppercase",
      },
      "& p": {
         margin: "0px",
         color: COLORS.GREY,
      },
      "& svg:nth-child(0)": {
         color: COLORS.RED_PRIMARY,
      },
      "& button": {
         padding: "15px 18px",
         background: COLORS.RED_PRIMARY,
         marginLeft: "12px",
      },
      "& input:active": {
         border: COLORS.RED_PRIMARY,
      },
      "& button:hover": {
         background: COLORS.RED_PRIMARY,
      },
   },
}));

export { useStyles };
