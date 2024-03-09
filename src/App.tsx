import "./App.css";
import Layout from "./components/Layout/Layout";
import Chat from "./pages/Chat";

function App() {
  return (
    <h1 className="text-3xl font-bold ">
      <Layout>
        <Chat />
      </Layout>
    </h1>
  );
}

export default App;
