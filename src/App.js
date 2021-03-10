import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
function App() {
    return (
        <div className="App">
            <Header />
            <Products />
            {/* <ProductDetail /> */}
            <Footer />
        </div>
    );
}

export default App;
