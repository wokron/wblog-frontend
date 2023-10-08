function Category({ category, isActive }: { category: { id: number, name: string }, isActive: boolean }) {
    return (
        <>
            {
                isActive ? (
                    <button className="button is-small is-primary">{category.name}</button>
                ) : (
                    <button className="button is-small ">{category.name}</button>
                )
            }
        </>
    )
}

export default Category;
