import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Cindy Bell"
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Guy Oved"
            src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Steve Jhon"
            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Christina Papsulis"
            src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Daniel Choprov"
            src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Amit Klayn"
            src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Vladimir Artumyov"
            src="https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Christian Mbape"
            src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2070028/pexels-photo-2070028.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
