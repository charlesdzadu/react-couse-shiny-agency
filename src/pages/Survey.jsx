import { Link, useParams } from 'react-router-dom';

function Survey() {
    const { id } = useParams();
    const parsed_id = parseInt(id);
    let prec = id === '1' ? '1' : parsed_id - 1;
    let next = id === '10' ? '10' : parsed_id + 1;

    return (
        <div>
            <h1>Questionnaire 👨‍💻 </h1>
            <div>
                <Link to={`/survey/${prec}`}>Question précédente</Link>
                {parsed_id < 10 ? (
                    <Link to={`/survey/${next}`}>Question suivante</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </div>
        </div>
    );
}

export default Survey;
