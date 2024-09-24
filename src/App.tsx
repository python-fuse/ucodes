import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BlurFade from "./components/magicui/blur-fade";

function App() {
  return (
    <div className="lg:px-40">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <BlurFade delay={0.5}>
                  <Home />
                </BlurFade>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
