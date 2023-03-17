import { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemList from "./Components/ItemList";
import styled from "styled-components";
import LandingImage from "./Components/SubComponents/LandingImage";
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
  console.log(imageFetch);
  //I have no basis for the left side image when on desktop
  //Very basic Logic to remove to potential empty Image if the API returns undefined
  let imageUrl;
  const randomNumber = Math.floor(Math.random() * imageFetch.length);
  if (!imageFetch[randomNumber].imageURLs[randomNumber]) {
    imageUrl = imageFetch[2].imageURLs[2];
  } else {
    imageUrl = imageFetch[randomNumber].imageURLs[randomNumber];
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <LandingImage imagesrc={imageUrl} />
      <SideImageContainer>
        <ItemList item={imageFetch} />
      </SideImageContainer>
      <Footer />
    </>
  );
}

const SideImageContainer = styled.div`
  @media only screen and (min-width: 415px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
`;
export default App;
