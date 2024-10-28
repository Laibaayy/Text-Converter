import React from 'react'

const Navbar = (props) => {


    return (
        <div >
            <nav className={`navbar navbar-expand-lg  navbar-${props.mystyle} bg-${props.mystyle}`}>
                <div className="container-fluid" >
                    <a className="navbar-brand" href="/" >TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"  >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" >About</a>
                            </li>
                        </ul>
                        <div>
                            <button type='button' className='btn btn-primary' onClick={props.modehandler}>{props.text}</button>

                        </div>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Navbar