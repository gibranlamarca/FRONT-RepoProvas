import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import {Title, ButtonsWrapper, OptionButton } from './styles';
import { useHistory } from 'react-router-dom';
export default function Home() {
    const history = useHistory();
    return (
        <>
            <Header/>
            <Title>
                <h2>O que você deseja fazer?</h2>
            </Title>
            <ButtonsWrapper>
                <OptionButton onClick={() => history.push('/exams')}>
                    Visualizar provas
                </OptionButton>
                <OptionButton onClick={() => alert("Essa funcionalidade será implementada em breve!")}>
                    Enviar prova anônima
                </OptionButton>
            </ButtonsWrapper>
        </>
    )
}
