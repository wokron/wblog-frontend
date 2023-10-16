import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArticleContent } from "../components/Article";
import { CommentForm, PageComment } from "../components/Comment";
import { useEffect, useState } from "react";
import client from "../utils/client";
import Tag from "../components/Tag";


function Article() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [totalPages, setTotalPages] = useState(1);
    const [article, setArticle] = useState({
        id: 0,
        title: "Lorem ipsum dolor sit amet",
        tags: [{
            id: 0,
            name: "ipsum dolor",
        }],
        category: {
            id: 0,
            name: "consectetur",
        },
        create_time: "2023.12.31",
        description: "Sit ipsam voluptatum suscipit rerum eveniet eum!",
        writer: {
            id: 0,
            name: "Rem",
        },
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Rem natus nobis nihil? Dolorem corporis reprehenderit temporibus animi labore, " +
            "deserunt voluptas ullam, illum saepe repudiandae aliquam blanditiis cumque, officia minima dolor?"
    });

    const [commentList, setCommentList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({
        "page": "1",
    })

    const limit: number = 20;
    const currPage = Number(searchParams.get("page"));

    useEffect(() => {
        client.get(`/api/v1/article/${id}`).then(response => {
            setArticle(response.data);
        }).catch(err => {
            console.warn(err);
        });

        client.get(`/api/v1/article/${id}/comment`, {
            params: {
                limit: limit,
                skip: (currPage - 1) * limit
            }
        }).then(response => {
            setCommentList(response.data);
            const total: number = response.headers["x-total-count"];
            setTotalPages(total / limit + 1);
        }).catch(err => {
            console.warn(err);
        });

    }, []);

    function handleChangePage(targetPage: number) {
        searchParams.set("page", String(targetPage));
        setSearchParams(searchParams);
    }

    function handleTagClick(id: number) {
        navigate(`/search/?tag_ids=${id}`);
    }

    return (
        <section className="section pt-5">
            <div className="columns is-centered">
                <div className="column is-half has-background-white pt-6 px-6">
                    <div className="block">
                        <ArticleContent article={article} />
                    </div>

                    <div className="block">
                        <div className="has-text-centered mb-2">
                            <div className="icon"><i className="fas fa-tag"></i></div>
                        </div>
                        <div className="tags is-centered">
                            {article.tags.map(tag => <Tag tag={tag} isActive={false} handleClick={handleTagClick} />)}
                        </div>
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
                        <PageComment commentList={commentList} showArticle={false} currPage={currPage} totalPages={totalPages} handleChangePage={handleChangePage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article;
