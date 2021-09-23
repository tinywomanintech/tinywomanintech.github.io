import React from 'react';

export default function Contactme() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content d-flex  pt-5 pb-5">
          <h1>Contact</h1>
        </div>
        <div className="contact-2">
          <div className="content-2 ">
            <p>My Contacts</p>
          </div>
          <div className="content-2">
            <p>My social Networks</p>
          </div>
        </div>
        <div className="contact-2">
          <div className="content-2">
            <p>&nbsp;</p>
          </div>
          <div className="content-2">
            <p>Here you can write to me wherever it is convenient for you and I will try to answer you as soon as possible. I hope our cooperation will be fruitful.</p>
            <p>
              <a href="mailto:tiarannelia@gmail.com?subject = Feedback&body = Message" className="nav-item  text-decoration-none">
                tiarannelia@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
