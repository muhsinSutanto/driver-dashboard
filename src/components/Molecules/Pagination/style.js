import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../const/styles";

const useStyles = makeStyles((theme) => ({
   container: {
      textAlign: "center",
      paddingTop: "40px",
      "& button": {
         color: COLORS.BLACK,
         textTransform: "capitalize",
      },
   },
}));

export { useStyles };
