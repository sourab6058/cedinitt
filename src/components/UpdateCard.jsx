import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import updatePng from "../assets/update.png";
import { Button, Link } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function UpdateCard({ text, link, key }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="w-70">
      <Card sx={{ maxWidth: 400 }} key={key}>
        <img
          src={updatePng}
          alt="Image"
          style={{ height: "150px", width: "auto" }}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{ color: "text.primary", fontWeight: "bold" }}
          >
            {text}
          </Typography>
          <div className="m-5">
            <a href={link} target="_blank">
              <Button variant="contained">Know More</Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
