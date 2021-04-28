import { createContext, useContext, useState } from "react";

//context
const ModalContext = createContext({});


//construindo o estado global da minha "caixa modal" usando o provider
const ModalProvider = ({ children }) => {
    const [modalState, setState] = useState({visible: false});

    // o payload está passando a mensagem exibida na caixa modal
    const openModal = (payload) => setState({...payload, visible: true});

    const closeModal = () => setState({visible: false});

    return <ModalContext.Provider value={{modalState, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
}


//Criando um hook para gerenciar nosso estado modal
const useModalContext = () => {
    const context = useContext(ModalContext);

    return context;
}
export { ModalProvider, useModalContext }