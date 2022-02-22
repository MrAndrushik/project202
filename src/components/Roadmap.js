import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Roadmap() {
    const { t } = useTranslation();

    const roadmapCards = [
        {
            status: "ready",
            img_url: "images/media_1.png",
            description: t("block-6.card-text-1"),
            num_1: "Q1",
            num_2: "22",
        },
        {
            status: "pre",
            description: t("block-6.card-text-2"),
            num_1: "Q2-Q3",
            num_2: "22",
        },
        {
            status: "process",
            description: t("block-6.card-text-3"),
            num_1: "Q3",
            num_2: "23",
        },
        {
            status: "process",
            description: t("block-6.card-text-4"),
            num_1: "Q4",
            num_2: "23",
        },
        {
            status: "process",
            description: t("block-6.card-text-5"),
            num_1: "Q1",
            num_2: "24",
        },
        {
            status: "process",
            description: t("block-6.card-text-6"),
            num_1: "Q3",
            num_2: "24",
        },
    ];

    return (
        <section className="roadmap" id="roadmap">
            <div className="roadmap__body">
                <h2 className="roadmap__title">{t("block-6.title")}</h2>
                <div className="roadmap__items">
                    <Swiper slidesPerView={"auto"}>
                        {roadmapCards.map((item, index) => (
                            <SwiperSlide
                                className={"roadmap__item " + item.status}
                                key={index}
                            >
                                <p className="roadmap__item-text">
                                    {item.description}
                                </p>
                                <div className="roadmap__item-image">
                                    {item.img_url ? (
                                        <img src={item.img_url} alt="some" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="roadmap__item-count">
                                    <div className="num-1">{item.num_1}</div>
                                    <div className="divider">/</div>
                                    <div className="num-2">{item.num_2}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="roadmap__button">
                    <Link to="/presale">{t("block-6.button-text")}</Link>
                </div>
            </div>
        </section>
    );
}
