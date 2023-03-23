import Money from "./components/Money/Money";
import ProductList from "./components/ProductList/ProductList";
import Result from "./components/Result/Result";
function App() {
  return (
    <div className="container">
      <Money />
      <ProductList />
      <Result />
    </div>
  );
}

export default App;
