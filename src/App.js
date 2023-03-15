import { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemList from "./Components/ItemList";

function App() {
  const [imageFetch, setImageFetch] = useState();
  useEffect(() => {
    fetch(
      "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6"
    )
      .then((res) => res.json())
      .then((result) => setImageFetch(result.data.products))
      .catch((er) => console.log(er));
  }, []);

  if (!imageFetch) {
    return <Loading />;
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <ItemList item={imageFetch} />
      <Footer />
    </>
  );
}

export default App;
