import styled from "styled-components";

export const Info2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-top: 5vw;
    margin-bottom: 5vw;
    h1{
        font-weight: 500;
        margin-right:58.4vw;
        margin-bottom:-7vw;
    }
    p{
        width: 750px;
        margin-right: 4vw;
        margin-top: 100px;

    }
    img{
        height: 16vw;
        margin-right: 75px;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5));
        position:relative; 
        z-index:-1;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:justify;
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
            margin: 0 0 5vw 0;
        }
        img{
            width: 80vw;
            height: auto;
            margin: 5vw 10vw 5vw 10vw;
        }
        p{
            text-align:center;
            margin: 0;
            width:80%;
        }
    }
`