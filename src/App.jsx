import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
