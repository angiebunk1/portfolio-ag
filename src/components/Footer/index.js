import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>
        &copy; 2022 Angie Gustafson
        </h3>
      </div>
      <div className='profile-links'>
        <ul>
        <li>
        <a href='https://github.com/angiebunk1' target='_blank'>Github</a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/angiegustafson/" target='_blank'>LinkedIn</a>
        </li>
        <li>
        <a href="https://angelagustafson.com/" target="_blank">Blog</a>
        </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;