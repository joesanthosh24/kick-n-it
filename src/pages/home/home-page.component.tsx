import {
  HomeContainer,
  ImageTextContainer,
  LandingImage,
  LandingPageTextContainer,
  PageDescription,
  PageTitle,
  ShopNowButton,
} from "./home-page.styles";
import landingPageLogo from "../../assets/images/landing-page-image.png";

const HomePage = () => {
  return (
    <HomeContainer>
      <ImageTextContainer>
        <LandingImage src={landingPageLogo} alt="Landing Page Shoe" />
        <LandingPageTextContainer>
          <PageTitle>KICK'N IT</PageTitle>
          <PageDescription>Shop our latest Shoes</PageDescription>
          <ShopNowButton>Shop Now  </ShopNowButton>
        </LandingPageTextContainer>
      </ImageTextContainer>
    </HomeContainer>
  );
};

export default HomePage;
