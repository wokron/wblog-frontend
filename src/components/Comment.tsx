import { Link } from "react-router-dom"
import Pagination from "./Pagination"

interface CommentProp {
    member: { id: number, name: string } | null,
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
                    {
                        comment.member ? (
                            <Link to={`/personal/${comment.member.id}`} className="has-text-black has-text-weight-bold">{comment.member.name}</Link>
                        ) : (
                            <span className="has-text-black has-text-weight-bold">{comment.commenter_name}</span>
                        )
                    }
                    {
                        showArticle ? (
                            <span> @ <Link to={`/article/${comment.article.id}`} className="has-text-black has-text-weight-bold">{comment.article.title}</Link></span>
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


function PageComment({ commentList, showArticle, currPage, totalPages, handleChangePage }: { commentList: CommentProp[], showArticle: boolean, currPage: number, totalPages: number, handleChangePage: Function }) {
    return (
        <>
            <div className="block">
                <CommentList commentList={commentList} showArticle={showArticle} />
            </div>

            <div className="block mt-6">
                <Pagination totalPages={totalPages} currPage={currPage} handleChangePage={handleChangePage} />
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
