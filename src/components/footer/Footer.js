import React from "react";

const Footer = () => {
  return (
    <div className="card mt-5">
      <footer className="blockquote-footer">
        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-12">
              <h5>Contact Jermaine</h5>
              <p className="text-center">
                I am available for all your web design needs
              </p>
            </div>
            <div className="col-12 social padding">
              <a
                href="https://www.facebook.com/jermaine.haughton.359"
                target="blank"
              >
                <i className="fab fa-facebook" />
              </a>
              <a href="https://www.instagram.com/swagnvalft/" target="blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com/dread_y" target="blank">
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCFWQRmJZnXsDv0RCYLSksqw"
                target="blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        2019 Jermaine Haughton <cite title="Source Title">dev</cite>
      </footer>
    </div>
  );
};

export default Footer;
