import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {List, ListItem, ListItemText, Paper} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const SoftwarePrinciples = () => {
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
                    Принципы программного обеспечения LogicLovers
                </Typography>
                <Typography variant="body1" paragraph>
                    В LogicLovers мы придерживаемся ключевых принципов разработки программного обеспечения, которые
                    помогают нам создавать качественные, надежные и эффективные продукты.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    1. Основные принципы
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="KISS (Keep It Simple, Stupid)"
                            secondary="Мы стремимся к простоте в дизайне и реализации, избегая ненужной сложности."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="DRY (Don't Repeat Yourself)"
                            secondary="Мы избегаем дублирования кода, используя абстракции и модульность."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="SOLID принципы"
                            secondary="Мы следуем принципам SOLID для создания более гибкого, понятного и поддерживаемого кода."
                        />
                    </ListItem>
                </List>

                <Typography variant="h5" gutterBottom>
                    2. Процесс разработки
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Итеративная разработка"
                            secondary="Мы разрабатываем наше ПО небольшими итерациями, постоянно улучшая продукт."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Непрерывная интеграция"
                            secondary="Мы регулярно интегрируем изменения в основную кодовую базу для раннего обнаружения проблем."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Раннее тестирование"
                            secondary="Мы начинаем тестирование на ранних этапах разработки для обеспечения качества продукта."
                        />
                    </ListItem>
                </List>

                <Typography variant="h5" gutterBottom>
                    3. Архитектурные принципы
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Модульность"
                            secondary="Мы разделяем нашу систему на независимые, взаимозаменяемые модули."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Принцип наименьшего удивления"
                            secondary="Наши компоненты ведут себя предсказуемо и интуитивно понятно."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Обратная совместимость"
                            secondary="Мы стремимся поддерживать функциональность предыдущих версий в новых релизах."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Flux архитектура (React)"
                            secondary="Мы используем однонаправленный поток данных для управления состоянием приложения на клиентской стороне."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="MVC архитектура (Spring)"
                            secondary="На серверной стороне мы применяем паттерн Model-View-Controller для четкого разделения логики."
                        />
                    </ListItem>
                </List>

                <Typography variant="h5" gutterBottom>
                    4. Дополнительные принципы
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Принцип разделения ответственности"
                            secondary="Каждый компонент системы отвечает за решение одной конкретной задачи."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Принцип открытости/закрытости"
                            secondary="Наши модули открыты для расширения, но закрыты для модификации."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Непрерывное развертывание"
                            secondary="Мы автоматизируем процесс доставки кода в продакшн для быстрого выпуска новых функций."
                        />
                    </ListItem>
                </List>

                <Typography variant="body1" paragraph>
                    Следуя этим принципам, мы создаем программное обеспечение, которое не только отвечает текущим
                    потребностям, но и легко адаптируется к будущим изменениям, обеспечивая высокое качество и
                    эффективность нашей работы.
                </Typography>
            </Paper>
        </Container>
    );
};

export default SoftwarePrinciples;
