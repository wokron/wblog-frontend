import { useEffect, useState } from "react"
import { ArticleList } from "../components/Article"
import Category from "../components/Category"
import Pagination from "../components/Pagination"
import Tag from "../components/Tag"
import client from "../utils/client"
import { useSearchParams } from "react-router-dom"


function Search() {
    const [totalPages, setTotalPages] = useState(1);
    const [searchResult, setSearchResult] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({
        "page": "1",
    })
    const limit: number = 20;
    const currPage = Number(searchParams.get("page"));

    useEffect(() => {
        client.get("api/v1/article", {
            params: {
                limit: limit,
                skip: (currPage - 1) * limit
            }
        }).then(response => {
            setSearchResult(response.data);
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

    }, []);

    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-one-quarter has-background-white pt-5 ml-2">
                    <h1 className="title is-6"><span className="icon"><i className="fas fa-filter"></i></span>筛选条件</h1>
                    <div className="block">
                        <h2 className="subtitle is-6"><span className="icon"><i className="fas fa-folder"></i></span> 分类：</h2>
                        <div className="buttons are-small">
                            {categoryList.map(category => <Category category={category} isActive={false} />)}
                        </div>
                    </div>

                    <div className="block">
                        <h2 className="subtitle is-6"><span className="icon"><i className="fas fa-tag"></i></span> 标签：</h2>
                        <div className="tags">
                            {tagList.map(tag => <Tag tag={tag} isActive={false} />)}

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
                            <Pagination totalPages={totalPages} currPage={currPage} />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Search;
