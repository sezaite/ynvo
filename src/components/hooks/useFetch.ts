import { useState, useEffect } from 'react';
import axios from 'axios';
import { QuizQuestionType } from 'typings/generalTypes';

const useFetch = (url: string) => {
    const [data, setData] = useState<Array<QuizQuestionType>>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (!url) return;
        axios.get(url).then(res => {
            setData(res.data);
            setIsFetching(false);
            setError(false)
        }).catch(err => {
            console.error(err);
            setIsFetching(false);
            setError(true)
        })
    }, [url])

    return { data, isFetching, error };
}

export default useFetch;