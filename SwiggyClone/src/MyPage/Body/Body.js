import ShimmerEffect from '../ShimmerEffect/ShimmerEffect.js';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import jsonData from '../../SwiggyJsonData/myJson.json'
import {useState, useEffect} from 'react';

// *[@id="seo-core-layout"]/div[7]/div/div[1]/div[2]/a/div/div[1]/div/div/img

const Body = ()=>{
    const [data, setData] = useState();
    useEffect(()=>{
        
        getRestrauntData();
    }, [])

    // async function getRestrauntData(){
    //     // let prom = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //     // let resp = await prom.json();
    //     // console.log(resp)
    //     // setData(resp);
    // }

      async function getRestrauntData() {
          const mydata = setTimeout(()=>{setData(jsonData)},1000) ; // Parse JSON response
          console.log(mydata)
        //   setData(data);
      
      }

    console.log(data);

    return !data?<ShimmerEffect/>:(
        <div id="body">
         <Header/>  
        {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsdxtvuz2czmvdgcsggq"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q0t8dkpigeideecc1hun"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsdxtvuz2czmvdgcsggq"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uws6wm1xndcgtox6moif"} alt='myImage' className='myImage'/> */}


        <Footer/>
        </div>
    )
}
export default Body;