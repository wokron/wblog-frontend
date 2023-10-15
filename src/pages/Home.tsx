import { useEffect, useState } from "react";
import { PageArticle } from "../components/Article";
import Category from "../components/Category";
import { CommentList } from "../components/Comment";
import Tag from "../components/Tag";
import { useNavigate, useSearchParams } from "react-router-dom";
import client from "../utils/client";


function Home() {
    const navigate = useNavigate();
    const [totalPages, setTotalPages] = useState(1);
    const [articleList, setArticleList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [recentCommentList, setRecentCommentList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({
        "page": "1",
    })

    const limit: number = 20;
    const currPage = Number(searchParams.get("page"));

    useEffect(() => {
        client.get("api/v1/article/", {
            params: {
                limit: limit,
                skip: (currPage - 1) * limit
            }
        }).then(response => {
            setArticleList(response.data);
            const total: number = response.headers["x-total-count"];
            setTotalPages(total / limit + 1);
        }).catch(err => {
            console.warn(err);
        });

        client.get("api/v1/category", {
            params: {
                hide_unused: true
            }
        }).then(response => {
            setCategoryList(response.data);
        }).catch(err => {
            console.warn(err);
        });

        client.get("api/v1/tag", {
            params: {
                hide_unused: true
            }
        }).then(response => {
            setTagList(response.data);
        }).catch(err => {
            console.warn(err);
        });

        client.get("api/v1/comment", {
            params: {
                limit: 6,
                skip: 0,
            }
        }).then(response => {
            setRecentCommentList(response.data);
        }).catch(err => {
            console.warn(err);
        });

    }, []);

    function handleCategoryClick(id: number) {
        navigate(`/search/?category_id=${id}`);
    }

    function handleTagClick(id: number) {
        navigate(`/search/?tag_ids=${id}`);
    }

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
                        <PageArticle articleList={articleList} totalPages={totalPages} currPage={currPage} />
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
                            {categoryList.map(category => <Category category={category} isActive={false} handleClick={handleCategoryClick} />)}
                        </div>
                    </div>

                    <div className="block">
                        <h1 className="title is-6">
                            <span className="icon">
                                <i className="fas fa-tag"></i>
                            </span> 所有标签：
                        </h1>
                        <div className="tags">
                            {tagList.map(tag => <Tag tag={tag} isActive={false} handleClick={handleTagClick}/>)}
                        </div>
                    </div>

                    <div className="block">
                        <h1 className="title is-6">
                            <span className="icon">
                                <i className="fas fa-comments"></i>
                            </span>最新评论：
                        </h1>
                        <CommentList commentList={recentCommentList} showArticle={true} />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
