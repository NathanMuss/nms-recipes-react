import React from 'react';

const NavBar = (props) => {
    return (
        <div>
            <div className="navbar-fixed ">
                <nav className="white">
                    <div className="nav-wrapper">
                        <div className="brand-logo red-text">No Man's Recipes</div>
                        <div className="row center">
                            <div className="col offset-s3 s6">
                                <form onSubmit={(e) => props.handleSearch(e, document.getElementById("query").value)}>
                                    <input type="text" placeholder="Condensed Carbon" className="center" id="query"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
