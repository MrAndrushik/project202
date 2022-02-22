import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function TopBlock(props) {
    const { t } = useTranslation();

    return (
        <section
            className="top-block"
            style={{ backgroundImage: "url(images/top_block_bg.png)" }}
        >
            <Header link={`${props.link}`} text="Presale Token" />

            <div className="top-block__body">
                <div className="top-block__top">
                    <div className="top-block__left">
                        <h2 className="top-block__left-title">
                            {t("block-1.title-1")}
                        </h2>
                        <img
                            className="top-block__right-image"
                            src="images/top_block_2.png"
                            alt="some"
                        />
                        <div className="top-block__left-button">
                            <Link to={`${props.link}`}>
                                {t("block-1.button-text")}
                            </Link>
                        </div>
                    </div>

                    <div className="top-block__right">
                        <img
                            className="top-block__right-image"
                            src="images/top_block_2.png"
                            alt="some"
                        />
                    </div>
                </div>

                <div className="top-block__bottom">
                    <h2 className="top-block__title">{t("block-1.title-2")}</h2>
                    <p className="top-block__text">{t("block-1.text-1")}</p>
                    <p className="top-block__text">{t("block-1.text-2")}</p>
                </div>
            </div>
        </section>
    );
}
