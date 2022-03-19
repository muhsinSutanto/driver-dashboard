import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   cardsContainer: {
      display: "flex",
      overflowX: "scroll",
      width: "100%",
      marginTop: "24px",
   },
}));

export { useStyles };
