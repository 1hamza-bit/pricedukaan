import Image from "next/image";
import Header from "./Components/header";
import Footer from "./Components/footer";
import RootLayout from "./layout";
import ComparisonHub from "./Components/HomePage/hero";
import Layout from "./Components/Layouts";
import ProductSection from "./Components/HomePage/ProductSection";
import ProductDetail from "./Components/Detail";

export default function Home() {
  return (
    <div >
 
     <Layout>
       <ComparisonHub/>
       <ProductSection/>
     </Layout>
    
    </div>
  );
}
