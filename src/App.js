function App() {
  return (
    <main>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">tripaider</a>
        </div>
      </nav>
      <section className="container text-center">
        <article className="pt-5 row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Coming Soon</h1>
            <p>
              An awesome new community for travellers is coming very soon. Enter your email to request an early
              invitation!
            </p>
            <p className="fst-italic">We are nearly complete...</p>
            <form className="row g-3 mb-3">
              <div className="input-group">
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                <button type="submit" className="btn btn-primary">Notify Me</button>
              </div>
            </form>
            <p>We promise to never spam you.</p>
          </div>
        </article>

        <div className="elfsight-app-218d07be-39cd-4196-823b-face916f1839" data-elfsight-app-lazy></div>
      </section>
      <footer className="container text-center mt-5">
        <ul>
          <li>
            <a target="_blank" href="https://www.facebook.com/tripaider">facebook</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
