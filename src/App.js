import './App.css';
import FastDelivery from './fastDelivery';
import Food from './food';
import Footer from './footer';
import Header from './header';
import WebApp from './webApp';
import WorkPlan from './workPlan';

function App() {
  return (
    <div className="App">
      <Header/>
      <WorkPlan/>
      <Food/>
      <FastDelivery/>
      <WebApp/>
      <Footer/>
    </div>
  );
}

export default App;
