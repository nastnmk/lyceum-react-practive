import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // <-- вот это важно
import './Header.css';

function Header({cartCount}){
    return(
        <header className='header'>
            <div className='store-name'>Одежда красавицы</div>
            <nav className='nav'>
                <Link to='/' className='nav-link'>Главная</Link>
                <Link to='/cart' className='nav-link cart-link'>
                    <FaShoppingCart />
                    <span className='cart-count'>{cartCount}</span>
                </Link>
            </nav>
        </header>
    );
}

export default Header;