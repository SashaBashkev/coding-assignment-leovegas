import React, { useEffect, useState } from "react";
import { fetchMovieById } from "../../api";
import YoutubePlayer from "./ui/YoutubePlayer.jsx";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../../store/modalSlice.js";
import "./styles.scss";

const ModalPlayer = () => {
  const dispatch = useDispatch();
  const [videoKey, setVideoKey] = useState(null);
  const { isOpen, modalData } = useSelector((state) => state.modal);
  const { onModalClose } = modalSlice.actions;

  const fetchMovieTrailer = async (movieId) => {
    const response = await fetchMovieById(movieId);
    const videos = response?.videos?.results;
    if (videos.length) {
      const trailer = videos.find((v) => v.type === "Trailer");
      setVideoKey(trailer?.key || videos[0]?.key);
    }
  };

  useEffect(() => {
    if (isOpen && modalData) {
      fetchMovieTrailer(modalData);
    } else {
      setVideoKey(null);
    }
  }, [isOpen, modalData]);

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="modal-overlay"
      onClick={() => {
        dispatch(onModalClose());
      }}>
      <div onClick={(e) => e.stopPropagation()} className="modal-box">
        <span
          className="close-icon"
          onClick={() => {
            dispatch(onModalClose());
          }}>
          &times;
        </span>
        {videoKey ? (
          <YoutubePlayer videoKey={videoKey} />
        ) : (
          <h1>Sorry! No trailer available for this movie.</h1>
        )}
      </div>
    </div>
  );
};

export default ModalPlayer;



