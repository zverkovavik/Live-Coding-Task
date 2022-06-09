import React, { useEffect, useState } from 'react';
import { getFaqQuestions } from '../../api/api.js';
import { QuestionItem } from './QuestionItem.jsx';

export function Questions() {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestionsArray] = useState([]);
    const [thisItemOpen, setThisItemOpen] = useState('');

    useEffect(() => {
        getFaqQuestions().then((response) => {
            responseHandler(response);
        })
    }, []);

    const responseHandler = (response) => {
        response.json().then((response) => {
            setQuestionsArray(response.questions);
        });
        setLoading(false);
    }

    return (
        <section>
            {loading ?
                <p>Please wait</p> :
                <ul className="list">
                    {!!questions.length && questions.map((question) => {
                        return (
                            <QuestionItem
                                question={question}
                                key={question.question}
                                isOpen={question.question === thisItemOpen}
                                setThisItemOpen={setThisItemOpen}
                            />
                        )
                    })}
                </ul>
            }
        </section>)
};
