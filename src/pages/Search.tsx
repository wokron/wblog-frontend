import { ArticleList } from "../components/Article"
import Category from "../components/Category"
import Pagination from "../components/Pagination"
import Tag from "../components/Tag"

const searchResult = [
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

function Search() {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-one-quarter has-background-white pt-5 ml-2">
                    <h1 className="title is-6"><span className="icon"><i className="fas fa-filter"></i></span>筛选条件</h1>
                    <div className="block">
                        <h2 className="subtitle is-6"><span className="icon"><i className="fas fa-folder"></i></span> 分类：</h2>
                        <div className="buttons are-small">
                            <Category category={{ id: 0, name: "无厘头研究" }} isActive={true} />
                            <Category category={{ id: 0, name: "减肥" }} isActive={false} />
                            <Category category={{ id: 0, name: "猫猫" }} isActive={false} />
                        </div>
                    </div>

                    <div className="block">
                        <h2 className="subtitle is-6"><span className="icon"><i className="fas fa-tag"></i></span> 标签：</h2>
                        <div className="tags">
                            <Tag tag={{ id: 0, name: "物理" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "化学" }} isActive={true} />
                            <Tag tag={{ id: 0, name: "生物" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "数学" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "物理" }} isActive={true} />
                            <Tag tag={{ id: 0, name: "化学" }} isActive={true} />
                            <Tag tag={{ id: 0, name: "生物" }} isActive={false} />
                            <Tag tag={{ id: 0, name: "数学" }} isActive={false} />
                        </div>
                    </div>
                </div>
                <div className="column is-half has-background-white pt-5">

                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <a className="has-text-primary">
                                    <span className="icon">
                                        <i className="fas fa-fire"></i>
                                    </span>最热文章
                                </a>
                            </div>
                            <div className="level-item"> · </div>
                            <div className="level-item">
                                <a className="has-text-black">
                                    <span className="icon">
                                        <i className="fas fa-bolt"></i>
                                    </span>最近发布
                                </a>
                            </div>
                            <div className="level-item"> · </div>
                            <div className="level-item">
                                <a className="has-text-black">
                                    <span className="icon">
                                        <i className="fas fa-comment"></i>
                                    </span>最新评论
                                </a>
                            </div>

                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <span className="icon"><i className="fas fa-square-poll-vertical"></i></span>
                                {searchResult.length} 个结果
                            </div>
                        </div>
                    </nav>

                    <div className="block">
                        <div className="block">
                            <ArticleList articleList={searchResult} />
                        </div>

                        <div className="block mt-6">
                            <Pagination totalPages={20} currPage={19} />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Search;
