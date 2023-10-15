import { Link } from "react-router-dom"
import Pagination from "./Pagination"

interface ArticleItemProp {
    id: number, title: string, description: string, create_time: string,
    imgUrl: string,
    category: { id: number, name: string },
    writer: { id: number, name: string }
}


function ArticleItem({ article }: { article: ArticleItemProp }) {
    return (
        <article className="media">
            <div className="media-left">
                <figure className="media-left">
                    <p className="image is-96x96">
                        <img src={article.imgUrl} />
                    </p>
                </figure>
            </div>
            <div className="media-content">
                <Link className="has-text-primary-dark has-text-weight-bold" to={`/search/?category_id=${article.category.id}`}>{article.category.name}</Link>
                <h1 className="is-size-5"><Link to={`/article/${article.id}`} className="has-text-black has-text-weight-bold">{article.title}</Link>
                </h1>
                <p className="has-text-grey"><Link to={`/personal/${article.writer.id}`} className="has-text-grey has-text-weight-bold">{article.writer.name}</Link> @ <small>{article.create_time}</small>
                </p>
                <p className="is-size-6 has-text-grey-light">
                    {article.description}
                </p>
            </div>
        </article>
    )
}


function ArticleList({ articleList }: { articleList: ArticleItemProp[] }) {
    return (
        <>
            {articleList.map(article => <ArticleItem article={article} />)}
        </>
    )
}

function PageArticle({ articleList, currPage, totalPages, handleChangePage }: { articleList: ArticleItemProp[], currPage: number, totalPages: number, handleChangePage: Function }) {
    return (
        <>
            <div className="block">
                <ArticleList articleList={articleList} />
            </div>

            <div className="block mt-6">
                <Pagination totalPages={totalPages} currPage={currPage} handleChangePage={handleChangePage}/>
            </div>
        </>
    )
}

interface ArticleContentProp {
    id: number, title: string, description: string, content: string, create_time: string,
    category: { id: number, name: string },
    writer: { id: number, name: string }
}

function ArticleContent({ article }: { article: ArticleContentProp }) {
    return (
        <>
            <p><a className="has-text-weight-bold has-text-black">{article.writer.name}</a> @ {article.create_time}</p>
            <h1 className="title">{article.title}</h1>
            <h2 className="subtitle">{article.description}</h2>
            <div className="content">
                {article.content}
            </div>
        </>
    )
}

export { ArticleList, PageArticle, ArticleContent };
