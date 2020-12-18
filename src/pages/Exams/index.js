import React, { useState,useEffect } from 'react';
import Header from '../../components/Header';
import { Title, Options, List } from './styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Exams() {
    const [searchType, setSearchType] = useState('professor');
    const [professors, setProfessors] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const requestProf = axios.get('http://localhost:3001/api/professors');
        requestProf.then(resp => {
            setProfessors(resp.data);
        });
        requestProf.catch(() => {
            alert('houve um erro no carregamento da página, tente novamente');
        });
    }, []);

    useEffect(() => {
        const requestSubj = axios.get('http://localhost:3001/api/subjects');
        requestSubj.then(resp => {
            setSubjects(resp.data);
        });
        requestSubj.catch(() => {
            alert('houve um erro no carregamento da página, tente novamente');
        });
    }, []);
    console.log(subjects);
    return (
        <>
            <Header />
            <Title>
                <h2>Consultar provas</h2>
            </Title>
            <Options>
                <div onClick = {() => setSearchType('professor')}>
                    <input type="radio" value="professor" name="option" checked/>
                    <label for="professor">Por professor</label><br />
                </div>
                <div onClick = {() => setSearchType('subject')}>
                    <input type="radio" value="subject" name="option"/>
                    <label for="disciplina">Por disciplina</label><br />
                </div>
            </Options>
            <List>
            {searchType === 'professor'
                ? <>
                    {professors.map(p => (
                        <div>
                            <button 
                                key={p.id}
                                onClick={() => history.push({ pathname:`/exams-list-by-prof`, state: p.professorId })}
                            >{p.name}</button>
                            <span>
                                {/* PENSAR COMO ADICIONAR AQUI O NÚMERO DE PROVAS QUE ELE APLICOU */}
                            </span>
                        </div>
                    ))}
                </>
                : (searchType === 'subject' ?
                <>
                {subjects.map(s => (
                    <div>
                        <button 
                            key={s.id}
                            onClick={() => history.push({ pathname:`/exams-list-by-subj`, state: s.name })}
                        >{s.name}</button>
                        <span>
                            Período: {s.period}
                        </span>
                    </div>
                ))}
                </>
                :
                <p>Carregando...</p>)
            }
            </List>
        </>
    )
}
