import $ from 'jquery';

import './navbar.scss';

const loadNavbar = () => {
  const newString = `
    <nav>
      <a href="#" class="brand-logo">Quidditch Roster</a>
      <ul class="nav-links">
        <li class="active">
          <a id="home-link">Home</a>
        </li>
      </ul>
    </nav>
  `;
  $('#nav-container').html(newString);
};

export default loadNavbar;
