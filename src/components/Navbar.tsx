function Navbar({ hasLogin }: {hasLogin: boolean}) {
    return (
        <nav className="navbar is-fixed-top has-shadow is-transparent" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            <span className="icon"><i className="fas fa-home" aria-hidden="true"></i></span>
                            <strong>Home</strong>
                        </a>

                        {
                            hasLogin &&
                            (
                                <a className="navbar-item">
                                    <span className="icon"><i className="fas fa-user" aria-hidden="true"></i></span>
                                    <strong>Personal</strong>
                                </a>
                            )
                        }

                        <a className="navbar-item">
                            <span className="icon"><i className="fas fa-circle-info" aria-hidden="true"></i></span>
                            <strong>About</strong>
                        </a>
                        <div className="navbar-item pl-6">
                            <div className="field has-addons">
                                <div className="control has-icons-left">
                                    <input className="input is-small is-rounded is-primary" type="text" placeholder="搜索关键字" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>
                                <div className="control">
                                    <a className="button is-small is-rounded is-primary"><strong>Search</strong></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {
                                hasLogin ? (
                                    <div className="buttons">

                                        <a className="button is-primary">
                                            <span className="icon"><i className="fas fa-plus" aria-hidden="true"></i></span>
                                            <strong>New Member</strong>
                                        </a>

                                        <a className="button is-danger">
                                            <span className="icon"><i className="fas fa-right-from-bracket" aria-hidden="true"></i></span>
                                            <strong>Log out</strong>
                                        </a>
                                    </div>
                                ) : (
                                    <a className="button is-primary">
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
    )
}

export default Navbar;
