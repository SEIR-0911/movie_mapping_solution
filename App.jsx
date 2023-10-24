import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  <div>
      <h1 className="title">Movie Mapping</h1>

      <div className="movie-grid">

          {movieArray.map((movie, index) => (
          <div className="movie-item" key={index}>
            <Movie 
              title={movie.title}
              poster={movie.poster_path}
              description={movie.overview}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              voteCount={movie.vote_count}
              genres={movie.genres}
            />
          </div>
          ))}
      </div>
    </div>
}
