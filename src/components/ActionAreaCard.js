import * as React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const ActionAreaCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://drive.google.com/drive/folders/150tlVJJZDG0a7f6HJQJRJgCiH54rYU6v"
          alt="behemoth"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Behemoth
          </Typography>
          <Typography variant="body2" color="text.secondary">
            First appeared as a boss in Final Fantasy II. After defeating him,
            Behemoths appear as normal enemies in the forests near Mysidia.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ActionAreaCard;
