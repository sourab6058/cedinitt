import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid2 from "@mui/material/Grid2";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="p-5 mt-2"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={5}>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Center for Entrepreneurship Development and Incubation (CEDI)
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="max-w-100"
            >
              CEO CENTER FOR ENTREPRENEURSHIP DEVELOPMENT AND INCUBATION Old
              Library Building National Institute of Technology
              Tiruchirappali-620015
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: cedi@nitt.edu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ph: 0431 - 2504760, 9677682106
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <FaFacebookSquare />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <FaInstagramSquare />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <FaTwitter />
            </Link>
          </Grid2>
        </Grid2>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://cedinitt.com/">
              cedinitt
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
