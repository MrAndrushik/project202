import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Footer(props) {
    const { t } = useTranslation();

    const GlobalStyle = createGlobalStyle`
      .footer {
         &::before {
            background-image: url(images/footer_mask.png);
         }
      }
   `;

    return (
        <footer
            className="footer"
            style={{ backgroundImage: "url(images/footer_bg.png)" }}
        >
            <GlobalStyle />

            <header className="header">
                <div className="header__body">
                    <div className="header__logo">
                        <h1 className="header__logo-image">
                            <img
                                src="images/logo.svg"
                                className="image"
                                alt="logo"
                            />
                        </h1>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__nav-items">
                            <li className="header__nav-item">
                                <a href="#mission">{t("footer.menu-item-1")}</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#features">
                                    {t("footer.menu-item-2")}
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#tokenomics">
                                    {t("footer.menu-item-3")}
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#q&a">{t("footer.menu-item-4")}</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#roadmap">{t("footer.menu-item-5")}</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__button">
                        <Link to={`${props.link}`}>{props.text}</Link>
                    </div>
                </div>
            </header>

            <div className="footer__body">
                <div className="footer__contacts">
                    <div className="footer__row email">
                        <img src="images/mail.svg" alt="email" />
                        <a href="mailto:info@p202.com">info@p202.com</a>
                    </div>
                    <div className="footer__button">
                        <Link to={`${props.link}`}>{props.text}</Link>
                    </div>
                    <div className="footer__row social">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="images/instagram.svg" alt="instagram" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="images/twitter.svg" alt="twitter" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="images/github.svg" alt="github" />
                        </a>
                        <a
                            href="https://telegram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="images/telegram.svg" alt="telegram" />
                        </a>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__bottom-item">
                            Siam NanoTech Inc.
                        </div>
                        <div className="footer__bottom-item">
                            D-U-N-S Number 118511839.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
