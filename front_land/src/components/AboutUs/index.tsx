import React from 'react';
import Container from "@material-ui/core/Container";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const AboutUs = () => {
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
                    О нас
                </Typography>
                <Typography variant="body1" paragraph>
                    Мы – команда студентов-энтузиастов из Владивостока, объединённых общей целью: сделать мир IT более
                    доступным и понятным для всех. Мы понимаем, что многие люди хотят начать карьеру в сфере
                    информационных технологий, но часто теряются в огромном объеме информации и не знают, с чего начать.
                </Typography>
                <Typography variant="body1" paragraph>
                    Наш проект LogicLovers создан для того, чтобы упростить процесс обучения и входа в IT-индустрию. Мы
                    стремимся сделать этот путь более комфортным и понятным для каждого. Наш лендинг – это ваш проводник
                    в мире технологий, где вы найдете актуальную информацию о языках программирования, технологических
                    стеках и образовательных ресурсах.
                </Typography>
                <Typography variant="body1" paragraph>
                    Присоединяйтесь к нам в нашем стремлении сделать обучение IT приятным и эффективным. Открывайте для
                    себя новые возможности в мире технологий. С нами вы всегда будете в курсе последних трендов и самых
                    востребованных навыков в IT-индустрии.
                </Typography>
                <Typography variant="body1">
                    Благодарим за интерес к нашему проекту. Желаем вам увлекательного путешествия в мир IT вместе с
                    LogicLovers!
                </Typography>
            </Paper>
        </Container>
    );
};

export default AboutUs;
