import { ConfigProvider, theme , App as AntdApp } from "antd";
import Router from "./Router";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <AntdApp>
        <div className="bg-zinc-800 text-white min-h-dvh">
          <Router />
        </div>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;