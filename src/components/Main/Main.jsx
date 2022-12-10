import { useState } from 'react';
import Intro from './Intro/Intro';
import styles from './Main.module.scss';
import Sales from './Sales/Sales';
import SalesList from './SalesList/SalesList';

const Main = () => {
    const [offset, setOffset] = useState(0);
    return (
        <main className='Main'>
            <div className='container'>
                <Intro />
                <SalesList setOffset={setOffset}/>
                <Sales offset={offset} setOffset={setOffset}/>
            </div>
        </main>
    )
}

export default Main;