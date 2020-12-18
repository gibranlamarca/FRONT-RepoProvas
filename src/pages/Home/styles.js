import styled from 'styled-components';

export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: grey;
border-radius: 10px;
padding: 5px;
margin-top: 30px;
width: 94vw;
margin-left: auto;
margin-right: auto;
height: 8vh;
h2{
    text-align: center;
    font-size: 1.5rem;
    color: orange;
}
`
export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    margin-top: 10px;
`
export const OptionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: orange;
    color: white;
    font-size: 1.5rem;
    max-width: 45vw;
    height: 13vh;
    margin: 0 auto;
    &:nth-child(2){
        background: grey;
        cursor: none;
        opacity: 0.5;
    }
`