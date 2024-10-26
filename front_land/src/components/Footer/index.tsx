import {Row, Col, Dropdown} from "antd";
import {withTranslation, TFunction} from "react-i18next";
import {SvgIcon} from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
    FooterSection,
    Title,
    NavLink,
    Extra,
    LogoContainer,
    Para,
    Large,
    Chat,
    Empty,
    FooterContainer,
    Language,
    Label,
    LanguageSwitch,
    LanguageSwitchContainer,
} from "./styles";
import MyDropdown from "../../common/CustomDropDown";
import React from "react";

interface SocialLinkProps {
    href: string;
    src: string;
}

export const SocialLink = ({href, src}: SocialLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={src}
            aria-label={src}
        >
            <SvgIcon src={src} width="115px" height="115px"/>
        </a>
    );
};
const Footer = ({t}: { t: TFunction }) => {
    const handleChange = (language: string) => {
        i18n.changeLanguage(language);
    };


    // @ts-ignore
    return (
        <div>
        <FooterSection>
            <Container>
                <Row justify="space-between">
                    <Col lg={10} md={10} sm={12} xs={12}>
                        <Language>{t("Контакт")}</Language>
                        <Large to="/"  onClick={() => alert('Пока недоступно')}>{t("Расскажите нам всё")}</Large>
                        <Para>
                            {t(`Есть ли у вас вопрос? Не стесняйтесь обращаться.`)}
                        </Para>
                        <a href="mailto:logiclovers@yandex.ru">
                            <Chat>{t(`Давайте поговорим`)}</Chat>
                        </a>
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <Title>{t("Политика")}</Title>
                        <Large to="/privacy-policy">{t("Безопасность приложения")}</Large>
                        <Large to="/software-principles">{t("Принципы программного обеспечения")}</Large>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Empty/>
                        <Large to="/"  onClick={() => alert('Пока недоступно')}>{t("Центр поддержки")}</Large>
                        <Large to="/"  onClick={() => alert('Пока недоступно')}>{t("Поддержка клиентов")}</Large>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col lg={10} md={10} sm={12} xs={12}>
                        <Empty/>
                        <Language>{t("Адрес")}</Language>
                        <Para>г. Владивосток</Para>
                        <Para>Гоголя 41</Para>
                        <Para>ВВГУ</Para>
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <Title>{t("Компания")}</Title>
                        <Large to="/about-us">{t("О нас")}</Large>
                        <Large to=""  onClick={() => alert('Пока недоступно')}>{t("Блог")}</Large>
                        <Large to="/"  onClick={() => alert('Пока недоступно')}>{t("Пресса")}</Large>
                        <Large to="/"  onClick={() => alert('Пока недоступно')}>{t("Карьера и культура")}</Large>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Label htmlFor="select-lang">{t("Язык")}</Label>
                        <LanguageSwitchContainer>
                            <LanguageSwitch onClick={() => alert('Пока недоступно')}>
                                <SvgIcon
                                    src="russia.svg"
                                    aria-label="homepage"
                                    width="30px"
                                    height="30px"
                                />
                            </LanguageSwitch>
                        </LanguageSwitchContainer>
                    </Col>
                </Row>
            </Container>
        </FooterSection>
        <Extra>
            <Container border={true}>
                <Row
                    justify="space-between"
                    align="middle"
                    style={{paddingTop: "3rem"}}
                >
                    <NavLink to="/">
                        <LogoContainer>
                            <SvgIcon src={'лого_логиг_4k_bls.svg'} width={'340'} height={'320'}/>
                        </LogoContainer>
                    </NavLink>
                    {/*@ts-ignore*/}
                    <LogoContainer>
                        <a style={{marginLeft:138}} href={'https://github.com/Vladimirus051'}>
                            <SvgIcon src={'github.svg'} width={'110'} height={'110'}/>
                        </a>
                    </LogoContainer>

            </Row>
        </Container>
        </Extra>
</div>
)
    ;
};

export default withTranslation()(Footer);
