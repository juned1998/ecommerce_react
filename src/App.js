import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />

            <Switch>
                <Route exact path="/:id" component={ProductDetail} />
                <Route path="/" component={Products} />
                <Redirect to="/" component={Products} />
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
