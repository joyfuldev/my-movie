import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: 10px;
  .overlay {
    opacity: 0;
    background: rgba(43, 41, 41, 0.9);
    h1 {
      margin: 0px;
    }
  }
  &:hover .overlay {
    opacity: 1;
  }
`;

const MovieCard = ({ movie, width }) => {
  const { movieGenreList } = useSelector((state) => state.movies);
  return (
    <Wrapper
      style={{
        height: "100%",
        width,
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path}` +
          ")",
        backgroundSize: "cover",
      }}
    >
      <div style={{ height: "100%", width }} className="overlay">
        <h1>{movie.title}</h1>
        <div>
          {movie.genre_ids.map((id, index) => (
            <span key={index}>
              {movieGenreList.find((item) => item.id === id).name}
            </span>
          ))}
        </div>
        <div>
          <span>{movie.vote_average}</span>
          <span>{movie.adult ? "청불" : null}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default MovieCard;