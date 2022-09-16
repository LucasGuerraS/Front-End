import Rotas from "./routes/Rotas";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        
      }}
    >
      <Rotas />
    </div>
  );
};

export default App;
