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
export const Options = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    font-family: inherit;
    font-size: 1.3rem;
    color: white;
    div{
        background: orange;
        padding: 10px;
        border-radius: 10px;
    }
`
export const List = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 10px 0px 10px 0px;
    width: 95vw;
    margin: 0px auto;
    div{
        background: orange;
        border-radius: 8px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding-right: 5px;
        align-items: center;
    }
    button{
        font-size: 1.3rem;
        margin-top: 10px;
        text-align: start;
        padding: 10px;
        cursor: pointer;
        width: 95vw;
    }

`