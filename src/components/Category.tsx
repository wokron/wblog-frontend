function Category({ category, isActive, handleClick }: { category: { id: number, name: string }, isActive: boolean, handleClick: Function }) {
    return (
        <>
            {
                isActive ? (
                    <button className="button is-small is-primary" onClick={() => handleClick(category.id)}>{category.name}</button>
                ) : (
                    <button className="button is-small" onClick={() => handleClick(category.id)}>{category.name}</button>
                )
            }
        </>
    )
}

export default Category;
