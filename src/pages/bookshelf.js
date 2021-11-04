import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import { Book } from "../config";
import "../css/bookshelf.scss";

const card = ({ title, time, description, image, tag }) => (
  <Card
    // variant="outlined"
    sx={{ maxWidth: 345 }}
    color="dark"
    className="product-card"
  >
    <CardMedia
      component="img"
      alt={title}
      height="200"
      src={`${process.env.PUBLIC_URL}/images/bookshelf/${image}`}
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="bookshelf-title"
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        // color="text.secondary"
        component="div"
      >
        {description}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
        <Stack direction="row" spacing={1}>
          {tag.map((tag, i) => (
            <Chip key={i} label={tag} />
          ))}
        </Stack>
      </Typography>
      <Typography gutterBottom variant="body3" component="div">
        {"date: " + time}
      </Typography>
    </CardContent>
  </Card>
);

export default function OutlinedCard() {
  return (
    <>
      {/* <h1 className="">Bookshelf</h1> */}
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
