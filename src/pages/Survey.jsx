import { Link, useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

import { Loader } from '../utils/Atoms';
import { useFetch } from '../utils/hooks';

function Survey() {
    const { id } = useParams();
    const parsed_id = parseInt(id);
    let prec = id === '1' ? '1' : parsed_id - 1;
    let next = id === '10' ? '10' : parsed_id + 1;

    const { loading, data } = useFetch('http://localhost:8000/survey');
    const { surveyData } = data;

    return (
        <div>
            <h1>Questionnaire 👨‍💻 </h1>
            {loading ? (
                <Loader data-testid="loader" />
            ) : (
                <h2>{surveyData && surveyData[parsed_id]}</h2>
            )}

            <div>
                <Link to={`/survey/${prec}`}>Question précédente</Link>
                {surveyData && surveyData[next] ? (
                    <Link to={`/survey/${next}`}>Question suivante</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </div>
        </div>
    );
}

export default Survey;
