import React, { useState, useEffect } from 'react';
import './style.scss';


const LandingSecond = () => {

    const goDark = () => {
        window.location.href = window.location.origin;
    }
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        if(window.screen.availWidth < 600){
            document.getElementById('parallaxImg').style.transform = "translateY(calc(4600px - " +  2.5 * position + "px))";
        }else if(window.screen.availWidth < 900){
            document.getElementById('parallaxImg').style.transform = "translateY(calc(4600px - " +  2 * position + "px))";
        }else if(window.screen.availWidth < 1000){
            document.getElementById('parallaxImg').style.transform = "translateY(calc(5000px - " +  2 * position + "px))";
        }else{
            document.getElementById('parallaxImg').style.transform = "translateY(calc(4600px - " +  2.5 * position + "px))";
        }
    
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const changeBgLight = () => {
        var i = 0;
        const childrens = document.getElementById("changeBgLight").children;
        setTimeout(function(){
            document.getElementById("secondClickImage").style.backgroundColor = '#F4E7D4';
        },80)
        setInterval(function(){
            if(i < childrens.length){
                childrens[i].style.opacity = 0;
                i++;
            }
        },80);
    }

    useEffect(() => {
        changeBgLight();
    }, []);

    return <>
        <div id="changeBgLight" className="changeBg">
            <img src='animasyon2/Katman-2.png'/>
            <img src='animasyon2/Katman-3.png'/>
            <img src='animasyon2/Katman-4.png'/>
            <img src='animasyon2/Katman-5.png'/>
            <img src='animasyon2/Katman-6.png'/>
            <img src='animasyon2/Katman-7.png'/>
            <img src='animasyon2/Katman-8.png'/>
            <img src='animasyon2/Katman-9.png'/>
            <img src='animasyon2/Katman-10.png'/>
            <img src='animasyon2/Katman-11.png'/>
            <img src='animasyon2/Katman-12.png'/>
            <img src='animasyon2/Katman-13.png'/>
            <img src='animasyon2/Katman-14.png'/>
            <img src='animasyon2/Katman-15.png'/>
            <img src='animasyon2/Katman-16.png'/>
            <img src='animasyon2/Katman-17.png'/>
            <img src='animasyon2/Katman-18.png'/>
            <img src='animasyon2/Katman-19.png'/>
            <img src='animasyon2/Katman-20.png'/>
            <img src='animasyon2/Katman-21.png'/>
            <img src='animasyon2/Katman-22.png'/>
            <img src='animasyon2/Katman-23.png'/>
            <img src='animasyon2/Katman-24.png'/>
            <img src='animasyon2/Katman-25.png'/>
            <img src='animasyon2/Katman-26.png'/>
            <img src='animasyon2/Katman-27.png'/>
            <img src='animasyon2/Katman-28.png'/>
            <img src='animasyon2/Katman-29.png'/>
            <img src='animasyon2/Katman-30.png'/>
            <img src='animasyon2/Katman-31.png'/>
            <img src='animasyon2/Katman-32.png'/>
            <img src='animasyon2/Katman-33.png'/>
            <img src='animasyon2/Katman-34.png'/>
            <img src='animasyon2/Katman-35.png'/>
            <img src='animasyon2/Katman-39.png'/>
            <img src='animasyon2/Katman-37.png'/>
            <img src='animasyon2/Katman-38.png'/>
            <img src='animasyon2/Katman-39.png'/>
            <img src='animasyon2/Katman-40.png'/>
            <img src='animasyon2/Katman-41.png'/>
        </div>

        <div id="secondClickImage" className="secondClickImage">
            <a onClick={goDark} className="changeButtonLight"></a>
            <img src='second_click_low.jpeg'/>
        </div>

        <div className="puzzleSection">
            <div className="puzzleContainer">
                <div className="puzzleBanner">
                    <img src='puzzleLow.png'/>
                    <img src='puzzleLow.png'/>
                    <img src='puzzleLow.png'/>
                    <img src='puzzleLow.png'/>
                </div>
            </div>
            <div className="puzzleTexts">
                <p>PUZZLE</p>
                <p>IT BRINGS THE <br/> COMMUNITY TOGETHER</p>
                <p>Puzzle is an advanced DAO system <br/> that allows an NFT to be sold in fractions.</p>
            </div>
        </div>

        <div className="parallax">
            <span>DIVE INTO REALITIES</span>
            <div className="parallaxImg" id="parallaxImg"></div>
        </div>

        <div className="patchrix">
            <div className="patchrixImg"></div>
        </div>
    
    </>
}

export default LandingSecond;