import React, { useEffect } from 'react';
import './style.scss';
import imageMapResize from 'image-map-resizer'

const LandingFirst = () => {
    const goLight = () => {
        window.location.href = window.location.origin + '/light';
    }
    // imageMapResize();

    const changeBgDark = () => {
        var i = 0;
        const childrens = document.getElementById("changeBgDark").children;
        setInterval(function(){
            if(i < childrens.length){
                childrens[i].style.opacity = 0;
                i++;
            }
        },80);
    }

    useEffect(() => {
        changeBgDark();
    }, []);

    return <>
        <div className="wrapper">
        <div id="changeBgDark" className="changeBg">
            <img src='animasyon1/Katman-2.png'/>
            <img src='animasyon1/Katman-3.png'/>
            <img src='animasyon1/Katman-4.png'/>
            <img src='animasyon1/Katman-5.png'/>
            <img src='animasyon1/Katman-6.png'/>
            <img src='animasyon1/Katman-7.png'/>
            <img src='animasyon1/Katman-8.png'/>
            <img src='animasyon1/Katman-9.png'/>
            <img src='animasyon1/Katman-10.png'/>
            <img src='animasyon1/Katman-11.png'/>
            <img src='animasyon1/Katman-12.png'/>
            <img src='animasyon1/Katman-13.png'/>
            <img src='animasyon1/Katman-14.png'/>
            <img src='animasyon1/Katman-15.png'/>
            <img src='animasyon1/Katman-16.png'/>
            <img src='animasyon1/Katman-17.png'/>
            <img src='animasyon1/Katman-18.png'/>
            <img src='animasyon1/Katman-19.png'/>
            <img src='animasyon1/Katman-20.png'/>
            <img src='animasyon1/Katman-21.png'/>
            <img src='animasyon1/Katman-22.png'/>
            <img src='animasyon1/Katman-23.png'/>
            <img src='animasyon1/Katman-24.png'/>
            <img src='animasyon1/Katman-25.png'/>
            <img src='animasyon1/Katman-26.png'/>
            <img src='animasyon1/Katman-27.png'/>
            <img src='animasyon1/Katman-28.png'/>
            <img src='animasyon1/Katman-29.png'/>
            <img src='animasyon1/Katman-30.png'/>
            <img src='animasyon1/Katman-31.png'/>
            <img src='animasyon1/Katman-32.png'/>
            <img src='animasyon1/Katman-33.png'/>
            <img src='animasyon1/Katman-34.png'/>
            <img src='animasyon1/Katman-35.png'/>
            <img src='animasyon1/Katman-39.png'/>
            <img src='animasyon1/Katman-37.png'/>
            <img src='animasyon1/Katman-38.png'/>
            <img src='animasyon1/Katman-39.png'/>
            <img src='animasyon1/Katman-40.png'/>
            <img src='animasyon1/Katman-41.png'/>
        </div>

            <div className="firstClickImage">
                <a onClick={goLight} className="changeButtonDark"></a>
                <img src='first_click_low.jpeg'/>
                <div className="patchesArePatches">
                    <span>#PatchesArePatches</span>
                </div>
            </div>
        </div>
    </>
}

export default LandingFirst;