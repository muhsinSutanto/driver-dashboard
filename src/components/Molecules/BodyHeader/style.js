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

   "@media (max-width: 450px)": {
      container: {
         flexFlow: "column",
         alignItems: "flex-start",
         "& h1": {
            fontSize: "20px",
         },
         "& div:nth-child(2)": {
            marginTop: "24px",
         },
         "& p": {
            fontSize: "13px",
         },
         "& button": {
            marginLeft: "0px",
            width: "100%",
            padding: "15px 0px",
         },
      },

      inputField: {
         width: "100%",
         marginBottom: "18px",
      },
   },
}));

export { useStyles };
