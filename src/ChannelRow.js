import { Avatar } from "@mui/material";
import React from "react";
import "./ChannelRow.css";
// import VerifiedIcon from "@mui/icons-material";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" src={image} alt={channel} />

      <div className="channelRow_text">
        <h4>
          {channel}
          {/* {verified && <VerifiedIcon />} */}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
