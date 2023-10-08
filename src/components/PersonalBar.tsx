enum CurrentPersonalPage {
    Article = "article",
    Comment = "comment",
    Info = "info",
}

function PersonalBar({ isPrivate, currPage }: { isPrivate: boolean, currPage: CurrentPersonalPage }) {
    return (
        <nav className="level">
            <div className="level-left">
                <div className="level-item">
                    <a className={currPage == CurrentPersonalPage.Article ? "has-text-primary" : "has-text-black"}>
                        <span className="icon">
                            <i className="fas fa-book"></i>
                        </span>个人文章
                    </a>
                </div>
                <div className="level-item"> · </div>
                <div className="level-item">
                    <a className={currPage == CurrentPersonalPage.Comment ? "has-text-primary" : "has-text-black"}>
                        <span className="icon">
                            <i className="fas fa-comment"></i>
                        </span>我的评论
                    </a>
                </div>
                {isPrivate && <div className="level-item"> · </div>}
                {isPrivate && (
                    <div className="level-item">
                        <a className={currPage == CurrentPersonalPage.Info ? "has-text-primary" : "has-text-black"}>
                            <span className="icon">
                                <i className="fas fa-gear"></i>
                            </span>个人资料
                        </a>
                    </div>
                )}
            </div>

            <div className="level-right">
                {isPrivate && (
                    <div className="level-item">
                        <a className="button is-info is-small">
                            <span className="icon"><i className="fas fa-pen" aria-hidden="true"></i></span>
                            <strong>Write Article</strong>
                        </a>
                    </div>
                )}
            </div>
        </nav>

    )
}

export {CurrentPersonalPage, PersonalBar};
