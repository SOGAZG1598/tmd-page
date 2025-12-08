import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Note the change here
import ScrollToTop from "./ScrolltToTop.js";
import Home from "./pages/Home";
import News from "./pages/News";
import Channels from "./pages/Channels";
import Videos from "./pages/Videos";
import Wiki from "./pages/Wiki";
import Store from "./pages/Store";
import SocialMedia from "./pages/SocialMedia";
import VideoPlayer from "./pages/VideoPlayer";
import episodes from "./data/episodes.js"
import DMB from "./data/DMB.js"
import news from './data/news.js'
import LB from "./data/LB.js";
import CW from "./data/CW.js";
import Creepys from "./data/Creepys.js";
import PD from "./data/PD.js";
import Lost from "./data/lost.js";
import Trailers from "./data/trailers.js";
import Jueguemos from "./data/Jueguemos.js";
import Jueguemos2 from "./data/Jueguemos2.js";
import Extras from "./data/extra.js";
import New from "./data/New.js";
import Next from "./data/Next.js";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes> {/* Use Routes instead of Switch */}
      
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News articles={news} />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/videos" element={<Videos episodesData={episodes} />} />
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/store" element={<Store />} />
      <Route path="/socialmedia" element={<SocialMedia />} />
      <Route path="/videos/DMB/:episodeId" element={<VideoPlayer episodesData={DMB} />} />
      <Route path="/videos/LB/:episodeId" element={<VideoPlayer episodesData={LB} />} />
      <Route path="/videos/CW/:episodeId" element={<VideoPlayer episodesData={CW} />} />
      <Route path="/videos/Creepy/:episodeId" element={<VideoPlayer episodesData={Creepys} />} />
      <Route path="/videos/PD/:episodeId" element={<VideoPlayer episodesData={PD} />} />
      <Route path="/videos/Jueguemos/:episodeId" element={<VideoPlayer episodesData={Jueguemos} />} />
      <Route path="/videos/Jueguemos2/:episodeId" element={<VideoPlayer episodesData={Jueguemos2} />} />
      <Route path="/videos/Extra/:episodeId" element={<VideoPlayer episodesData={Extras} />} />
      <Route path="/videos/Lost/:episodeId" element={<VideoPlayer episodesData={Lost} />} />
      <Route path="/videos/Trailers/:episodeId" element={<VideoPlayer episodesData={Trailers} />} />
      <Route path="/videos/New/:episodeId" element={<VideoPlayer episodesData={New} />} />
      <Route path="/videos/Next/:episodeId" element={<VideoPlayer episodesData={Next} />} />
      <Route path="/videos/:episodeId" element={<VideoPlayer episodesData={episodes} />} />
      <Route path="/videos/-1" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);