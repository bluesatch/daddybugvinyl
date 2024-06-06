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
                        <nav className="nav justify-content-end justify-content-sm-center">
                            <Link to="/about">about</Link>
                            <Link to="/store">store</Link>
                            <Link to="/apparel">apparel</Link>
                            <Link to="/candle">candles</Link>
                            <Link to='/vinyl'>vinyl</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header