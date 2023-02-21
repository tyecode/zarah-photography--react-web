import { Navbar, Footer } from "./components";
import Router from "./Router";

const App = () => {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Router />
      <Footer />
    </main>
  );
};

export default App;
