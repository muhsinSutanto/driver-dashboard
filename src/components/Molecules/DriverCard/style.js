import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../const/styles";

const useStyles = makeStyles((theme) => ({
   cardContainer: {
      minWidth: "300px",
      borderRadius: "8px",
      marginRight: "24px",
      background: COLORS.WHITE,
      "& p": {
         color: COLORS.GREY,
         fontSize: "14px",
         "& span": {
            color: COLORS.RED_PRIMARY,
         },
      },
      "& div:nth-child(1)": {
         display: "flex",
         justifyContent: "space-between",
         borderBottom: `2px solid ${COLORS.GREY}`,
         padding: "12px 16px 0px 16px",
         alignItem: "center",
      },

      "& div:nth-child(2)": {
         padding: "20px 16px 0px 16px",
         "& img": {
            borderRadius: "50%",
            width: "80px",
         },
         "& h1": {
            margin: "0px",
            fontSize: "12px",
            color: COLORS.GREY,
         },
         "& p": {
            margin: "0px",
            fontSize: "14px",
            color: COLORS.BLACK,
            paddingBottom: "12px",
         },
      },
   },
}));

export { useStyles };
