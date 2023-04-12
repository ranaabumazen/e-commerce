import { Typography } from "@mui/material";

const ProductTitle = (props) => {
  return (
    <Typography mt={2} {...props}>
      {props.title}
    </Typography>
  );
};
export default ProductTitle;