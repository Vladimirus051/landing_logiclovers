import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterSection = styled("footer")`
    background: rgb(241, 242, 243);
    padding: 2.5rem 0;
`;

export const Title = styled("h4")`
    font-size: 22px;
    text-transform: capitalize;
    color: #18216d;

    @media screen and (max-width: 414px) {
        padding: 1.5rem 0;
    }
`;

export const NavLink = styled(Link)`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.625rem;
    transition: none;

    &:hover,
    &:active,
    &:focus {
        color: #15418e;
    }
`;

export const Extra = styled("section")`
    background: rgb(241, 242, 243);
    position: relative;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
    display: flex;
    position: relative;

    svg {
        width: 400px;
        height: 300px;
        @media screen and (max-width: 1200px) {
            width: 350px;
            height: 262.5px;
        }
        @media screen and (max-width: 1024px) {
            width: 300px;
            height: 225px;
        }
        @media screen and (max-width: 768px) {
            width: 250px;
            height: 187.5px;
        }
        @media screen and (max-width: 480px) {
            width: 200px;
            height: 150px;
        }
        @media screen and (max-width: 320px) {
            width: 150px;
            height: 112.5px;
        }
    }
`;

export const Para = styled("div")`
    color: #18216d;
    font-size: 14px;
    width: 70%;
`;

export const Large = styled(Link)`
    font-size: 16px;
    color: #000;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-transform: capitalize;
    line-height: 24px;
    display: block;
    margin-bottom: .625rem;
    transition: .3s ease-in-out;
    max-width: max-content;

    &:hover {
        color: #ff825c;
        text-underline-position: under;
        text-decoration: #ff825c wavy underline
    }
`;

export const Chat = styled("p")`
    color: #18216d;
    max-width: -moz-fit-content;
    max-width: -webkit-fit-content;
    max-width: -ms-fit-content;
    max-width: -o-fit-content;
    max-width: -moz-fit-content;
    max-width: -webkit-fit-content;
    max-width: -ms-fit-content;
    max-width: -o-fit-content;
    border-bottom: #18216d solid .0625rem;
    cursor: pointer;
    margin-top: .625rem;
    transition: .3s ease-in-out;

    &:hover {
        border-bottom: #ff825c solid .0625rem;
        color: #ff825c
    }
`;

export const Empty = styled("div")`
    position: relative;
    height: 3.3125rem
`;

export const FooterContainer = styled("div")`
    display: inline-block;
    position: relative;
    max-width: 31.875rem;
    width: 400px;
    height: 300px;
    justify-content: center;
    text-align: center;
    align-items: center;
    transition: none;
    padding-right: 0;
    padding-bottom: 0.3125rem;
    margin-left: auto;
    
    a {
        &:hover,
        &:active,
        &:focus {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 1200px) {
        padding-right: 4.375rem;
        justify-content: center;
    }

    @media screen and (max-width: 1024px) {
        padding-right: 3.125rem;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        padding-right: 2.5rem;
        justify-content: center;
    }

    @media screen and (max-width: 480px) {
        padding-right: 1.875rem;
        justify-content: center;
    }

    @media screen and (max-width: 320px) {
        padding-right: 1.25rem;
        justify-content: center;
    }

    div {
        cursor: pointer;
        margin-right: 0.9375rem;
        width: 1.5625rem;
        height: 1.5625rem;
        justify-content: center;

        &:hover {
            fill: #ff825c;
        }

        @media screen and (max-width: 480px) {
            width: 1.25rem;
            height: 1.25rem;
            justify-content: center;
        }

        @media screen and (max-width: 320px) {
            width: 1rem;
            height: 1rem;
            justify-content: center;
        }
    }
`;


export const Language = styled("h4")`
    font-size: 22px;
    text-transform: capitalize;
    color: #18216d;

    @media screen and (max-width: 414px) {
        padding: 1.5rem
    }
`;

export const Label = styled("label")`
    font-size: 22px;
    text-transform: capitalize;
    color: #18216d;
    display: block;
    margin-bottom: 2rem;
    font-family: 'Motiva Sans Bold', serif;

    @media screen and (max-width: 414px) {
        padding: 1.5rem;
        margin-bottom: 1rem
    }
`;

export const LanguageSwitch = styled("div")`
    cursor: pointer;
    transition: .1s ease-in-out;

    &:hover, :active, :focus {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1)
    }
`;

export const LanguageSwitchContainer = styled("div")`
    display: flex;
    justify-content: space-between;
    width: .3125rem
`;
