function Tag({ tag, isActive, handleClick }: { tag: { id: number, name: string }, isActive: boolean, handleClick: Function }) {
    return (
        <>
            {isActive ? (
                <a className="tag is-primary" onClick={() => handleClick(tag.id)}>{tag.name}</a>
            ) : (
                <a className="tag is-grey" onClick={() => handleClick(tag.id)}>{tag.name}</a>
            )}
        </>
    )
}


export default Tag;
