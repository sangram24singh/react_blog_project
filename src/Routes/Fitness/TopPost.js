import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Fitness.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      {/* <h1>Top post</h1> */}
      <Header headertext={"Top Post"}/>
      <div>
        <img src="https://7esl.com/wp-content/uploads/2018/03/sport-and-exercise.jpg" alt="" height={"270px"}/>
        <h4>images in my mind too: a strapping man he is mine<br /> Lorem ipsum dolor sit amet.</h4>
      </div>
      <div>
                {count.filter((item) => item.cat === 'fitnesstop').map((d, index) => {
                    return (
                        <div style={{display:"flex", gap:"15px", marginTop:"25px"}}>
                          <div>
                            <Link to={`/dynamic/${d.id}`}>
                             <img src={d.img} alt="" className='img3'/>
                            </Link>
                          </div>
                          <div>
                          <h5>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.</h5>
                          
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