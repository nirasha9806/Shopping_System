import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-blue bg-dark'>
      <Link className='navbar-brand ml-5' href='#'>
        <h1>ABC</h1>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span>
          {' '}
          <i
            className='fa fa-bars'
            aria-hidden='true'
            style={{ color: '#fff' }}
          />
        </span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link text-white ml-5' to='/product'>
              Products <span class='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white ml-5' to='/cart'>
              Cart
            </Link>
          </li>
        </ul>

        <li className='list-inline-item'>
          <Link
            title='logout'
            className='nav-link text-white text-uppercase ml-0'
            to='/'
          >
            {' '}
            &nbsp; <i class='far fa-user'></i>
            <span class='sr-only'>(current)</span>
          </Link>
        </li>
      </div>
    </nav>
  );
}
export default Navbar;
