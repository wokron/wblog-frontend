import { useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

enum NavModal{
    NONE,
    LOGIN,
    REGISTER,
}

function Navbar({ hasLogin }: { hasLogin: boolean }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const keyWordsInQuery = searchParams.get("key_words") ? String(searchParams.get("key_words")) : "";
    const [keyWords, setKeyWords] = useState(keyWordsInQuery);
    const [currModal, setCurrModal] = useState(NavModal.NONE);

    function handleSearchClick() {
        if (location.pathname == "/") {
            navigate(`/search?key_words=${keyWords}`);
        } else {
            console.log({ ...searchParams });
        }
    }

    function handleSearchInputChange(value: string) {
        setKeyWords(value);
    }

    return (
        <>
            <nav className="navbar is-fixed-top has-shadow is-transparent" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>

                        <a
                            role="button"
                            className="navbar-burger burger"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarHeader"
                            onClick={() => {
                                var burger = document.querySelector('.burger')
                                var nav = document.querySelector('#navbarHeader')
                                burger?.classList.toggle('is-active')
                                nav?.classList.toggle('is-active')
                            }}
                        >
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    </div>

                    <div id="navbarHeader" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">
                                <span className="icon"><i className="fas fa-home" aria-hidden="true"></i></span>
                                <strong>Home</strong>
                            </Link>

                            {
                                hasLogin &&
                                (
                                    <Link to="/personal/me" className="navbar-item">
                                        <span className="icon"><i className="fas fa-user" aria-hidden="true"></i></span>
                                        <strong>Personal</strong>
                                    </Link>
                                )
                            }

                            <a className="navbar-item">
                                <span className="icon"><i className="fas fa-circle-info" aria-hidden="true"></i></span>
                                <strong>About</strong>
                            </a>
                            <div className="navbar-item pl-6">
                                <div className="field has-addons">
                                    <div className="control has-icons-left">
                                        <input className="input is-small is-rounded is-primary" type="text" placeholder="搜索关键字" defaultValue={keyWordsInQuery} onChange={(e) => handleSearchInputChange(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <div className="control">
                                        <a className="button is-small is-rounded is-primary" onClick={handleSearchClick}><strong>Search</strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                {
                                    hasLogin ? (
                                        <div className="buttons">

                                            <a className="button is-primary" onClick={() => setCurrModal(NavModal.REGISTER)}>
                                                <span className="icon"><i className="fas fa-plus" aria-hidden="true"></i></span>
                                                <strong>New Member</strong>
                                            </a>

                                            <a className="button is-danger">
                                                <span className="icon"><i className="fas fa-right-from-bracket" aria-hidden="true"></i></span>
                                                <strong>Log out</strong>
                                            </a>
                                        </div>
                                    ) : (
                                        <a className="button is-primary" onClick={() => setCurrModal(NavModal.LOGIN)}>
                                            <span className="icon"><i className="fas fa-right-to-bracket" aria-hidden="true"></i></span>
                                            <strong>Log in</strong>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={currModal == NavModal.LOGIN ? "modal is-active" : "modal"}>
                <div className="modal-background" onClick={() => setCurrModal(NavModal.NONE)}></div>
                <div className="modal-content">
                    <div className="box">
                        <p className="has-text-centered">
                            <h1 className="title">Login</h1>
                        </p>
                        <p>
                            <Login />
                        </p>
                    </div>
                </div>
            </div>

            <div className={currModal == NavModal.REGISTER ? "modal is-active" : "modal"}>
                <div className="modal-background" onClick={() => setCurrModal(NavModal.NONE)}></div>
                <div className="modal-content">
                    <div className="box">
                        <p className="has-text-centered">
                            <h1 className="title">Add New Member</h1>
                        </p>
                        <p>
                            <Register />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
