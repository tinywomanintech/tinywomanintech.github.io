import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-content">
            <a href="https://www.linkedin.com/in/tiaraannelia/" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none">
              @linkedn
            </a>
            <a href="https://github.com/tinywomanintech" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none">
              @github
            </a>
            <a href="https://gitlab.com/tinywomanintech/" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none">
              @gitlab
            </a>
            <a href="https://twitter.com/tiaraanneliac" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none">
              @twitter
            </a>
            <a href="https://gitlab.com/tinywomanintech" target="_blank" rel="noreferrer" className="nav-item  text-decoration-none">
              @instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
