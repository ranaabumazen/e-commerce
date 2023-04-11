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
    const obj = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    };
    return (
     
        <div className={styles.product}>
          <Card 
      sx={{background:'#F5F5F5'}}
          >
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
                src={obj.image}
              />
            </CardContent>
          </Card>
          <ProductTitle title={obj.title} 
          className={styles.product_title} />
          <ProductTitle
            title={`$${obj.price}`}
            className={styles.product_price}
          />
          <Box className={styles.rating_box}>
            <Rating 
            name="half-rating-read" 
            precision={0.5}
            value={obj.rating.rate} 
            readOnly />
            <Box 
            className={styles.rating_count}>
              ({obj.rating.count})</Box>
          </Box>
        </div>
  
    );
  };
  export default Product;
  