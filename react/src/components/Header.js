import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="branding text-capitalize text-sm-center">
                            <Link to="/">
                                daddy bug vinyl...(and more)
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <nav className="top-nav">
                            <ul className="nav justify-content-end">
                                <li className="nav-item me-2">
                                    <Link to="/about">about</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link to="/store">store</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link to="/apparel">apparel</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link to="/candle">candles</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link to='/vinyl'>vinyl</Link>
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