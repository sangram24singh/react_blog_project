import React, { createContext, useState } from 'react'


export let store = createContext();


const ContextApi = (props) => {
    let [data, setData] = useState([
      {id:1, cat:"homebanner", img:"https://jooinn.com/images/modern-communication-technology.jpg", heading:"Our Blog Website Home"},
      
      {id:1, cat:"the latest", img:"https://www.reuters.com/resizer/oE5CiXNAT7qSydxNYf2jRaMvJNM=/1920x1920/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KWFB4SNZIVMBZBMO5FCAAIMEOU.jpg", heading:" The Latest Posts relates to current affairs", para:"images in my mind too: a strapping man"},
      {id:1, cat:"the latest", img:"https://cdn.shopify.com/s/files/1/0276/0635/1961/files/125_-_Gravity_Fitness_x_Lee_Wade_Turner_6_1600x.jpg?v=1672742668", para:"images in my mind too: a strapping man"},
      {id:1, cat:"the latest", img:"https://thumbs.dreamstime.com/b/abstract-health-medical-science-healthcare-icon-digital-technolo-technology-doctor-concept-modern-innovation-treatment-medicine-127462799.jpg", para:"images in my mind too: a strapping man"},
      {id:1, cat:"latestarticles", img:"https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,f_jpg,h_358,q_65,w_640/v1/clients/lasvegas-redesign/Welcome_Sign_0297_Final_b393c764-fabc-4bc9-87b6-3b77cd8134e5.jpg", heading:"The Latest articles by our Website", para:"images in my mind too: a strapping man"},
      {id:1, cat:"latestarticles", img:"https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg", heading:"I am a Khan. The name itself conjures", para:"images in my mind too: a strapping man"},
      {id:1, cat:"latestarticles", img:"https://e0.pxfuel.com/wallpapers/286/336/desktop-wallpaper-random-things-i-cant-explain-eggdog-thumbnail.jpg", heading:"I am a Khan. The name itself conjures", para:"images in my mind too: a strapping man"},
      {id:2, cat:"bollywood", img:"https://www.opindia.com/wp-content/uploads/2023/01/srk.jpg", heading:"I am a Khan. The name itself conjures", para:"images in my mind too: a strapping man"},
      {id:2, cat:"bollywood", img:"https://filmfare.wwmindia.com/content/2021/jan/hrithikroshan41609746261.jpg", heading:"I am a Khan. The name itself conjures", para:"images in my mind too: a strapping man"},
      {id:2, cat:"bollywood", img:"https://indianmemetemplates.com/wp-content/uploads/chabi-kaha-hai-1024x576.jpg", heading:"I am a Khan. The name itself conjures", para:"images in my mind too: a strapping man"},
      {id:2, cat:"bollywood", img:"https://www.scrolldroll.com/wp-content/uploads/2020/08/Accha-baat-nahi-hai-ye-Gangs-of-Wasseypur-memes.jpg", heading:"I am a Khan. The name itself conjures", para:"images in my mind too: a strapping man"},
      {id:2, cat:"bollywood", img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2017/09/newton-movie-review-1.jpg", heading:"I am a Khan. The name itself conjures", para:"images in my mind too: a strapping man"},
      {id:2, cat:"bollywood", img:"https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2018%2F11%2FFilm_Companion_Mirzapur_lead.jpg?auto=format%2Ccompress&fit=max&w=400&dpr=2.6"},
      {id:2, cat:"hollywood", img:"https://i.cdn.newsbytesapp.com/images/l70420220408162006.jpeg", heading:"Our Blog Website Hollywood Articles"},
      {id:2, cat:"hollywood", img:"https://lehren.com/wp-content/uploads/2022/12/Top-10-Hollywood-Movies-Of-2022.jpg", heading:"Our Blog Website Hollywood Articles"},
      {id:2, cat:"hollywood", img:"https://filmfare.wwmindia.com/content/2023/feb/besthollywoodactionmoviesdubbedinhindi21676020220.jpg", heading:"Our Blog Website Hollywood Articles"},
      {id:2, cat:"hollywood", img:"https://www.scrolldroll.com/wp-content/uploads/2021/01/Best-Hollywood-Movies-Of-2020-Featured.jpg", heading:"Our Blog Website Hollywood Articles"},
      {id:2, cat:"hollywood", img:"https://cdn.bollywoodmdb.com/fit-in/post/Hollywood_1671723863057.jpg", heading:"Our Blog Website Hollywood Articles"},
      {id:9, cat:"technology", img:"https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/Mean-Tech-stack.png", heading:"Technology Latest ariticles"},
      {id:9, cat:"technology", img:"https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg", heading:"Technology Latest ariticles"},
      {id:9, cat:"technology", img:"https://miro.medium.com/v2/resize:fit:678/1*l2tlJsFNg2tH6QizegKkqA.png", heading:"Technology Latest ariticles"},
      {id:9, cat:"technology", img:"https://mobisoftinfotech.com/resources/wp-content/uploads/2022/06/og-Best-Practices-for-Android-Development.png", heading:"Technology Latest ariticles"},
      {id:9, cat:"technology", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwPh1ZSbb7ne44P_RA_0Mwy0PBP_lcp8OcA&usqp=CAU", heading:"Technology Latest ariticles"},
      {id:9, cat:"fitness", img:"https://zelusphysiotherapy.com/wp-content/uploads/2022/04/Sports-Complex-Fitness-Classes.jpg", heading:"Fitness Latest news in market"},
      {id:9, cat:"fitness", img:"https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/b70263f96fdf344d5e6bc9e38b9fe84d4a56/i1080x475.jpg", heading:"Fitness Latest news in market"},
      {id:9, cat:"fitness", img:"https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/b70263f96fdf344d5e6bc9e38b9fe84d4a56/i1080x475.jpg", heading:"Fitness Latest news in market"},
      {id:9, cat:"fitness", img:"https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/b70263f96fdf344d5e6bc9e38b9fe84d4a56/i1080x475.jpg", heading:"Fitness Latest news in market"},
      {id:9, cat:"fitness", img:"https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/b70263f96fdf344d5e6bc9e38b9fe84d4a56/i1080x475.jpg", heading:"Fitness Latest news in market"},
      {id:9, cat:"food", img:"https://www.rd.com/wp-content/uploads/2020/11/RD-americas-favorite-foods-FT-Getty-Images-7-JValentine.jpg", heading:"Food Latest news in market"},
      {id:9, cat:"food", img:"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528", heading:"Food Latest news in market"},
      {id:9, cat:"food", img:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg", heading:"Food Latest news in market"},
      {id:9, cat:"food", img:"https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop", heading:"Food Latest news in market"},
      {id:9, cat:"food", img:"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop", heading:"Food Latest news in market"},


      {id:3, cat:"bollywoodtop", img:"https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0530%2Fr1019338_1296x729_16%2D9.jpg"},
      {id:3, cat:"bollywoodtop", img:"https://images.indianexpress.com/2023/05/Canva-Student-Font-57.jpg?w=414"},
      {id:3, cat:"bollywoodtop", img:"https://static.tnn.in/thumb/msid-100471038,updatedat-1684921079879,width-400,height-225,resizemode-75/100471038.jpg", heading:"I am a Khan. The name itself conjures"},
      {id:3, cat:"hollywoodtop", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZ26sByiO4ysNjxk5jF8QWuu2B7FBt8f1JA&usqp=CAU", heading:"Hollywood Movies Best Post"},
      {id:3, cat:"hollywoodtop", img:"https://static.toiimg.com/thumb/96377707.cms?width=680&height=512&imgsize=143016", heading:"Hollywood Movies Best Post"},
      {id:3, cat:"hollywoodtop", img:"https://www.bollywoodhungama.com/wp-content/uploads/2020/04/Hollywood-movies-have-amassed-only-Rs.-50-crores-at-the-India-box-office-in-the-first-quarter-of-2020.jpg"},
      {id:3, cat:"technologytop", img:"https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/biotech.png"},
      {id:3, cat:"technologytop", img:"https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200"},
      {id:3, cat:"technologytop", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGK68uXmwGcCSP2ZZQo9Ftq8OAV0ndYJPiQ&usqp=CAU"},
      {id:3, cat:"foodtop", img:"https://post.healthline.com/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-732x549-thumbnail.jpg"},
      {id:3, cat:"foodtop", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBv-YKP4tJNWV4LWwThf4wsLwrtU__vkiYQ&usqp=CAU"},
      {id:3, cat:"foodtop", img:"https://post.healthline.com/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-732x549-thumbnail.jpg"},
      
      {id:3, cat:"fitnesstop", img:"https://www.training.com.au/wp-content/uploads/Sports-Fitness-1.jpg"},
      {id:3, cat:"fitnesstop", img:"https://www.training.com.au/wp-content/uploads/Sports-Fitness-1.jpg"},
      {id:3, cat:"fitnesstop", img:"image.png"},
      {id:4, cat:"hollywood", img:"https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg", heading:"hollywood"},
      {id:5, cat:"technology", img:"https://community.thriveglobal.com/wp-content/uploads/2020/07/Modren-Tech.jpg", heading:"technology"},
      {id:6, cat:"fitness", img:"https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", heading:"fitness"},
      {id:7, cat:"food", img:"https://www.cookwithkushi.com/wp-content/uploads/2021/07/easy_paneer_paratha_recipe.jpg", heading:"Food Related articles"}
      

    ])
  return (
    <div>
      <store.Provider value={[data, setData]}>
        {props.children}
      </store.Provider>
    </div>
  )
}

export default ContextApi