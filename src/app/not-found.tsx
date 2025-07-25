import Link from "next/link";

export default function NotFound() {
    return (
        <div className="bg-purple">
            <div className="stars">
                <div className="custom-navbar">
                    <div className="navbar-links">
                        <ul>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn-request"
                                    href="/">
                                    Kembali ke Beranda
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="central-body">
                    <img
                        className="image-404"
                        src="http://salehriaz.com/404Page/img/404.svg"
                        width="300px"
                    />
                </div>
                <div className="objects">
                    <img
                        className="object_rocket"
                        src="http://salehriaz.com/404Page/img/rocket.svg"
                        width="40px"
                    />
                    <div className="earth-moon">
                        <img
                            className="object_earth"
                            src="http://salehriaz.com/404Page/img/earth.svg"
                            width="100px"
                        />
                        <img
                            className="object_moon"
                            src="http://salehriaz.com/404Page/img/moon.svg"
                            width="80px"
                        />
                    </div>
                    <div className="box_astronaut">
                        <img
                            className="object_astronaut"
                            src="http://salehriaz.com/404Page/img/astronaut.svg"
                            width="140px"
                        />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                </div>
            </div>
        </div>
    )
}
