import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
  },
  gridList: {
    flexWrap: "nowrap",
    alignContent: "center",
  },
  weather__icon: {
    width: 60,
    height: 60,
    top: 0,
    transform: "translateY(0%)",
    left: 0,
  },
  day: {
    textAlign: "center",
    border: "none",
    minWidth: "185px",
  },
  info: {
    fontSize: 21,
    fontWeight: "bold",
  },
}));

function Weekly({ weekData }) {
  const classes = useStyles();

  return (
    <CardMedia className={classes.root}>
      <ImageList className={classes.gridList} rowHeight="auto" gap={4}>
        {weekData.map((data) => (
          <ImageListItem key={data.key} cols={0.5} className={classes.day}>
            {data.key === 0 ? (
              <Typography className={classes.info} gutterBottom color="error">
                Today
              </Typography>
            ) : (
              <Typography className={classes.info} gutterBottom color="error">
                {data.day}
              </Typography>
            )}

            <img
              src={`https://openweathermap.org/img/w/${data.icon}.png`}
              alt={data.icon}
              className={classes.weather__icon}
            />
            <Typography gutterBottom className={classes.info}>
              {data.lTemp}°C - {data.hTemp}°C
            </Typography>
            <Typography variant="h6" gutterBottom>
              {data.main},
            </Typography>
            <h4 style={{ fontWeight: "bold", paddingBottom: "10px" }}>
              {data.desc}
            </h4>
          </ImageListItem>
        ))}
      </ImageList>
    </CardMedia>
  );
}

export default Weekly;
