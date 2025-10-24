import { useEffect, useState } from 'react';
import './Hero.css';
const Hero = () => {

    const[deal,setDeal]= useState("");

    function checkDeal(){
        if(deal){
             setDeal('Big Discount coming soon! on our new courses');
        }
        else{
            setDeal("");
        }
    }

    useEffect(()=>{
        setDeal('Big Discount coming soon! on our new courses');
    },[]);


    return (
        <div className="hero-section">
            <div className="hero1">
                <h6>Hi. There is your mentor, teacher 'Mohammad Hayat'</h6>
                <h3>welcome buddy. We are lunching big secret deal....</h3>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima sint quasi quos, ipsum repellat!</p>
                <p>If you want to know more, click the button below.</p>
                <button>Learn More</button><button style={{marginLeft:'10px'}} onClick={checkDeal}>{deal ==="" ? 'Hide Deal' : 'Show Deal'}</button>
                
                <div style={{height:'10px'}}><h3>{deal}</h3></div>
            </div>
            <div className="hero2">
                <img src="https://png.pngtree.com/png-clipart/20240508/original/pngtree-coding-clipart-guy-in-glasses-computer-tech-cartoon-vector-illustration-png-image_15035827.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;