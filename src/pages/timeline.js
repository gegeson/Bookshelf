import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { Event } from "../config";

const Icon = (category) => {
  if (category === "job") {
    return (
      <TimelineDot color="success">
        <LocationCityIcon />
      </TimelineDot>
    );
  } else if (category === "study") {
    return (
      <TimelineDot color="primary">
        <SchoolIcon />
      </TimelineDot>
    );
  } else if (category === "play") {
    return (
      <TimelineDot color="primary" variant="outlined">
        <Brightness7Icon />
      </TimelineDot>
    );
  } else {
    return (
      <TimelineDot>
        <EventIcon />
      </TimelineDot>
    );
  }
};

export default function Timelines() {
  return (
    // 交互にするときはposition="alternate"を追加
    <Timeline>
      {Event.map(({ title, describe, time, category, url, twitter }, i) => (
        <TimelineItem key={i}>
          {/* <Grid item md={3} xs={5.5}> */}
          <TimelineOppositeContent
            sx={{ my: "auto" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {time}
          </TimelineOppositeContent>
          {/* </Grid> */}
          {/* <Grid item md={1} xs={1}> */}
          <TimelineSeparator>
            <TimelineConnector />
            {Icon(category)}
            <TimelineConnector />
          </TimelineSeparator>
          {/* </Grid> */}
          <Grid item md={9} xs={5.5}>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                component="span"
                className="timeline-title"
              >
                {title}
              </Typography>
              <Typography>{describe}</Typography>
              <Typography>
                <Button href={url} className="">
                  Learn more
                </Button>
              </Typography>
            </TimelineContent>
          </Grid>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
