import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 5vw;
    margin-bottom: 5vw;
    h1{
        font-weight: 500;
        margin-left:49vw;
        margin-bottom:-7vw;
    }
    p{
        width: 800px;
        margin-right: 4vw;
        margin-top: 100px;
    }
    img{
        width: auto;
        height: 16vw;
        margin-right: 5%;
        align-items: center;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5));
        position:relative; 
        z-index:-1;
    }

    div{
        display: flex;
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
            margin: 0;
        }
        img{
            width: 80vw;
            height: auto;
            margin: 4vw 10vw 4vw 10vw;
        }
        p{
            text-align:center;
            margin: 0;
            width:80%;
        }
    }
`