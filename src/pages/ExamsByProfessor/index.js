import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ExamsWrapper } from './styles';
import Header from '../../components/Header';

export default function ExamsByProfessor() {
    let location = useLocation();
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const request = axios.get(`http://localhost:3001/api/exams/professor/${location.state}`);
        request.then(resp => {
            setExams(resp.data);
            alert("entrei")
        });
        request.catch(() => {
            alert('houve um erro no carregamento da página, tente novamente');
        });
    }, []);

    function openPdf(link){
        window.open(link,'_blank');
    }
    
    return (
        <>
            {exams.map((e) => {
                return (
                    <>
                        <Header />
                        <ExamsWrapper>
                            <h1 onClick={() => openPdf(e.link)}>
                                {e.examType} {e.name}/{e.period}
                            </h1>
                        </ExamsWrapper>
                    </>
                )
            })}
        </>
    )
}
