import { Link } from 'react-router-dom';
import IconeLoja from '../assets/icone-loja.png';
import "../styles/Style.css"

const Header = () => {
    return (
        <header>
            <a href="index.html" className="logo">
                <img src={IconeLoja} alt="logo-loja" />
                <h1>🌟Loja do Florindo🌟</h1>
            </a>

            <nav className="lista">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/encomendas">Encomendas</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;