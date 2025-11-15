import IconeLojaWhite from "../assets/icone-loja-white.png";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import TwitterIcon from "../assets/twitter-x.svg";
import GithubIcon from "../assets/github.svg";
import "../styles/Style.css";

const Footer = () => {
    return (
        <footer>
            <div className="logo logo-footer">
                <img src={IconeLojaWhite} alt="logo-loja" />
                <h1>🌟Loja do Florindo🌟</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank"><img src={FacebookIcon} alt="face-icon" /> Facebook</a></li>
                    <li><a href="https://www.instagram.com/gabb._flor/" target="_blank"><img src={InstagramIcon} alt="insta-icon" /> instagram</a></li>
                    <li><a href="https://x.com" target="_blank"><img src={TwitterIcon} alt="twitter-icon" /> Twitter</a></li>
                    <li><a href="https://github.com/GabbFlor/Loja-do-flor" target="_blank"><img src={GithubIcon} alt="github-icon" /> Github</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;