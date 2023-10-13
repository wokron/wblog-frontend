import { Navigate, Route, Routes } from "react-router-dom";
import { PageArticle } from "../components/Article";
import { PageComment } from "../components/Comment";
import { MemberInfoCard, MemberInfoUpdateForm } from "../components/Member";
import { CurrentPersonalPage, PersonalBar } from "../components/PersonalBar";
import NotFound from "./NotFound";

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

const info = {
    name: "John Smith",
    datetime: "2023.12.31",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
}

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

function Personal() {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-one-quarter has-background-white pt-5 ml-2">
                    <MemberInfoCard member={info} />
                </div>

                <div className="column is-half has-background-white pt-5">
                    <PersonalBar isPrivate={true} currPage={CurrentPersonalPage.Article} />

                    <div className="block">
                        <Routes>
                            <Route path="/" element={<Navigate to="article" />} />
                            <Route path="/article" element={<PageArticle articleList={articleList} totalPages={20} currPage={19} />} />
                            <Route path="/comment" element={<PageComment commentList={commentList} totalPages={3} currPage={1} showArticle={true} />} />
                            <Route path="/info" element={<MemberInfoUpdateForm member={info} />} />
                            <Route path="*" element={<NotFound isSmall={true} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal;
