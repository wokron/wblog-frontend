import { useParams, useSearchParams } from "react-router-dom";
import { PageArticle } from "../components/Article";
import { PageComment } from "../components/Comment";
import { useEffect, useState } from "react";
import client from "../utils/client";


function PersonalComment() {
    const { id } = useParams();
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams({
        "page": "1",
    })
    const [commentList, setCommentList] = useState([]);
    const limit: number = 20;
    const currPage = Number(searchParams.get("page"));

    useEffect(() => {
        client.get("api/v1/comment/", {
            params: {
                limit: limit,
                skip: (currPage - 1) * limit,
                member_id: id,
            }
        }).then(response => {
            setCommentList(response.data);
            setTotalPages(response.headers["x-total-count"])
        }).catch(err => {
            console.warn(err);
        });
    }, []);

    return (
        <PageComment commentList={commentList} totalPages={totalPages} currPage={currPage} showArticle={true} />
    )
}

export default PersonalComment;
