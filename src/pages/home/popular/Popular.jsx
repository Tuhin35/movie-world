import '../Home/style.scss'
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Popular = () => {
    const [endpoint,setEndpoint] = useState('movie')
    const {data,loading} = useFetch(`/${endpoint}/popular`)
    const onTabChange = (tab) =>{
        setEndpoint(tab ==="Movie"?"movie":"tv")
    }
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What is Popular</span>
            <SwitchTabs data={["Movie","Tv Shows"]} 
            onTabChange={onTabChange}/>

        </ContentWrapper>
        <Carousel data={data?.results}
        endpoint={endpoint}
        loading={loading} />
    </div>
  )
}

export default Popular