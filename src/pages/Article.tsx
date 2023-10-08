import { ArticleContent } from "../components/Article";
import { CommentForm, CommentList, PageComment } from "../components/Comment";


const commentList = [
    {
        person: { id: 0, name: "ffererf" },
        article: { id: 1, title: "植物是有认知能力的智能生物吗？" },
        content: "猫猫！科学进步的关键啊",
        datetime: "2023.12.31",
        like: 10,
        dislike: 1
    },
    {
        person: { id: 0, name: "ffererf" },
        article: { id: 1, title: "植物是有认知能力的智能生物吗？" },
        content: "猫猫！科学进步的关键啊",
        datetime: "2023.12.31",
        like: 10,
        dislike: 1
    },
    {
        person: { id: 0, name: "ffererf" },
        article: { id: 1, title: "植物是有认知能力的智能生物吗？" },
        content: "猫猫！科学进步的关键啊",
        datetime: "2023.12.31",
        like: 10,
        dislike: 1
    }
]

const article = {
    id: 1,
    title: "植物是有认知能力的智能生物吗？",
    category: {
        id: 1,
        name: "无厘头研究",
    },
    datetime: "2023.12.31",
    description: "认为植物有意识可能超出了科学的范畴",
    writer: {
        id: 1,
        name: "BAIL",
    },
    imgUrl: "https://bulma.io/images/placeholders/96x96.png",
    content: "123"
}

function Article() {
    return (
        <section className="section pt-5">
            <div className="columns is-centered">
                <div className="column is-half has-background-white pt-6 px-6">
                    <div className="block">
                        <ArticleContent article={article} />
                    </div>

                    <div className="block">
                        <h1 className="title is-5">
                            <span className="icon">
                                <i className="fas fa-comment"></i>
                            </span> 写下你的评论：
                        </h1>

                        <CommentForm />
                    </div>

                    <div className="block">
                        <h1 className="title is-5">
                            <span className="icon">
                                <i className="fas fa-comments"></i>
                            </span> 全部评论：
                        </h1>
                        <PageComment commentList={commentList} showArticle={false} currPage={2} totalPages={3} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article;
