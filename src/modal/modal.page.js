import { useState } from 'react';
import { Button, Modal } from 'antd'; 

function Home() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>Open Modal</Button>

            <Modal title="Fluminense" visible={isModalVisible} onOk={closeModal} onCancel={closeModal}>
                <p>O bom torcedor, torce pelo Fluminense</p>
            </Modal>
        </>
    )
}
export default Home;
