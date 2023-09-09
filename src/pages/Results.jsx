function Results() {
    return (
        <div>
            <h1>Results</h1>
        </div>
    );
}

export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title;
    }
    return `${title},`;
}

export default Results;
