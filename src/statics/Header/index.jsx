import React, { useEffect } from 'react';
import { useGlobalState } from '../../useGlobalState';
import './style.scss';

const Header = () => {
    const [globalState,dispatch] = useGlobalState();

    const openSidebar = () =>{
        dispatch({ type: 'changeSidebar', value: true });
    }

    const goHomePage = () => {
        window.location.href = window.location.origin;
    }

    const goPage = (e) => {
        window.open(e.target.attributes.href.value, '_blank');
    }

    return <header>
        <div className="headerLeft">
           <img src='patches_logo_nobg.png' onClick={goHomePage}/>
        </div>
        <div className="headerRight">
            <img src='discord.svg' href="https://discord.com/invite/patches" onClick={(e) => goPage(e)} />
            <img src='twitter.svg' href="http://twitter.com/Patches_NFT" onClick={(e) => goPage(e)} />
            <img src='DarkSide.png' onClick={openSidebar}/>
        </div>
    </header>
}

export default Header;