import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <navbar className="sticky-top">
        <div className="nav-bar">
          <Link to={'/'} className="brand">
            Brand
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Enter Items" />
          </div>
          <Link to={'/cart'} className="cart">
            cart
          </Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter By {'->'}</div>
          <div className="items">No Filter</div>
          <div className="items">Mobiles</div>
          <div className="items">Laptops</div>
          <div className="items">Tablets</div>
          <div className="items">{'=>'}29999</div>
          <div className="items">{'=>'}49999</div>
          <div className="items">{'=>'}69999</div>
          <div className="items">{'=>'}89999</div>
        </div>
      </navbar>
    </>
  );
}
export default Navbar;
