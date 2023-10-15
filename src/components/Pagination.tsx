function PageItem({ number, isCurrent, handleChangePage }: { number: number, isCurrent: boolean, handleChangePage: Function }) {
    return (
        <li>
            {
                isCurrent ? (
                    <a className="pagination-link has-background-primary has-text-white" aria-label={`Goto page ${number}`}>{number}</a>
                ) : (
                    <a className="pagination-link" aria-label={`Goto page ${number}`} onClick={() => handleChangePage(number)}>{number}</a>
                )
            }
        </li>
    )
}

function range(start: number, end: number) {
    var result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

function Pagination({ totalPages, currPage, handleChangePage }: { totalPages: number, currPage: number, handleChangePage: Function }) {
    const startPage = Math.max(Math.min(currPage - 2, totalPages - 5), 1);
    const endPage = Math.min(Math.max(currPage + 2, 5), totalPages);
    const pages = range(startPage, endPage);

    return (
        <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
            {
                currPage == 1 ? (
                    <a className="pagination-previous is-disabled" title="this is the first page">Prev page</a>
                ) : (
                    <a className="pagination-previous" onClick={() => handleChangePage(currPage - 1)}>Prev page</a>
                )
            }
            {
                currPage + 1 > totalPages ? (
                    <a className="pagination-next is-disabled" title="this is the last page">Next page</a>
                ) : (
                    <a className="pagination-next" onClick={() => handleChangePage(currPage + 1)}>Next page</a>
                )
            }

            <ul className="pagination-list">
                {pages.map(pageNum => <PageItem number={pageNum} isCurrent={pageNum == currPage} handleChangePage={handleChangePage} />)}
            </ul>
        </nav>
    )
}

export default Pagination;
