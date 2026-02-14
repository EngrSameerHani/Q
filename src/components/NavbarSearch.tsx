import React from 'react'

const NavbarSearch = () => {
  return (
    <div className="module-content module-fullscreen module-search-box">
      <div className="pos-vertical-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <form className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder="type words then enter"
                />
                <button></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <a className="module-cancel" href="#">
        <i className="fas fa-times"></i>
      </a>
    </div>
  )
}

export default NavbarSearch
