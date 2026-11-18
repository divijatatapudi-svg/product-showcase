import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Greeting name="Divija" />

      <h2>Welcome to My Product Store</h2>

      <ProductCard
        title="Wireless Headphones"
        price={2499}
        inStock={true}
      />

      <ProductCard
        title="Mechanical Keyboard"
        price={3499}
        inStock={false}
      />
    </main>
  );
}
