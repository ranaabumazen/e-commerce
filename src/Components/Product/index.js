import {
  Card,
  CardHeader,
  Box,
  CardContent,
  Rating,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProductTitle from "../ProductTitle";
import styles from "./index.module.css";

const Product = (props) => {
  return (
    <div className={`${styles.product}`}>
      <Card sx={{ background: "#F5F5F5" }}>
        <CardHeader
          avatar={<div className={styles.left_icon}>-40%</div>}
          action={
            <div className={styles.actionButtons}>
              <IconButton
                sx={{
                  background: "white",
                  marginBottom: "0.5em",
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton
                sx={{
                  background: "white",
                }}
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </div>
          }
        />

        <CardContent className={styles.product_content}>
          <Box
            className={styles.product_image}
            component="img"
            sx={{
              height: 172,
              width: 152,
            }}
            src={props.image}
          />
        </CardContent>
      </Card>
      <ProductTitle title={props.title} className={styles.product_title} />
      <ProductTitle
        title={`$${props.price}`}
        className={styles.product_price}
      />
      <Box className={styles.rating_box}>
        <Rating
          name="half-rating-read"
          precision={0.5}
          value={props.rating.rate}
          readOnly
        />
        <Box className={styles.rating_count}>({props.rating.count})</Box>
      </Box>
    </div>
  );
};
export default Product;
