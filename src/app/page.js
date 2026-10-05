import Counter from "./components/Counter/page";
import ProductFilter from "./components/ProductFilter/page";
import ProductList from "./components/ProductList/page";
import SearchFunctionality from "./components/SearchFunctinality/page";
import HideShow from "./components/Hide-Show/page";
import SimpleForm from "./components/Simple-form/page";
import CharacterCounter from "./components/CharacterCounter/page";
import SecondCounter from "./components/UseEffect-counter/page";
import ApiCall from "./components/ApiIntigration/page";
import ShoppingCart from "./components/Shoppingcart/page";


export default function Home() {
    return (
        <div className="text-2xl">
            <p>1. Counter components</p>
            <Counter />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>2. Show / Hide Component</p>
            <HideShow />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>3. product List</p>
            <ProductList />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>4. product filter</p>
            <ProductFilter />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>5. search functionalitty</p>
            <SearchFunctionality />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>6. First Form</p>
            <SimpleForm />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>9. API Intigration / User details</p>
            <ApiCall />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>10.UseEffect Counter</p>
            <SecondCounter />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>11. Shopping Cart</p>
            <ShoppingCart />
            <h1>--------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <p>12. CharacterCounter</p>
            <CharacterCounter />

        </div>
    );
}