import React,{useContext} from 'react'
import { Header, Logo, TopNavigation } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Bollywood.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      <Header headertext={"Top Post"}/>
      <div>
        <img src="https://miro.medium.com/max/1024/1*XNEc7sImHVsOADV_iY8xYQ.png" alt="" height={"270px"}/>
        <h4>images in my mind too: a strapping man he is mine<br /> Lorem ipsum dolor sit amet.</h4>
      </div>
      <div>
                {count.filter((item) => item.cat === 'bollywoodtop').map((d, index) => {
                    return (
                        <div style={{display:"flex", gap:"15px", marginTop:"25px"}}>
                          <div>
                            <Link to={`/dynamic/${d.id}`}>
                             <img src={d.img} alt="" className='img3'/>
                            </Link>
                          </div>
                          <div>
                          <h5>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.</h5>
                          <p></p>
                          </div>
                      
                        </div>
                    )
                })}
        </div>
        <div style={{height:"410px",width:"320px", border:"2px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}><p>Advertisement</p></div>
    </div>
    
  )
}

export default TopPost