import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Paper} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const PrivacyPolicy = () => {
    return (
        <Container maxWidth="md">
            <div style={{margin: 10}}>
                <NavLink to={'/'}>
                    <Button>
                        Назад
                    </Button>
                </NavLink>
            </div>
            <Paper elevation={3} style={{padding: '20px', marginTop: '20px'}}>
                <Typography variant="h4" gutterBottom>
                    Политика безопасности LogicLovers
                </Typography>
                <Typography variant="body1" paragraph>
                    Мы в LogicLovers серьезно относимся к безопасности ваших данных. Наша политика безопасности
                    разработана для защиты вашей личной информации и обеспечения прозрачности в отношении того, как мы
                    собираем и используем данные.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    1. Сбор информации
                </Typography>
                <Typography variant="body1" paragraph>
                    При регистрации на нашем сайте мы собираем следующую информацию:
                    <ul>
                        <li>Имя пользователя (username)</li>
                        <li>Адрес электронной почты (email)</li>
                        <li>Пароль (в зашифрованном виде)</li>
                    </ul>
                    Для подписки на рассылку мы используем только ваш адрес электронной почты.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    2. Использование информации
                </Typography>
                <Typography variant="body1" paragraph>
                    Собранная информация используется исключительно для:
                    <ul>
                        <li>Аутентификации пользователей на сайте</li>
                        <li>Отправки информационных рассылок (только с вашего согласия)</li>
                        <li>Улучшения качества наших услуг</li>
                    </ul>
                </Typography>
                <Typography variant="h5" gutterBottom>
                    3. Защита информации
                </Typography>
                <Typography variant="body1" paragraph>
                    Мы применяем современные методы шифрования для защиты ваших данных. Пароли хранятся в зашифрованном
                    виде и никогда не передаются третьим лицам.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    4. Доступ к информации
                </Typography>
                <Typography variant="body1" paragraph>
                    Доступ к вашей личной информации имеют только авторизованные сотрудники LogicLovers, которым эта
                    информация необходима для обеспечения функционирования сайта и предоставления услуг.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    5. Ваши права
                </Typography>
                <Typography variant="body1" paragraph>
                    Вы имеете право в любое время:
                    <ul>
                        <li>Получить доступ к своей личной информации</li>
                    </ul>
                </Typography>
                <Typography variant="h5" gutterBottom>
                    6. Изменения в политике безопасности
                </Typography>
                <Typography variant="body1" paragraph>
                    Мы оставляем за собой право вносить изменения в нашу политику безопасности. О всех существенных
                    изменениях мы будем уведомлять пользователей через наш сайт или по электронной почте.
                </Typography>
                <Typography variant="body1" paragraph>
                    Если у вас есть вопросы относительно нашей политики безопасности, пожалуйста, свяжитесь с нами по
                    адресу: logiclovers@yandex.ru
                </Typography>
            </Paper>
        </Container>
    );
};

export default PrivacyPolicy;
