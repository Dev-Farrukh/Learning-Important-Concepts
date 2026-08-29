import { ConfigProvider, theme } from "antd";
import Router from "./Router";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="bg-zinc-800 text-white min-h-dvh">
        <Router />
      </div>
    </ConfigProvider>
  );
};

export default App;