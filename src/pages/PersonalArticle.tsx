import { useEffect, useState } from "react";
import { PageArticle } from "../components/Article";
import client from "../utils/client";
import { useParams, useSearchParams } from "react-router-dom";


function PersonalArticle() {
    const { id } = useParams();
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams({
        "page": "1",
    })
    const [articleList, setArticleList] = useState([]);
    const limit: number = 20;
    const currPage = Number(searchParams.get("page"));


    useEffect(() => {
        client.get("api/v1/article/", {
            params: {
                limit: limit,
                skip: (currPage - 1) * limit,
                writer_id: id,
            }
        }).then(response => {
            setArticleList(response.data);
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

    return (
        <PageArticle articleList={articleList} totalPages={totalPages} currPage={currPage} handleChangePage={handleChangePage}/>
    )
}

export default PersonalArticle;
