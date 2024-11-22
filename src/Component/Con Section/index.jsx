/* eslint-disable react/prop-types */
import Header from "../Header";
const MovieCon = ({ movies, title }) => {
  return (
    <section className="section-0">
      <Header title={title} />
      <div className="con-section">
        {movies.map((movie, index) => (
          <div key={index} className="movie-con">
            <img src={movie.src} alt={movie.title} />
            <div className="con-child">
              <p className="mini-title">{movie.title}</p>
              <p className="mini-rating">{movie.rating} / 5.0</p>
            </div>
            <div className="movie-popup0">
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
        ))}
      </div>
    </section>
  );
};

export default MovieCon;
