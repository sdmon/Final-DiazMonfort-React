import banner from '../../assets/ow-banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='ow-banner'>
            <img src={banner} alt="Outer Wilds Archaeologist Edition"/>
        </div>);
}
 
export default Banner;