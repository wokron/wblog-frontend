import Pagination from "./Pagination"

interface CommentProp {
    member: { id: number | null, name: string },
    commenter_name: string,
    article: { id: number, title: string },
    create_time: string
    content: string
    like: number,
    dislike: number,
}


function CommentItem({ comment, showArticle }: { comment: CommentProp, showArticle: boolean }) {
    return (
        <article className="media">
            <div className="media-content">
                <h1 className="mb-2">
                    <strong>{comment.member ? comment.member.name : comment.commenter_name}</strong>
                    {
                        showArticle ? (
                            <span> @ <a className="has-text-black has-text-weight-bold">{comment.article.title}</a></span>
                        ) : (
                            <span> @ {comment.create_time}</span>
                        )
                    }
                </h1>
                <p>
                    {comment.content}
                </p>
                <p className="has-text-right">
                    <a className="has-text-primary-dark">
                        <span className="icon"><i className="fas fa-thumbs-up"></i></span>
                    </a> {comment.like}
                    <a className="has-text-grey">
                        <span className="icon"><i className="fas fa-thumbs-down"></i></span>
                    </a> {comment.dislike}
                </p>
            </div>
        </article>
    )
}


function CommentList({ commentList, showArticle }: { commentList: CommentProp[], showArticle: boolean }) {
    return (
        <>
            {commentList.map(comment => <CommentItem comment={comment} showArticle={showArticle} />)}
        </>
    )
}


function PageComment({ commentList, showArticle, currPage, totalPages }: { commentList: CommentProp[], showArticle: boolean, currPage: number, totalPages: number }) {
    return (
        <>
            <div className="block">
                <CommentList commentList={commentList} showArticle={showArticle} />
            </div>

            <div className="block mt-6">
                <Pagination totalPages={totalPages} currPage={currPage} />
            </div>
        </>
    )
}


function CommentForm() {
    return (
        <form>
            <div className="field">
                <label className="label">昵称</label>
                <input className="input" type="text" />
            </div>
            <div className="field">
                <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
            </div>
            <div className="field is-grouped is-grouped-right">
                <div className="control">
                    <button className="button">发布</button>
                </div>
                <div className="control">
                    <button className="button">取消</button>
                </div>
            </div>
        </form>
    )
}


export { CommentList, PageComment, CommentForm };
