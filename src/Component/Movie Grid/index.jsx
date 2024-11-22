/* eslint-disable react/prop-types */
import "./style.css";

const Moviegrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <>
          <div key={index} className="movie-gallery">
            <img src={movie.src} alt={movie.title} className="movie-poster" />
            <div className="movie-popup">
              <img src={movie.hover} alt={movie.title} className="pop-image" />
              <div className="pop-desc">
                <div className="icon-pop">
                  <span className="play-btn">⏵</span>
                  <span className="checked-btn">✓</span>
                  <span className="dropdown-btn">˅</span>
                </div>
                <div>
                  <span className="movie-rate">{movie.rate}</span>
                  <span className="movie-eps">{movie.episodes}</span>
                </div>
                <span className="movie-genre">
                  {movie.genres.map((genre, index) => (
                    <>
                      <span key={index} className="genres-item">
                        {genre}
                      </span>
                      <span>
                        {index < movie.genres.length - 1 && (
                          <span className="dot">•</span>
                        )}
                      </span>
                    </>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Moviegrid;
