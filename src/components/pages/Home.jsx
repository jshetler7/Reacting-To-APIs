import { useState } from "react";

export default function Home(props) {
  return (
    <main className="container">
      <section className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4 className="card-title">Studio Ghibli API Lab</h4>
              <p className="card-text">Hello there!</p>
            </div>
          </div>
        </div>
        <img src={require("../ghibli.png")} style={{height: '100%', width: '100%'}} />
      </section>
    </main>
  );
}