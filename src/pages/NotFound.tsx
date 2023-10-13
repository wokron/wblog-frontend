function NotFound({isSmall}: {isSmall: boolean}) {
    return (
        <section className={isSmall ? "hero is-medium" : "hero is-fullheight-with-navbar"}>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 has-text-weight-bold has-text-primary">404</h1>
                    <p className="subtitle has-text-weight-medium"> <span className="has-text-danger">Opps!</span> Page not found.</p>
                    <p className="is-size-6 mb-4">
                        The page you' re looking for doesn' t exist.
                    </p>
                    <a href="/" className="button is-primary">Go Home</a>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
