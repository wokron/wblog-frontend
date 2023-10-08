interface MemberInfoProp {
    name: string,
    datetime: string,
    description: string,
}


function MemberInfoCard({ member }: { member: MemberInfoProp }) {
    return (
        <div className="card mr-6">
            <div className="card-header">
                <h1 className="card-header-title">Personal Info</h1>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{member.name}</p>
                        <p className="subtitle is-6">join in {member.datetime}</p>
                    </div>
                </div>

                <div className="content">
                    {member.description}
                </div>
            </div>
        </div>
    )
}

function MemberInfoUpdateForm({ member }: { member: MemberInfoProp }) {
    return (
        <form>
            <div className="field">
                <label className="label">Name</label>
                <input className="input" type="text" placeholder={member.name} />
            </div>
            <div className="field">
                <label className="label">New passward</label>
                <input className="input" type="password" />
            </div>
            <div className="field">
                <label className="label">Confirm password</label>
                <input className="input" type="password" />
            </div>
            <div className="field">
                <label className="label">Personal Description</label>
                <textarea className="textarea" placeholder={member.description}></textarea>
            </div>

            <div className="buttons">
                <input className="button is-primary" type="submit" />
                <input className="button is-danger" type="reset" />
            </div>
        </form>
    )
}

export { MemberInfoCard, MemberInfoUpdateForm };
