import React from 'react';
import { Link } from 'react-router-dom';

export default function Structure() {
  return (
    <section className="structure">
      <div className="container">
        <div className="structure-content">
          <div className="content">
            <p>About the project</p>
          </div>
          <div className="content">
            <p>Hello everyone, here I have posted the design concept of my first portfolio site. In this project you will see the structure of the site and all its main pages</p>
          </div>
        </div>
        <div className="structure-content">
          <div className="content">
            <p>Site structure</p>
          </div>
          <div className="content-2">
            <div id="my-div">
              <Link to="/about" className="fill-div">
                About
              </Link>
            </div>
            <div id="my-div">
              <Link to="/projects" className="fill-div">
                Projects
              </Link>
            </div>
            <div id="my-div">
              <Link to="/blog" className="fill-div">
                Blog
              </Link>
            </div>
            <div id="my-div">
              <Link to="/contacts" className="fill-div">
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
