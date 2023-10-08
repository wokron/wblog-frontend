function Tag({ tag, isActive }: { tag: { id: number, name: string }, isActive: boolean }) {
    return (
        <>
            {isActive ? (
                <a className="tag is-primary">{tag.name}</a>
            ) : (
                <a className="tag is-grey">{tag.name}</a>
            )}
        </>
    )
}


export default Tag;
