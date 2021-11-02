import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Book } from "../config";

const card = ({ title, time, discription, images }) => (
  <Card
    // variant="outlined"
    sx={{ maxWidth: 345 }}
    color="dark"
    className="product-card"
  >
    <CardMedia
      component="img"
      alt={title}
      height="140"
      src={"images/" + images}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        color="text.secondary"
        component="div"
      >
        {discription}
      </Typography>
    </CardContent>
  </Card>
);

export default function OutlinedCard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Book.map((book, i) => (
            <Grid item xs={4} sm={4} md={4} key={i}>
              {card(book)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
