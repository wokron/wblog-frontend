function PageItem({ number, isCurrent }: { number: number, isCurrent: boolean }) {
    return (
        <li>
            {
                isCurrent ? (
                    <a className="pagination-link has-background-primary has-text-white" aria-label={`Goto page ${number}`}>{number}</a>
                ) : (
                    <a className="pagination-link" aria-label={`Goto page ${number}`}>{number}</a>
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

function Pagination({ totalPages, currPage }: { totalPages: number, currPage: number }) {
    const startPage = Math.max(Math.min(currPage - 2, totalPages - 5), 1);
    const endPage = Math.min(Math.max(currPage + 2, 5), totalPages);
    const pages = range(startPage, endPage);

    return (
        <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
            {
                currPage === 1 ? (
                    <a className="pagination-previous is-disabled" title="this is the first page">Prev page</a>
                ) : (
                    <a className="pagination-previous">Prev page</a>
                )
            }
            {
                currPage === totalPages ? (
                    <a className="pagination-next is-disabled" title="this is the last page">Next page</a>
                ) : (
                    <a className="pagination-next">Next page</a>
                )
            }

            <ul className="pagination-list">
                {pages.map(pageNum => {
                    if (pageNum == currPage) {
                        return <PageItem number={pageNum} isCurrent={true} />
                    } else {
                        return <PageItem number={pageNum} isCurrent={false} />
                    }
                })}
            </ul>
        </nav>
    )
}

export default Pagination;
