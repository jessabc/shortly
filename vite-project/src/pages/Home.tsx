import { useState } from "react"
import { BottomBanner } from "../components/BottomBanner"
import { HeroBanner } from "../components/HeroBanner"
import { InputForm } from "../components/InputForm"
import { LinkCard } from "../components/LinkCard"
import { StatisticsSection } from "../components/StatisticsSection"

function Home() {

  const [linkData, setLinkData] = useState<Link[]>([])
 
  return ( 
      <div >
        <HeroBanner/>
        <InputForm setLinkData={setLinkData} />
        {linkData.map((data, index) => <LinkCard key={index} data={data}/>)}
        <StatisticsSection/>
        <BottomBanner/>
      </div>
  )
}

export default Home




  



