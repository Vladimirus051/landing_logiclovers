import React, { useState } from 'react';
import { Dropdown, Menu, Button, Modal } from 'antd';
import content from '../../content/ForumContent.json'; // Импортируем JSON файл

const MyDropdowns = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const showModal = (content:any) => {
        setModalContent(content);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const createMenu = (items: any) => (
        <Menu>`
            {items.map((item: { key: React.Key | null | undefined; content: any; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <Menu.Item key={item.key} onClick={() => showModal(item.content)}>
                    {item.title}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div style={{ padding: '20px' }}>
            {/* Выпадающий список для каждой темы */}
            <Dropdown overlay={createMenu(content.career.items)} overlayStyle={{ marginBottom: '10px' }}>
                <Button>{content.career.title}</Button>
            </Dropdown>

            <Dropdown overlay={createMenu(content.languages.items)} overlayStyle={{ marginBottom: '10px', marginLeft: '10px' }}>
                <Button>{content.languages.title}</Button>
            </Dropdown>

            <Dropdown overlay={createMenu(content.stacks.items)} overlayStyle={{ marginBottom: '10px', marginLeft: '10px' }}>
                <Button>{content.stacks.title}</Button>
            </Dropdown>

            <Dropdown overlay={createMenu(content.resources.items)} overlayStyle={{ marginBottom: '10px', marginLeft: '10px' }}>
                <Button>{content.resources.title}</Button>
            </Dropdown>

            <Dropdown overlay={createMenu(content.jobMarket.items)} overlayStyle={{ marginBottom: '10px', marginLeft: '10px' }}>
                <Button>{content.jobMarket.title}</Button>
            </Dropdown>

            <Modal title="Информация" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{modalContent}</p>
            </Modal>
        </div>
    );
};

export default MyDropdowns;
