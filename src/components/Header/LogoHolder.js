import styled from "styled-components";

export const Logo = styled.div`
    img{
        display: flex;
        width: 170px ;
        margin-left:15px;
    }
    @media (min-width:200px) and (max-width:1024px){
        img{
            width: 150px;
            position: absolute;
            left:0.1vw ;
        }
    }
`