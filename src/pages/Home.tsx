import { ArticleList, PageArticle } from "../components/Article";
import Category from "../components/Category";
import { CommentList } from "../components/Comment";
import Pagination from "../components/Pagination";
import Tag from "../components/Tag";

const articleList = [
    {
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
        imgUrl: "https://bulma.io/images/placeholders/96x96.png"
    },
    {
        id: 2,
        title: "新药模仿运动，让肥胖小鼠燃烧脂肪减肥",
        category: {
            id: 1,
            name: "减肥",
        },
        datetime: "2023.12.31",
        description: "刺激肌肉像进行运动一样烧脂肪",
        writer: {
            id: 1,
            name: "ddwrw",
        },
        imgUrl: "https://bulma.io/images/placeholders/96x96.png"
    },
    {
        id: 1,
        title: "科学家终于弄清楚了猫咪如何发出呼噜声",
        category: {
            id: 1,
            name: "无厘头研究",
        },
        datetime: "2023.12.31",
        description: "猫咪的呼噜声是自动启动的",
        writer: {
            id: 1,
            name: "BAIL",
        },
        imgUrl: "https://bulma.io/images/placeholders/96x96.png"
    }
]

const recentComments = [
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

function Home() {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-half has-background-white pt-5">
                    <div className="block">
                            <h1 className="title is-6">
                                <span className="icon">
                                    <i className="fas fa-book"></i>
                                </span> 所有文章：
                            </h1>
                            <PageArticle articleList={articleList} totalPages={20} currPage={19} />
                    </div>
                </div>

                <div className="column is-one-quarter has-background-white pt-5 ml-2">

                    <div className="block">
                        <h1 className="title is-6">
                            <span className="icon">
                                <i className="fas fa-folder"></i>
                            </span> 所有分类：
                        </h1>
                        <div className="buttons">
                            <Category category={{ id: 0, name: "无厘头研究" }} isActive={false} />
                            <Category category={{ id: 0, name: "减肥" }} isActive={false} />
                            <Category category={{ id: 0, name: "猫猫" }} isActive={false} />
                        </div>
                    </div>

                    <div className="block">
                        <h1 className="title is-6">
                            <span className="icon">
                                <i className="fas fa-tag"></i>
                            </span> 所有标签：
                        </h1>
                        <div className="tags">
                            <Tag tag={{ id: 0, name: "物理" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "化学" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "生物" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "数学" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "物理" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "化学" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "生物" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "数学" }} isActive={false} />
                        </div>
                    </div>

                    <div className="block">
                        <h1 className="title is-6">
                            <span className="icon">
                                <i className="fas fa-comments"></i>
                            </span>最新评论：
                        </h1>
                        <CommentList commentList={recentComments} showArticle={true} />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
