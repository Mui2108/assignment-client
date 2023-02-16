import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Layouts from "@layouts/Layouts";
import NoMatch from "@components/NoMatch";
import Login from "@pages/login/login";
import { routers } from "./routers";
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
