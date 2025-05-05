// import Menu from './components/Menu/Menu'
import BuildNewCommerce from './buildNewCommerce/buildNewCommerce'
import HighlightCards from './HighlightCards/highlightCards'
import ImageSection from './ImagesSection/imageSection'
import KnowledgeSection from './KnowledgeSection/knowledgeSection'
import OurExpertise from './OurExpertiesSection/ourExpertise'
import ContactForm from './ContactForm/contactform'
import IntroVideo from './IntroVideo/introvideo'
// import PartnerSection from './PartnerSection/partnerSection'



function Home() {
  return (
    <>
    {/* <Menu /> */}
    <IntroVideo 
      videoSrc="./assets/DdcWebsiteVideo.mp4" 
      posterImage="/abstract-background.png"
      overlayOpacity={0.5}
      autoPlay={true}
      muted={true}
      loop={true}/>

    <BuildNewCommerce />
    {/* <PartnerSection /> */}
    <OurExpertise />
    <ImageSection />
    <HighlightCards />
    <KnowledgeSection/>
    <ContactForm />
    </>
  )
}

export default Home
