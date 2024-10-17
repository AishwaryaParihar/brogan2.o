import React from 'react'

const SocialMedia = () => {
  return (
    <div className="social-media-link d-flex justify-content-between mt-4 buy-it">
    <a href="" className="nolink">
      <span>
        <i className="fa-brands fa-facebook"></i> Share
      </span>
    </a>
    <a href="" className="nolink">
      {" "}
      <span>
        <i className="fa-brands fa-x-twitter"></i> Tweet
      </span>
    </a>
    <a href="" className="nolink">
      <span>
        {" "}
        <i className="fa-brands fa-pinterest"></i> Pin it
      </span>
    </a>
    <a href="" className="nolink">
      {" "}
      <span>
        {" "}
        <i className="fa-solid fa-envelope"></i> Mail
      </span>
    </a>
    <a href="" className="nolink">
      <span>
        {" "}
        <i className="fa-brands fa-whatsapp"></i> Whatsapp
      </span>
    </a>
  </div>
  )
}

export default SocialMedia