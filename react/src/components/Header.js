import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="branding text-capitalize text-center text-md-start">
                            <Link to="/" style={{ textDecoration: 'none'}}>
                                daddy bug vinyl...
                                <span className="small fs-6">
                                    (and more)
                                </span>
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <nav className="top-nav">
                            <ul className="nav justify-content-center justify-content-md-end">
                                <li className="nav-item me-2">
                                    <Link 
                                        to="/about" 
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}}
                                    >about</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to="/store" 
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}}
                                    >store</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to="/apparel" 
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}}
                                    >apparel</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to="/candle" 
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}}
                                    >candles</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link 
                                        to='/vinyl' 
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}}
                                    >vinyl</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header