import Genre from "./Genre"
const Movie = (props)=> {

  return (
    <div className="poster">


      <h1>{props.title}</h1>
      <img src={props.poster} alt="" />
      <p>{props.description}</p>
      <h3>Release Date: {props.releaseDate}</h3>
      <h3>Critic Rating: {props.rating}</h3>
      <p>Critic Votes: {props.voteCount}</p>
      <div className="genre-item">
        {props.genres.map((genre, index) => (
          <Genre key={index} genre={genre.name} />
        ))}
      </div>
    </div>
  )
}