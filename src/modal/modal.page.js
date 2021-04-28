
import { Button } from 'antd'; 
import { useModalContext } from "./modal.context";

function Home() {
    const { openModal } = useModalContext();

    const showModal = () => openModal({message: "Fluminense será o campeão 2022!"});

    return (
        <>
            <Button type="primary" onClick={showModal}>Open Modal</Button>
        </>
    )
}
export default Home;
