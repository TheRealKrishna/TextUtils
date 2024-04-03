/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie';



export default function Navbar(props) {
    const [cookies, setCookie] = useCookies(['currentMode']);
    const [currentMode, setCurrentMode] = useState("light")
    useEffect(() => {
        if (cookies['currentMode']) {
            setCurrentMode(cookies['currentMode']);
        }
        else {
            setCookie('currentMode', currentMode, { path: '/' });
        }
    }, [cookies, currentMode, setCookie]);
    let blackElementsForDarkMode = useState([])
    let elementsForDarkMode = useState([])
    useEffect(() => {
        elementsForDarkMode.pop()
        elementsForDarkMode.pop()
        blackElementsForDarkMode.pop()
        blackElementsForDarkMode.pop()
        blackElementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("navbar")));
        blackElementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("nav-item")));
        blackElementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("nav-link")));
        blackElementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("navbar-brand")));
        blackElementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("accordion-button")));

        elementsForDarkMode.unshift(...Array.from(document.getElementsByTagName("body")));
        elementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("container")));
        elementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("accordion-body")));
        elementsForDarkMode.unshift(...Array.from(document.getElementsByClassName("form-control")));
    })

    const [darkModeIcon, setDarkModeIcon] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAihJREFUSEvd1svrTVEUB/DPL4+UATNlZMSQRPJ+lreEIWWk/AVGwsR/YGBmZoY888ojb4mUgRGKqRTl/Whpnzqd33nsc7u6ZdXt3rv32uu711p7fdcaMyIZGxGuQYFnYW+69Am87uvAoMCrcCOBrcbN/wJ4JabhbI03OR5vwwfcrotGU6jX4DwmYguuVA5Px7y09iwBlFXW4xy+YxNuVcGbgNfhAibjCyKPDzLzuAKXMQXfsBnXcoFDbytO4zM24G7pcFx4Tvr/Er9Le0tLwBHui31CXejuwjvcTwth9AAiFVPT2qfk0VE8TmtLMCNdvDZQfcppP47RWPu/sBsnc1KSC7woed2l/xVzEeFvlS5DxeF7WNxlLO3Hu9jRpVsGDhqMTyFFmcxMee6yVeyH11H/8V0uu9gPav1Lr2XgwzhUsl5QYTyoO7moSS/C/RxloomtIwicLOCFeNQTeAGe5AI3hTrCFtSXK/G6I8Qfc0PdZvh6qt0c8GC8oNmhvOr5KdwTOuz9SBz+YljAYWcfjrcY/Ik9wyKQnXiLhwlwWXqVaysXiPAexNO0HpUQlHmq6aJtBBJ5OpOaxMZKSc1G1HfIK7wpASzHpdSdotHE73GS2xajv9Y29Bqb5bYYLbX2bBNwkEcMApNSP71aAegaBKKNxuQSg0AAjyOgtlDHzaOGY5KoSs7osx3v+44+XdWQAzyUOh7E438CPLKBvisVnfu5g0Cnob4KfwBXiXUfhZxBjAAAAABJRU5ErkJggg==")

    function toogleDarkMode() {
        if (currentMode === "light") {
            document.title = "Text Utils - Dark Mode";
            setCurrentMode("dark");
            setCookie('currentMode', "dark", { path: '/' });
            setDarkModeIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmZJREFUSEvVlrtrVFEQh78fPhAskk6wstJSEUV8GxUSNQmilgpWgn+BlaiN/4GFnZ2dETWKL3zgW0QRLFIZQVsJKGh8/WSWs/F6s3fv2SWyeKrde+bMd2bmzEP0aKlHXLoC214GHE6XPidpslMDugVvA+4k2ICku/8/2PZWoE/SpbI1tmsttj0KTEm638obLV1teztwBZgPDEu6UTxsux9Ylb69kjRV2h8ELgPfgd2S7pXhVeCdwDiwEPgKRByf5MTR9hbgOrAI+AbskXQrCxxCtkeAMeALMCTpYfOw7bjwivR/QpILexsL4FFJV7NdXVByAPgg6XG6TCg9BkQoFie5z0BYdFrS8yS3AVgiKS7ecmWnk+2jwBmozP1fwEFJ53NCkgW2vQ4Iq+vkp4GVkibq4HWKGudtPwLW1ylL+2OS9tXJzoBTGYxS2FyNNLG9NOJcp6iwH1ZH/k+X0i5EJpvltQg+CZwoKGiUQtvxoB50AA7RcPfrUqGJ76ckBedPzGxXgdcCzzoEr5H0Ihccbm7l6r4ofR2A43X3S/qU5ep2im3fTrmbwx+XNFwnmPuqVyd3z6tR+CNquKQ3cwJOKXUEONtG4U/g0JwUENv7gfeSnib4JiAe4Y7SBaKhHJf0MslFJkTJvFB10UpX2444XUxNYpekmZSyvRyI/I71VtK7JsD2ZuBa6k4jkuL3rJXbFgerGnpZY6ktRkttebYKPJAGgQWpn94sAjIGgSEgJpcYBAI8qwC1c3U09Ch9MUn8tTJHn73Ax45Gn7pUyAHX6cjK424s/lfg3gz0ddbk7Hfl6hzFdTK/AZTRES64+9RRAAAAAElFTkSuQmCC")
            blackElementsForDarkMode.forEach(element => {
                element.classList.add("blackDarkMode");
            });
            elementsForDarkMode.forEach(element => {
                element.classList.add("darkMode");
            });

        }
        else if (currentMode === "dark") {
            document.title = "Text Utils - Light Mode";
            setCurrentMode("light");
            setCookie('currentMode', "light", { path: '/' });
            setDarkModeIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAihJREFUSEvd1svrTVEUB/DPL4+UATNlZMSQRPJ+lreEIWWk/AVGwsR/YGBmZoY888ojb4mUgRGKqRTl/Whpnzqd33nsc7u6ZdXt3rv32uu711p7fdcaMyIZGxGuQYFnYW+69Am87uvAoMCrcCOBrcbN/wJ4JabhbI03OR5vwwfcrotGU6jX4DwmYguuVA5Px7y09iwBlFXW4xy+YxNuVcGbgNfhAibjCyKPDzLzuAKXMQXfsBnXcoFDbytO4zM24G7pcFx4Tvr/Er9Le0tLwBHui31CXejuwjvcTwth9AAiFVPT2qfk0VE8TmtLMCNdvDZQfcppP47RWPu/sBsnc1KSC7woed2l/xVzEeFvlS5DxeF7WNxlLO3Hu9jRpVsGDhqMTyFFmcxMee6yVeyH11H/8V0uu9gPav1Lr2XgwzhUsl5QYTyoO7moSS/C/RxloomtIwicLOCFeNQTeAGe5AI3hTrCFtSXK/G6I8Qfc0PdZvh6qt0c8GC8oNmhvOr5KdwTOuz9SBz+YljAYWcfjrcY/Ik9wyKQnXiLhwlwWXqVaysXiPAexNO0HpUQlHmq6aJtBBJ5OpOaxMZKSc1G1HfIK7wpASzHpdSdotHE73GS2xajv9Y29Bqb5bYYLbX2bBNwkEcMApNSP71aAegaBKKNxuQSg0AAjyOgtlDHzaOGY5KoSs7osx3v+44+XdWQAzyUOh7E438CPLKBvisVnfu5g0Cnob4KfwBXiXUfhZxBjAAAAABJRU5ErkJggg==")
            blackElementsForDarkMode.forEach(element => {
                element.classList.remove("blackDarkMode");
            });
            elementsForDarkMode.forEach(element => {
                element.classList.remove("darkMode");
            });
        }
    }
    const location = useLocation();

    useEffect(() => {
        if (currentMode === "dark") {
            document.title = "Text Utils - Dark Mode";
            setCurrentMode("dark");
            setCookie('currentMode', "dark", { path: '/' });
            setDarkModeIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmZJREFUSEvVlrtrVFEQh78fPhAskk6wstJSEUV8GxUSNQmilgpWgn+BlaiN/4GFnZ2dETWKL3zgW0QRLFIZQVsJKGh8/WSWs/F6s3fv2SWyeKrde+bMd2bmzEP0aKlHXLoC214GHE6XPidpslMDugVvA+4k2ICku/8/2PZWoE/SpbI1tmsttj0KTEm638obLV1teztwBZgPDEu6UTxsux9Ylb69kjRV2h8ELgPfgd2S7pXhVeCdwDiwEPgKRByf5MTR9hbgOrAI+AbskXQrCxxCtkeAMeALMCTpYfOw7bjwivR/QpILexsL4FFJV7NdXVByAPgg6XG6TCg9BkQoFie5z0BYdFrS8yS3AVgiKS7ecmWnk+2jwBmozP1fwEFJ53NCkgW2vQ4Iq+vkp4GVkibq4HWKGudtPwLW1ylL+2OS9tXJzoBTGYxS2FyNNLG9NOJcp6iwH1ZH/k+X0i5EJpvltQg+CZwoKGiUQtvxoB50AA7RcPfrUqGJ76ckBedPzGxXgdcCzzoEr5H0Ihccbm7l6r4ofR2A43X3S/qU5ep2im3fTrmbwx+XNFwnmPuqVyd3z6tR+CNquKQ3cwJOKXUEONtG4U/g0JwUENv7gfeSnib4JiAe4Y7SBaKhHJf0MslFJkTJvFB10UpX2444XUxNYpekmZSyvRyI/I71VtK7JsD2ZuBa6k4jkuL3rJXbFgerGnpZY6ktRkttebYKPJAGgQWpn94sAjIGgSEgJpcYBAI8qwC1c3U09Ch9MUn8tTJHn73Ax45Gn7pUyAHX6cjK424s/lfg3gz0ddbk7Hfl6hzFdTK/AZTRES64+9RRAAAAAElFTkSuQmCC")
            blackElementsForDarkMode.forEach(element => {
                element.classList.add("blackDarkMode");
            });
            elementsForDarkMode.forEach(element => {
                element.classList.add("darkMode");
            });
        }
    }, [location, blackElementsForDarkMode, currentMode, elementsForDarkMode, setCookie]);

    return (
        <>
            <link rel="stylesheet" href="boxicons.min.css" />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <button className="btn btn mx-3 btn-outline" onClick={toogleDarkMode}><img src={darkModeIcon} /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: "React App",
}