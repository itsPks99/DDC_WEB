// import Menu from './components/Menu/Menu'
import BuildNewCommerce from './buildNewCommerce/buildNewCommerce'
import HighlightCards from './HighlightCards/highlightCards'
import ImageSection from './ImagesSection/imageSection'
import KnowledgeSection from './KnowledgeSection/knowledgeSection'
import OurExpertise from './OurExpertiesSection/ourExpertise'
import PartnerSection from './PartnerSection/partnerSection'


function Home() {
  return (
    <>
    {/* <Menu /> */}
    <BuildNewCommerce />
    <PartnerSection />
    <OurExpertise />
    <HighlightCards />
    <ImageSection />
    <KnowledgeSection/>
    </>
  )
}

export default Home
