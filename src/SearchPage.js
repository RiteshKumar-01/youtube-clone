import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo"
        Channel="Clever Programmer"
        verified
        subs="1.24M"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />

      <hr />

      <VideoRow
        views="6.3K views"
        subs="2.4M"
        description="Yup. Holy crap. I didn't realize I spoke for 27 minutes ."
        timestamp="2 days ago"
        channel="Clever Programmer"
        title="Quitting the YouTube content treadmill."
        image="https://i.ytimg.com/vi/qBVOjL7wMBw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaU6GNbPpE3YfoenRKUXuDF345Aw"
      />
    </div>
  );
};
