import styled from "styled-components";

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-top: 5vw;
    margin-bottom: 5vw;
    img{
        height: 15vw;
        margin:20px;
        position:relative; 
        z-index:-1;
    }
    div{
        display: flex;
        justify-content: center;
    }
    h1{
        font-weight: 400;
        font-size: 4rem;
        margin: 50px 0 0 0;
    }
    @media (min-width:200px) and (max-width:1024px){
        align-items: center;
        div{
            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;
            margin:0;
        }
        h1{
            text-align:center;
            margin: 0;
            font-size: 2.5rem;
        }
        img{
            width: 70vw;
            height: auto;
            margin: 4vw 10vw 4vw 10vw;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5));
        }
    }
`