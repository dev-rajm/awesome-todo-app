import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NotificationPopUp from './components/NotificationPopUp';

const App = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Body />
      <NotificationPopUp />
      <Footer />
    </div>
  );
};

export default App;
