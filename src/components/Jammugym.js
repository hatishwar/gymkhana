import React from 'react';
import card from '../Assets/card.jpg';
import card1 from '../Assets/card1.jpg';
import 'animate.css';


function Jammugym(){
    return (
        <div className="row my-5" id='jmugym'>
            
        <div className='col-5 offset-1'>
        <h6>About Club</h6>
            <h1>Jammu Gymkhana</h1>
            <p>Jammu Gymkhana is an institution with a rich tradition and history. At heart it is a sporting institution and has been host to a number of iconic sporting events over the years. Its membership is aspirational and it is recognized as a quality institution in the society at large and one of the pre-eminent clubs of India. It is represented by a lovely heritage building with a verandah at its heart from where all sports facilities and restaurants emanate.


A regular Bombay Gymkhana member is often someone who has grown up in the club, is comforted by its familiarity, enjoys and plays a number of sports and participates in its various social activities. They take pride when their sporting teams do well and enjoy the popularity of its social milieu. They develop strong bonds with fellow members leading often to enduring friendships...
</p>

<button  className='hvr-outline-in' id='readmore'>Read More...</button>
        </div>

        <div className='col-5'>
        <img src={card} id='jmugymimg1' className='animate__animated animate__bounce'/>
        <img src={card1} id='jmugymimg2'/>

        </div>
        </div>

    );
}
export default Jammugym;