import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdAddIcCall } from "react-icons/md";
import { BsTwitter, BsInstagram, BsGoogle, BsLinkedin } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import "./Footer.css";
import axios from "axios";

// const useStyle = makeStyle((theme) => ({

// }))
const Footer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://petromax-assign-backend.vercel.app/content")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const classes = useStyle()
  return (
    <Grid className="footer" container spacing={1}>
      <Grid className="animate__animated  animate__backInUp" item xs={4}>
        <Typography textAlign={"left"} lineHeight={"60px"} variant="h4">
          Get In Touch
        </Typography>
        <Grid
          container
          direction={"row"}
          lineHeight={"60px"}
          justifyContent="flex-start"
          gap={3}
        >
          <Grid item>
            <a href={data.facebook}>
              <FaFacebook size={25} />
            </a>
          </Grid>
          <Grid item>
            <a href={data.twitter}>
              <BsTwitter size={25} />
            </a>
          </Grid>
          <Grid item>
            <a href={data.instagram}>
              {" "}
              <BsInstagram size={25} />
            </a>
          </Grid>
          <Grid item>
            <a href={data.google}>
              {" "}
              <BsGoogle size={25} />
            </a>
          </Grid>
          <Grid item>
            <a href={data.linkedin}>
              {" "}
              <BsLinkedin size={25} />
            </a>
          </Grid>
        </Grid>
        <Typography>Holisticly unleash clients-centric experties.</Typography>
        <List sx={{ ml: -3 }}>
          <ListItemButton>
            <ListItemIcon>
              <MdLocationOn color={"white"} size={25} />
            </ListItemIcon>
            <ListItemText primary="Randualas, ID" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MdEmail color={"white"} size={25} />
            </ListItemIcon>
            <ListItemText primary="marketing@paras.org" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MdAddIcCall color={"white"} size={25} />
            </ListItemIcon>
            <ListItemText primary="+62-123-5469-2011" />
          </ListItemButton>
        </List>
      </Grid>
      <Grid className="animate__animated  animate__backInUp" item xs={3}>
        <Typography variant="h4" lineHeight={"60px"}>
          Services
        </Typography>
        <List>
          <ListItemText sx={{ mt: 1 }} primary="Our Story" />
          <ListItemText sx={{ mt: 1 }} primary="Shop Our Insta" />
          <ListItemText sx={{ mt: 1 }} primary="Magazine" />
          <ListItemText sx={{ mt: 1 }} primary="Contact" />
        </List>
      </Grid>
      <Grid className="animate__animated  animate__backInUp" item xs={2}>
        <Typography variant="h4" lineHeight={"60px"}>
          About Us
        </Typography>
        <List>
          <ListItemText primary="Help & FAQ" />
          <ListItemText sx={{ mt: 1 }} primary="Shopping Infomation" />
          <ListItemText sx={{ mt: 1 }} primary="return & Refund" />
          <ListItemText sx={{ mt: 1 }} primary="Content Marketing" />
          <ListItemText sx={{ mt: 1 }} primary="International Order" />
        </List>
      </Grid>
      <Grid className="animate__animated  animate__backInUp" item xs={3}>
        <Typography variant="h4" lineHeight={"60px"}>
          Newsletter
        </Typography>

        <Typography>
          Rapidiously pursue vertical informediries with out-of-the-box{" "}
        </Typography>

        <TextField
          className="inputtext"
          sx={{ mt: 2 }}
          size="small"
          placeholder="Your Email"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <FiSend />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
