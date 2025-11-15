import { useEffect } from "react";
import X_icon from "../assets/x-icon.svg";
import "../styles/Style.css"

const Modal = ({ imgPath, title, text, closeModal }) => {
    // encontra o caminho relativo usando o link da imagem cru q é passado no props
    const imgFile = new URL(imgPath, import.meta.url).href;

    // tira a barra de rolagem da pag
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // quando o modal fecha
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])

    return (
        <>
            <div className="overlay" onClick={closeModal}></div>

            <section className="pop-up">
                <button className="btn-close-pop-up" title="Fechar" onClick={closeModal}><img src={X_icon} alt="btn-close"/></button>

                <img id="pop-up-img" src={imgFile} alt="Imagem-pop-up" />

                <h2 id="pop-up-title">{title}</h2>

                <p id="pop-up-text">{text}</p>
            </section>
        </>
    )
}

export default Modal;