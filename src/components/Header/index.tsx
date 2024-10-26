import React, {useState, useEffect} from "react";
import {Row, Col, Drawer, Dropdown, Menu} from "antd";
import {withTranslation, TFunction} from "react-i18next";
import Container from "../../common/Container";
import {SvgIcon} from "../../common/SvgIcon";
import {Button} from "../../common/Button";
import {
    HeaderSection,
    LogoContainer,
    Burger,
    NotHidden,
    Menu as StyledMenu,
    CustomNavLinkSmall,
    Label,
    Outline,
    Span,
    Username
} from "./styles";
import {NavLink, useHistory} from "react-router-dom";

const Header = ({t}: { t: TFunction }) => {
    const [visible, setVisibility] = useState(false);
    const [username, setUsername] = useState<string | null>(null);
    const history = useHistory();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const toggleButton = () => {
        setVisibility(!visible);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUsername(null);
        history.push('/');
    };

    const menu = (
        <Menu>
            <Menu.Item onClick={handleLogout}>
                {t("Выйти")}
            </Menu.Item>
        </Menu>
    );

    const MenuItem = () => {
        const scrollTo = (id: string) => {
            const element = document.getElementById(id) as HTMLDivElement;
            element.scrollIntoView({
                behavior: "smooth",
            });
            setVisibility(false);
        };
        let history = useHistory();
        // @ts-ignore
        return (
            <>
                <CustomNavLinkSmall style={{paddingRight: "25px"}} onClick={() => {
                    history.push('/about-us')
                }}>
                    <Span>{t("О нас")}</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall style={{paddingRight: "20px"}} onClick={() => {
                    history.push('/privacy-policy')
                }}>
                    <Span>{t("Безопасность")}</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall style={{width: "165px"}} onClick={() => scrollTo("contact")}>
                    <Span>
                        <Button>{t("Контакты")}</Button>
                    </Span>
                </CustomNavLinkSmall>

                {username ? (

                    <Dropdown overlay={menu} trigger={['click']}>
                        <Username>
                            <Span>{username}</Span>
                        </Username>
                    </Dropdown>
                ) : (
                    <CustomNavLinkSmall style={{width: "165px"}}>

                            <Button onClick={()=>{alert("Пока недоступно")}}>{t("Авторизация")}</Button>

                    </CustomNavLinkSmall>
                )}
            </>
        );
    };

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <LogoContainer to="/" aria-label="homepage">
                        <SvgIcon src="logo.svg" width="250px" height="64px"/>
                    </LogoContainer>
                    <NotHidden>
                        <MenuItem/>
                    </NotHidden>
                    <Burger onClick={toggleButton}>
                        <Outline/>
                    </Burger>
                </Row>
                <Drawer closable={false} open={visible} onClose={toggleButton}>
                    <Col style={{marginBottom: "2.5rem"}}>
                        <Label onClick={toggleButton}>
                            <Col span={12}>
                                <StyledMenu>Меню</StyledMenu>
                            </Col>
                            <Col style={{marginLeft: '100px'}} span={12}>
                                <Outline/>
                            </Col>
                        </Label>
                    </Col>
                    <MenuItem/>
                </Drawer>
            </Container>
        </HeaderSection>
    );
};

export default withTranslation()(Header);
