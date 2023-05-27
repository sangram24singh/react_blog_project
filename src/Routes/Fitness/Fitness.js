import React, { useContext } from "react"
import TopPost from "./TopPost"
import ArticlesList from "./ArticlesList"
import "./Fitness.style.css"
import { TopNavigation } from "../../Component/Common"


let Bollywood = () =>{
    
    return(
       <div>
        <TopNavigation/>
        <div className="bollywood">
            <ArticlesList/>
            <TopPost/>
       </div>
       </div>
    )
}
export default Bollywood