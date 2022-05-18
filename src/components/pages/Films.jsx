import { useState, useEffect } from "react";

export default function Films(props) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/films");
      const allFilms = await res.json();
      setFilms(allFilms);
    })();
  }, []);

  return (
    <>
      <div className="col-12 col-md-6 mb-5">
        <div className="card shadow">
          <div className="card-body text-center">
            <h2 className="card-title">Films</h2>
          </div>
        </div>
      </div>

      <main className="row">
        {films.map((film) => (
          <div
            className="col-md-6 d-flex align-items-stretch"
            key={`user-card-${film.id}`}
          >
            <div className="card shadow my-3">
              <div className="card-body d-flex flex-column">
              <ul className="list-group list-group-flush">
                <h5 className="card-title list-group-item">{film.title}</h5>
                <p className="card-subtitle text-muted list-group-item">
                  Released: {film.release_date}
                </p>
                <p className="card-subtitle text-muted list-group-item">
                  Directed by: {film.director}
                </p>
                <p className="card-subtitle text-muted list-group-item">
                  Rotten Tomato Score: {film.rt_score}
                </p>
                <p className="card-text mb-4 list-group-item">{film.description}</p>
                </ul>
              </div>
              <a href={film.url} target="blank" className="p-3" >API Resource Link</a>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}