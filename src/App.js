import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import SwipeableEdgeDrawer from "./pages/tarefa/SwipeableEdgeDrawer";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <SwipeableEdgeDrawer />
    </div>
  );
}

export default App;
