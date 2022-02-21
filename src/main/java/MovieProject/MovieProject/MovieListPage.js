<ul>
  {data ? (
   data.results.map((movie) => (
     <li key={movie.id}>
       <img src={getImageUrl(movie.poster_path)}
            alt="movie poster"
       />
       <p>{movie.title}</p>
       <p>{movie.vote_average}</p>
	</li>
   ))
  ) : (
  <h1>Loading...</h1>
  )}
</ul>