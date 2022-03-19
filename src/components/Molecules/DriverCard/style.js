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
   },

   bottomCard: {
      padding: "20px 16px 12px 16px",
      "& img": {
         borderRadius: "50%",
         width: "100px",
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

   "@media (max-width: 450px)": {
      cardContainer: {
         marginRight: "0px",
         marginBottom: "20px",
      },

      bottomCard: {
         display: "flex",
         justifyContent: "space-around",
         "& img": {
            width: "100px",
            height: "100px",
         },
      },

      remove: {
         display: "none",
      },
   },
}));

export { useStyles };
