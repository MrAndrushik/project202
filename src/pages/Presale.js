import "../css/main.css";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";

export function Presale() {
    const { t } = useTranslation();

    return (
        <div className="wrap">
            <ScrollToTop />

            <main className="main presale">
                <section
                    className="presale-contract"
                    style={{ backgroundImage: "url(images/top_block_bg.png)" }}
                >
                    <div className="presale-contract__body">
                        <header className="header presale">
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

                                <div className="header__button">
                                    <a href="/">
                                        {t("header.button-presale-text")}
                                    </a>
                                </div>
                            </div>

                            <div className="presale-contract__title">
                                <h2 className="presale-contract__title-text">
                                    {t("presale-contract.title")}
                                </h2>
                                <div
                                    className="presale-contract__hash"
                                    style={{
                                        backgroundImage:
                                            "url(images/presale_border.png)",
                                    }}
                                >
                                    <div className="presale-contract__hash-row">
                                        <div className="label">
                                            {t("presale-contract.text-1")}:
                                        </div>
                                        <div className="value">
                                            0x61a960C3F213B80EaC761e2f996414AB52C08985
                                        </div>
                                    </div>
                                    <div className="presale-contract__hash-row">
                                        <div className="label">
                                            {t("presale-contract.text-2")}:
                                        </div>
                                        <div className="value">
                                            0xd3c1ed1e263bb16951B054d670Ff9eAf6b8391Df
                                        </div>
                                    </div>
                                </div>
                                <button className="presale-contract__button">
                                    {t("presale-contract.button-text")}
                                </button>
                            </div>
                        </header>
                    </div>
                </section>

                <section className="presale-amount">
                    <div className="presale-amount__body">
                        <h3 className="presale-amount__title">
                            {t("presale-amount.title")}: 25,000,000.0000
                        </h3>
                        <div className="presale-amount__rows">
                            <div className="presale-amount__row">
                                <div className="label">
                                    <span>{t("presale-amount.label-1")}:</span>
                                </div>
                                <div className="value">
                                    <div className="value__number">
                                        <span>0,00011</span>
                                    </div>
                                    <div className="value__button">
                                        <button>
                                            {t(
                                                "presale-amount.row-button-text"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="presale-amount__row">
                                <div className="label">
                                    <span>{t("presale-amount.label-2")}:</span>
                                </div>
                                <div className="value">
                                    <div className="value__number">
                                        <span>0</span>
                                    </div>
                                    <div className="value__button">
                                        <button>
                                            {t(
                                                "presale-amount.row-button-text"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="presale-amount__row">
                                <div className="label">
                                    <span>{t("presale-amount.label-3")}:</span>
                                </div>
                                <div className="value">
                                    <div className="value__number">
                                        <span>0</span>
                                    </div>
                                    <div className="value__button">
                                        <button>
                                            {t(
                                                "presale-amount.row-button-text"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="presale-amount__button">
                            {t("presale-amount.button-text")}
                        </button>
                        <p className="presale-amount__total">
                            <span className="balance-1">
                                {t("presale-amount.label-4")}: 0.0000
                            </span>
                            <span className="balance-2">
                                {t("presale-amount.label-5")}: 0.0000
                            </span>
                            <span className="address">
                                {t("presale-amount.label-6")}:
                                0x93939492939492934992934929349293949234
                            </span>
                        </p>
                    </div>
                </section>
            </main>

            <Footer link="/" text={t("footer.button-presale-text")} />
        </div>
    );
}
