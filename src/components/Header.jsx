import IconeLoja from '../assets/icone-loja.png';
import "../styles/HeaderStyle.css"

const Header = () => {
    return (
        <header>
            <a href="index.html" class="logo">
                <img src={IconeLoja} alt="logo-loja" />
                <h1>🌟Loja do Florindo🌟</h1>
            </a>

            <nav class="lista">
                <ul>
                    <a href="index.html">Home</a>
                    <a href="produtos.html">Produtos</a>
                    <a href="contato.html">Contato</a>
                    <a href="encomendas.html">Encomendas</a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;