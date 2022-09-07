
import './App.css';
import Banner from './BaiTapThucHanhLayout/Body/Banner/Banner';
import Header from './BaiTapThucHanhLayout/Header/Header';
import Item from './BaiTapThucHanhLayout/Body/Item/Item';
import Footer from './BaiTapThucHanhLayout/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Item/>
      <Footer/>
    </div>
  );
}

export default App;
