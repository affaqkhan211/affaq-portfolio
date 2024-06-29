import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <img src="/images/logo.png" alt="" style={{ height: "90px", width: "120px" }} />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                    <form class="d-flex" role="search">
                        <a style={{color : "black"}} href="https://www.instagram.com/affaqkhan020/"> <i class="fa fa-instagram p-2" style={{ fontSize: "24px" }}></i></a>
                        <a style={{color : "black"}} href="https://www.linkedin.com/in/affaq-khan-a4b37b219/"> <i class="fa fa-linkedin p-2" style={{ fontSize: "24px" }}></i></a>
                        <a style={{color : "black"}} href="https://www.facebook.com/affaq.khan.129142"> <i class="fa fa-facebook-f p-2" style={{ fontSize: "24px" }}></i></a>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar