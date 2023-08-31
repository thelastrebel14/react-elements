import { CoinSize } from './Coin.definitions';
import './Coin.scss'

interface ICoin {
    /**
     * Front side coin image source
     */
    frontImg: string;
    /**
     * Image alternative text
     */
    imgAlt: string;
    /**
     * Back side coin label
     */
    label: string;
    /**
     * How large should the coin be?
     */
    size?: CoinSize;
}

const Coin = ({
        frontImg,
        label,
        size = CoinSize.SMALL,
        imgAlt
    }: ICoin): JSX.Element => {
    return (
        <div className={`coin-container coin-size--${size}`}>
            <div className='coin'>
                <div className="front-side">
                    <img src={frontImg} alt={imgAlt} className='front-img'/>
                </div>
                <div className='back-side'>
                    <h2 className='back-label'>{label}</h2>
                </div>
            </div>  
        </div>
    )
}

export default Coin;
