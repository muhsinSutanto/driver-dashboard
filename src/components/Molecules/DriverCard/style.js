import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../const/styles";

const useStyles = makeStyles((theme) => ({
   cardContainer: {
      minWidth: "300px",
      padding: "16px 20px",
      borderRadius: "8px",
      marginRight: "24px",
      background: COLORS.WHITE,
   },
}));

export { useStyles };
