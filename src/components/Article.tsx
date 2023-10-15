import Pagination from "./Pagination"

interface ArticleItemProp {
    id: number, title: string, description: string, datetime: string,
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
                <strong className="has-text-primary-dark">{article.category.name}</strong>
                <h1 className="is-size-5"><a className="has-text-black has-text-weight-bold">{article.title}</a>
                </h1>
                <p className="has-text-grey"><strong><a className="has-text-grey">{article.writer.name}</a></strong> @
                    <small>{article.datetime}</small>
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

function PageArticle({ articleList, currPage, totalPages }: { articleList: ArticleItemProp[], currPage: number, totalPages: number }) {
    return (
        <>
            <div className="block">
                <ArticleList articleList={articleList} />
            </div>

            <div className="block mt-6">
                <Pagination totalPages={totalPages} currPage={currPage} />
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
