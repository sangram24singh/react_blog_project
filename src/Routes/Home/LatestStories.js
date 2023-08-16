import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'
import "./Home.style.css"

const LatestStories = () => {
  let [count] = useContext(store)
  return (
    <div>
      <div>
      <div className='myhead'><Header headertext={"Latest Stories"}/></div>
      <div>
            <div className='mylatest12'>
                {count.filter((item) => item.cat === 'the latest').map((d, index) => {
                    return (
                        <div className='myfooter'>
                          <div>
                
                          {/* <img src={d.img} alt="" height={"150"}/> */}
                          <h2>Catch wave with <br /> an adventure guide</h2> <hr />
                          <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. <br /> Aspernatur voluptate eos porro <br /> eius cupiditate est dolores voluptatibus <br /> odit doloremque dolorum expedita<br /> Distinctio, consequatur?</p>
                          <p>{d.para}</p>
                          
                          </div>
          
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    <hr style={{width:"95%"}}/>
    </div>
  )
}

export default LatestStories