import styled from 'styled-components'
import { Link } from 'react-router-dom'

// BODY RESETS
export const Body = styled.body`
    background: #f4f4f4;
    color: #000;

    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;

    scroll-behavior: smooth;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    padding-bottom: 80px;
`

export const LogoCard = styled.div`
    display: flex;
    justify-content: center;
`

export const Logo = styled.img``

// HOME
export const PageContainer = styled.div`
    width: 100%;

    justify-content: center;
    align-items: center;
`

export const TextHome = styled.div`
    text-align: center;

    margin: 0 20px;
`

export const TitleTextHome = styled.h2``

export const SubtitleTextHome = styled.p`
    font: 400 13px 'Inter', sans-serif;
    opacity: 75%;

    margin-top: 30px;
`

export const CardButtonSchedule = styled.div`
    text-align: center;
    justify-content: center;

    margin-top: 4rem;
`

export const ButtonSchedule = styled.button`
    border: none;
    border-radius: 25px;
    background: linear-gradient(150deg, #4caf50 0%, #8bc34a 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #fff;
    font: 500 1rem 'Poppins', sans-serif;
    letter-spacing: 1px;

    width: 350px;
    height: 40px;
`

// FOOTER
export const Footer = styled.footer`
    z-index: 100;
    background: #f4f4f4;

    width: 100vw;
    height: 70px;

    bottom: 0;
    position: fixed;

    border-top: 1.5px solid #d9d9d9;
`
export const TabNavigation = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;

    padding: 1rem 0;
`
export const StyledLink = styled(Link)`
    list-style: none;
    text-decoration: none;

    font: 100 0.8rem 'Poppins', sans-serif;

    color: ${(props) => (props.active ? '#4caf50' : '#000')};

    transition: all 0.2s ease-in-out;

    .Icon {
        display: block;
        margin: auto;

        padding-bottom: 3px;

        font-size: 1.5rem;
    }

    &:hover {
        opacity: 0.8;
    }
`
