import React, { useEffect } from 'react';
import { useGlobalState } from '../../useGlobalState';
import './style.scss';

const Sidebar = () => {
    const [globalState,dispatch] = useGlobalState();

    const closeSidebar = () =>{
        dispatch({ type: 'changeSidebar', value: false });
    }

    const goPage = (e) => {
        window.open(e.target.attributes.href.value, '_blank');
    }

    return <div className={ globalState.sidebar ? 'sidebar' : 'sidebar closed' }>
        <div className="closeButton" onClick={closeSidebar}>
            <svg width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.76256 7.5L0.256282 1.60041L1.49372 0.274588L7 6.17418L12.5063 0.274588L13.7437 1.60041L8.23744 7.5L13.7437 13.3996L12.5063 14.7254L7 8.82582L1.49372 14.7254L0.256282 13.3996L5.76256 7.5Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.256282 0.274587C0.59799 -0.0915292 1.15201 -0.091529 1.49372 0.274588L7 6.17418L12.5063 0.274588C12.848 -0.091529 13.402 -0.0915292 13.7437 0.274587C14.0854 0.640704 14.0854 1.2343 13.7437 1.60041L8.23744 7.5L13.7437 13.3996C14.0854 13.7657 14.0854 14.3593 13.7437 14.7254C13.402 15.0915 12.848 15.0915 12.5063 14.7254L7 8.82582L1.49372 14.7254C1.15201 15.0915 0.59799 15.0915 0.256282 14.7254C-0.0854273 14.3593 -0.0854271 13.7657 0.256282 13.3996L5.76256 7.5L0.256282 1.60041C-0.0854271 1.2343 -0.0854273 0.640704 0.256282 0.274587Z" fill="#904100"></path></svg>
        </div>
        <div className="list">
            <div className="listGroup">
                <b>Utilities</b>
                <p href="https://patches.stakooor.app/" onClick={(e) => goPage(e)} >Stake Your Patches</p>
                <p href="https://patches.rafflooor.app/" onClick={(e) => goPage(e)} >Participate to Raffles</p>
                <p>Pay Your Fee's</p>
            </div>
            <div className="listGroup">
                <b>Patch v1.0 (Soon)</b>
                <p href="https://patches.gitbook.io/patches/patch-v1.0/the-mistery-of-the-treats" onClick={(e) => goPage(e)} >The Mystery Of The Treats</p>
                <p href="https://patches.gitbook.io/patches/patch-v1.0/mini-utilities" onClick={(e) => goPage(e)} >Mini-Utilities</p>
                <p href="https://patches.gitbook.io/patches/patch-v1.0/puzzle-soon" onClick={(e) => goPage(e)}>Puzzle(Soon)</p>
            </div> 
        </div>
    </div>
}

export default Sidebar;