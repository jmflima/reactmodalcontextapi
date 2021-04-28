import HomePage from './modal/modal.page';
import Modal from "./modal/modal.component";
import { ModalProvider } from "./modal/modal.context"

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <HomePage />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;
