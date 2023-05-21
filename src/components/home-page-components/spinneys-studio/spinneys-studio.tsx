import React, { useEffect } from "react";
import "../spinneys-studio/spinneys-studio-styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import 'bootstrap/dist/css/bootstrap.css';
import Videos from "../spinneys-studio/spinneys-studio-videos.json";
import { Offcanvas } from "react-bootstrap";



const SpinneysStudio = () => {
  useEffect(() => {
    const mainVideo = document.getElementById('main-video');
    const mainWidth = document.getElementById('main-video')?.style.width;
    const leftImg = document?.getElementById("main-video-img") as HTMLDivElement;
    const mainOffset = 5400;
    const mainOffset2 = 8000;
    const myFunc = () => {
      if(window?.scrollY > mainOffset && window?.scrollY < mainOffset2) {
        mainVideo?.classList?.add('sticky-video');   
        leftImg.style.left = "0%";
      } else {
        mainVideo?.classList?.remove('sticky-video');
      }
    }
    window.onscroll = function(){
      myFunc()
    }
  }, [])
  
  return (
    <div className="spinneys-studio" id="spinneys-studio">
      <div className="d-flex justify-content-between" id="studio-heading">
        <div className="studio-titles" id="studio-titles">
          <p className="text-left" id="studio-title">Spinneys Studio</p>
        </div>
        <button className="text-center bg-white d-flex justify-content-between" id="studio-view-all" type="button">
          <a id="studio-view-more" className="w-100 d-flex justify-content-evenly text-decoration-none bg-#FFFFFF" href="https://www.spinneys.com/en-ae/catalogue/?selected_facets=is_new_exact%3ATrue&sort_by=boost-value">
            View All
            <img id="view-all-arrow" className="view-all-arrow" alt="view more" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-right-grey.0942813cbb44.svg" />
          </a>
        </button>
      </div>
      <div className="videos" id="videos">
        <div className="main-video" id="main-video">
          <div className="video-overlay" id="video-overlay"></div>
          <img id="main-video-img" className="main-video-img" src="https://prod-spinneys-cdn-new.azureedge.net/media/images/_A7R0282.2e16d0ba.fill-1350x720.jpg" alt="where do spinneys flower come from?" />
          <h3 className="main-video-txt" id="main-video-txt">
            Where do Spinneys flowers come from?
          </h3>
          <div className="actions" id="actions">
            <a href="/" className="play-this1" id="play-this1"
              data-url="https://player.vimeo.com/progressive_redirect/playback/798274487/rendition/720p/file.mp4?loc=external&signature=18e64fb323a4ac50bcf98d3380f2341a4681b50d922979a809ac0f40fb852d5b"
              data-title="Where do Spinneys flowers come from?"
              data-length="08:35"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="41.095" height="41.098" viewBox="0 0 41.095 41.098">
                <g id="Group_589" data-name="Group 589" transform="translate(0.5 0.5)">
                  <path id="Path_361" data-name="Path 361" d="M875.511,6142.447A20.047,20.047,0,1,0,895.56,6122.4,20.049,20.049,0,0,0,875.511,6142.447Z" transform="translate(-875.511 -6122.398)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1" opacity="0.5"></path>
                  <path id="Path_362" data-name="Path 362" d="M882.36,6139.87l9.553-5.962-9.553-5.965Z" transform="translate(-864.969 -6113.862)" fill="#fff"></path>
                </g>
              </svg>
            </a>
            <p className="action-p" id="action-p">
              <span>WATCH NOW</span>  -08:35 MIN
            </p>
          </div>
        </div>
        <ul className="videos-list" id="videos-list">
          {Videos.videos.map((video) => (
            <li key={video.id} className="sub-video" id="sub-video">
              <img className="sub-img" id="sub-img" src={video.src} alt={video.name} />   
              <div className="sub-video-overlay" id="sub-video-overlay">
              </div>
              
              <a href="/" className="play-this2" id="play-this2" data-url={video.url} data-title={video.title}>
                <svg xmlns="http://www.w3.org/2000/svg" width="41.095" height="41.098" viewBox="0 0 41.095 41.098">
                  <g id="Group_589" data-name="Group 589" transform="translate(0.5 0.5)">
                    <path id="Path_361" data-name="Path 361" d="M875.511,6142.447A20.047,20.047,0,1,0,895.56,6122.4,20.049,20.049,0,0,0,875.511,6142.447Z" transform="translate(-875.511 -6122.398)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1" opacity="0.5"></path>
                    <path id="Path_362" data-name="Path 362" d="M882.36,6139.87l9.553-5.962-9.553-5.965Z" transform="translate(-864.969 -6113.862)" fill="#fff"></path>
                  </g>
                </svg>
              </a>
              <div className="video-info" id="video-info">
                <h3 id="video-name" className="video-name"> {video.name} </h3>
                <span id="video-length" className="video-length"> {video.length} MIN</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SpinneysStudio;