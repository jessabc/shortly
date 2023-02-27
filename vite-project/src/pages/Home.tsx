import { useEffect, useState } from "react"
import { BottomBanner } from "../components/BottomBanner"
import { HeroBanner } from "../components/HeroBanner"
import { InputForm } from "../components/InputForm"
import { LinkCard } from "../components/LinkCard"
import { StatisticsSection } from "../components/StatisticsSection"

function Home() {

  const [linkData, setLinkData] = useState<Link[]> (() => {
    // getting stored value
    const saved = localStorage.getItem("links") || "[]";
    const initialValue = JSON.parse(saved);
    return initialValue || "[]";
  })

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(linkData));
    console.log(linkData)
  }, [linkData]);
 
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




  



