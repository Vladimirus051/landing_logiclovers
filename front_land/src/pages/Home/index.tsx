import React, { lazy, useState } from "react";

import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import InfoDropDownContent from "../../content/ForumContent.json";
import ExpandableContentBlock from "../../common/ExpandableContentBlock/ExpandableContentBlock";
import main_logo from '../../common/SvgIcon/лого_логиг_4k_bls.svg'
// @ts-ignore
import { Helmet } from "react-helmet";
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const Home = () => {
    const [isForumVisible, setIsForumVisible] = useState(true);

    const toggleForumVisibility = () => {
        setIsForumVisible(!isForumVisible);
    };

    return (
        <Container>
            <Helmet>
                <title>LogicLovers - Ваш путь в мир IT</title>
                <meta name="description" content="LogicLovers предлагает информацию о карьере в IT, языках программирования, технологических стеках, образовательных ресурсах и анализе рынка труда в сфере информационных технологий." />
                <meta name="keywords" content="IT, образование, программирование, карьера в IT, технологии, logiclovers, logiclovers.ru, языки программирования, Python, JavaScript, Java, C++, веб-разработка, анализ данных, машинное обучение, кибербезопасность, технологический стек, MERN, MEAN, LAMP, стартапы, онлайн-курсы, Coursera, Udemy, edX, рынок труда IT, разработка ПО, аналитик данных, DevOps, облачные технологии, искусственный интеллект, большие данные, цифровая трансформация, трудоустройство в IT" />
                <meta name="author" content="LogicLovers" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="LogicLovers - Ваш путеводитель в мире IT" />
                <meta property="og:description" content="Узнайте все о карьере в IT, популярных языках программирования, технологических стеках и образовательных ресурсах для успешного старта в сфере информационных технологий." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://logiclovers.ru" />
                <meta property="og:image" content={main_logo} />
            </Helmet>


            <ScrollToTop />
            <ContentBlock
                direction="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="developer.svg"
                id="intro"
            />
            <ContentBlock
                direction="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="graphs.svg"
                id="about"
            />

            <div id="forum" style={{ backgroundColor: "", padding: "20px", margin: "20px 0" }}>
                <h3>Форум</h3>
                <p>Здесь вы можете прочитать информацию о различных темах, связанных с IT.</p>

                {isForumVisible && (
                    <>
                        {InfoDropDownContent.career.items.map((item) => (
                            <ExpandableContentBlock
                                key={item.key}
                                direction="left"
                                title={item.title}
                                content={item.content}
                                icon=""
                                id={`career-${item.key}`}
                            />
                        ))}
                        {InfoDropDownContent.languages.items.map((item) => (
                            <ExpandableContentBlock
                                key={item.key}
                                direction="right"
                                title={item.title}
                                content={item.content}
                                icon=""
                                id={`languages-${item.key}`}
                            />
                        ))}
                        {InfoDropDownContent.stacks.items.map((item) => (
                            <ExpandableContentBlock
                                key={item.key}
                                direction="left"
                                title={item.title}
                                content={item.content}
                                icon=""
                                id={`stacks-${item.key}`}
                            />
                        ))}
                        {InfoDropDownContent.resources.items.map((item) => (
                            <ExpandableContentBlock
                                key={item.key}
                                direction="right"
                                title={item.title}
                                content={item.content}
                                icon=""
                                id={`resources-${item.key}`}
                            />
                        ))}
                        {InfoDropDownContent.jobMarket.items.map((item) => (
                            <ExpandableContentBlock
                                key={item.key}
                                direction="left"
                                title={item.title}
                                content={item.content}
                                icon=""
                                id={`jobMarket-${item.key}`}
                            />
                        ))}
                    </>
                )}
            </div>

            <ContentBlock
                direction="left"
                title={ProductContent.title}
                content={ProductContent.text}
                icon="waving.svg"
                id="product"
            />

            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
            />
        </Container>
    );
};

export default Home;
