import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import { routers } from "./routers/index";
import Login from "./pages/login/login";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          {routers.map((item, idx) =>
            item.path === "/" ? (
              <Route index element={item.component} key={item.name + idx} />
            ) : (
              <Route
                path={item.path}
                element={item.component}
                key={item.name + idx}
              />
            )
          )}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
