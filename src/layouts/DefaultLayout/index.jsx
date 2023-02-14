import images from "../../assets/images";
import ChooseUs from "../../components/ChooseUs";
import ContentItem from "../../components/Content/ContentItem";
import Feature from "../../components/Feature";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";

function DefaultLayout() {
  return (
    <div id="defaultLayout">
      <Navbar />
      <Header />
      <ContentItem
        title="Apps for customers"
        desc="The general idea behind 'diversification' is to provide a Service ecosystem that fully caters to all customer needs from the smallest needs"
        imageSrc={images.devices.phones}
      />
      <Feature />
      <ContentItem
        title="Apps for Business"
        desc="One of the advantages of Multi-Industry Services is that it helps reduce the impact of unexpected fluctuations in any one industry. Bringing diverse consumers to businesses"
        imageSrc={images.devices.phones}
        isReverse
      />
      <ContentItem
        title="Apps for Managers"
        desc="Each branch of service provides is independent of the other business areas, but the activities of the services will be reported to senior management of the company that owns the application."
        imageSrc={images.devices.laptop}
      />
      <ChooseUs />
      <Services />
    </div>
  );
}

export default DefaultLayout;
