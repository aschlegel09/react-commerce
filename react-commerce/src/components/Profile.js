import React from "react";

function Profile() {
    return (
        <div>
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Link 1</a>
                    </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    Products
                    </h6>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Link 2</a>
                    </li>
                </ul>
            </div>
            <div className="content">
                Dummy
                </div>
        </div>
    )
};

export default Profile;