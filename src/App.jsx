import { Navbar, Footer } from "./components";
import BackToTopButton from "./components/BackToTopButton";
import Preloader from "./components/PreLoader";
import Router from "./Router";

const App = () => {
  return (
    <main className="w-full overflow-hidden">
      <Preloader />
      <BackToTopButton />
      <Navbar />
      <Router />
      <Footer />
    </main>
  );
};

export default App;
