import { Link, NavLink } from "react-router";
import { useParams } from "react-router";

export default function Header() {

    const {id} = useParams();
    return (
        <header className="sticky top-0 z-50 shadow">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 ml-2"
                        >
                            Get started
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:w-auto lg:order-1">
                        <ul className="flex space-x-8 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 ${isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 ${isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 ${isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/git/samee`}
                                    className={({ isActive }) =>
                                        `block py-2 ${isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } hover:text-orange-700`
                                    }
                                >
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
