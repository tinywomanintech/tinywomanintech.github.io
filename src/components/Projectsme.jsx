import React from 'react';

export default function Projectsme() {
  return (
    <section className="project">
      <div className="container">
        <div className="project-content d-flex  pt-5 pb-5">
          <h1>Projects</h1>
        </div>
        <div className="project-2">
          <div className="content-2 ">
            <p>My works</p>
          </div>
          <div className="content-2">
            <p>You can see my project here.</p>
          </div>
        </div>
        <div className="project-2">
          <div className="content-2">
            <a href="https://wash-me.herokuapp.com/" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none ">
              <img src="https://i.ibb.co/XkFHqxw/wash-me.png" alt="hero-bg" border="0" />
            </a>
          </div>
          <div className="content-2">
            <h2 className="fw-bold">
              <a href="https://wash-me.herokuapp.com/" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none ">
                Wash me
              </a>
            </h2>
            <p>
              Wash me is a website for a user to use laundry service. After users order the service and select payment method cash or e-wallet, a courier will pick it up at the user's address. Then laundry will be processed. After the
              laundry is finished, a courier will deliver it to the user's address.
            </p>
          </div>
        </div>
        <div className="project-2">
          <div className="content-2">
            <a href="https://lms-skills-adinusa.netlify.app/" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none ">
              <img src="https://i.ibb.co/KwCQNNn/adinusa.png" alt="hero-bg" border="0" />
            </a>
          </div>
          <div className="content-2">
            <h2 className="fw-bold">
              <a href="https://lms-skills.netlify.app" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none ">
                Adinusa
              </a>
            </h2>
            <p>Akademi Digital Nusantara (ADINUSA) is my first freelance app after graduated from glints. I was responsible to clone the web with my own style.</p>
            {/* modal */}

            {/* <div>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
              </button>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* modal */}
          </div>
        </div>
      </div>
    </section>
  );
}
