import { useState, useEffect } from "react";

export default function People(props) {

    const [people, setPeople] = useState([]);

    useEffect(() => {
      (async () => {
        const res = await fetch("https://ghibliapi.herokuapp.com/people");
        const allPeople = await res.json();
        setPeople(allPeople);
      })();
    }, []);
  
    return (
        <>
      <div className="col-12 col-md-6">
        <div className="card shadow">
          <div className="card-body text-center">
            <h4 className="card-title">People</h4>
          </div>
        </div>
      </div>

      <main className="row">
        {people.map((person) => (
          <div
            className="col-12 col-md-4"
            key={`user-card-${person.id}`}
          >
            <div className="card shadow my-3">
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-subtitle text-muted">
                  Age: {person.age}
                </p>
                <p className="card-subtitle text-muted">
                  Gender: {person.gender}
                </p>
                <p className="card-subtitle text-muted">
                  Hair Color: {person.hair_color}
                </p>
                <p className="card-text mb-4">{person.description}</p>
              </div>
              <a href={person.url} target="blank" className="p-3" >API Resource Link</a>
            </div>
          </div>
        ))}
      </main>
      </>
    );
  }
  