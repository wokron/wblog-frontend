import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { MemberInfoCard, MemberInfoUpdateForm } from "../components/Member";
import { CurrentPersonalPage, PersonalBar } from "../components/PersonalBar";
import NotFound from "./NotFound";
import PersonalArticle from "./PersonalArticle";
import PersonalComment from "./PersonalComment";
import { useEffect, useState } from "react";
import client from "../utils/client";


function Personal() {
    const { id } = useParams();
    const [member, setMember] = useState({
        id: 0,
        name: "John Smith",
        datetime: "2023.12.31",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    });

    useEffect(() => {
        client.get(`/api/v1/member/${id}`).then(response => {
            setMember(response.data);
        }).catch(err => {
            console.warn(err);
        });
    }, []);


    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-one-quarter has-background-white pt-5 ml-2">
                    <MemberInfoCard member={member} />
                </div>

                <div className="column is-half has-background-white pt-5">
                    <PersonalBar isPrivate={true} currPage={CurrentPersonalPage.Article} />

                    <div className="block">
                        <Routes>
                            <Route path="/" element={<Navigate to="article" />} />
                            <Route path="/article" element={<PersonalArticle/>} />
                            <Route path="/comment" element={<PersonalComment/>} />
                            <Route path="/info" element={<MemberInfoUpdateForm member={member} />} />
                            <Route path="*" element={<NotFound isSmall={true} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal;
