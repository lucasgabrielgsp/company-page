import styled from "styled-components";

export const LogoWithLinks = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    flex-direction: row;
    background-color: black;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    a{
        color:white;
        text-decoration: none;
        margin: 0 4vw 0 2vw;
        font-size: 1.3rem;
        font-weight:300;
    }
    a:hover{
        border-bottom: 1px white solid;
    }
    div{
        background-color: black;
        height: 60px;
        display: flex;
        align-items: center;
    }
    ul{
        display: flex;
        list-style: none;
    }
    img{
        display: none;
        cursor: pointer;
    }

    @media (min-width:200px) and (max-width:1024px){
        body{
            overflow-x:hidden;
        }
        ul{
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin: 0;
            position: absolute;
            top:7vh;
            right: 0;
            width: 50vw;
            height:92vh;
            background-color: black;
            transform: translateX(100%);
            transition: transform 0.3s ease-in;
            opacity: 0.9 ;
        }
        li{
            display: flex;
        }
        img{
            display: block;
            position: absolute;
            right:10vw;
        }
        a{
            text-align: center;
        }
    }
`