import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";
import produtosData from "../data/produtos.json";
import "../styles/Style.css"

import imgProduto1 from "../assets/produto-1.jpg";
import imgProduto2 from "../assets/produto-2.jpg";
import imgProduto3 from "../assets/produto-3.jpg";
import imgProduto4 from "../assets/produto-4.jpeg";
import imgProduto5 from "../assets/produto-5.jpeg";
import imgProduto6 from "../assets/produto-6.jpeg";

const Produtos = () => {
    const [ modalData, setModalData ] = useState(null);
    const modalIsOpen = !!modalData;

    const openModal = (id) => {
        const foundContent = produtosData.find(produto => produto.id == id);
        setModalData(foundContent);
    }

    const onCloseModal = () => {
        setModalData(null);
    }

    return (
        <div>
            <Header />

            <main>
                {modalIsOpen ? (
                    <Modal 
                        imgPath={modalData.imgPath}
                        title={modalData.title}
                        text={modalData.text}
                        closeModal={onCloseModal}
                    />
                ) : ("")}

                <section className="div-produtos">
                    <h1>🖱️ Produtos 🖱️</h1>

                    <div className="grid-produtos">
                        <div className="produto">
                            <img src={imgProduto1} alt="Produto 1" className="img-produto-temp" />

                            <h2>Placa de vídeo RTX 4080 Super</h2>

                            <p>Potência máxima para games em 4K e criação de conteúdo avançada. Ray Tracing e DLSS 3 para gráficos realistas e alto desempenho.</p>

                            <span>R$ 8.499,99 / cada</span>

                            <button 
                                className="btn-saiba-mais" 
                                onClick={() => openModal(1)}
                                >Saiba mais
                            </button>
                        </div>

                        <div className="produto">
                            <img src={imgProduto2} alt="Produto 2" className="img-produto-temp" />

                            <h2>Processador Intel Core i9 14900K</h2>

                            <p>Desempenho extremo com 24 núcleos e frequência turbo de até 6.0GHz. Ideal para jogos e tarefas pesadas com máxima eficiência.</p>

                            <span>R$ 4.299,00 / cada</span>

                            <button 
                                className="btn-saiba-mais" 
                                onClick={() => openModal(2)}
                                >Saiba mais
                            </button>
                        </div>

                        <div className="produto">
                            <img src={imgProduto3} alt="Produto 3" className="img-produto-temp" />

                            <h2>Teclado Mecânico Redragon Kumara RGB</h2>

                            <p>Compacto e resistente, com switches Outemu e iluminação RGB personalizável. Ideal para precisão em jogos e durabilidade no uso diário.</p>

                            <span>R$ 280,64 / cada</span>

                            <button 
                                className="btn-saiba-mais" 
                                onClick={() => openModal(3)}
                                >Saiba mais
                            </button>
                        </div>


                        <div className="produto">
                            <img src={imgProduto4} alt="Produto 4" className="img-produto-temp" />

                            <h2>Controle Gamer 8BitDo Ultimate 2.4G Wireless</h2>

                            <p>Controle sem fio com analógicos Hall Effect, botões traseiros programáveis e base de carregamento. Compatível com PC, Switch e dispositivos móveis.​</p>

                            <span>R$ 489,00 / cada</span>

                            <button 
                                className="btn-saiba-mais" 
                                onClick={() => openModal(4)}
                                >Saiba mais
                            </button>
                        </div>

                        <div className="produto">
                            <img src={imgProduto5} alt="Produto 5" className="img-produto-temp" />

                            <h2>Headset Gamer HyperX Cloud Stinger</h2>

                            <p>Leve e confortável, com drivers de 50mm e microfone com cancelamento de ruído. Ideal para longas sessões de jogo com áudio imersivo.</p>

                            <span>R$ 169,90 / cada</span>

                            <button 
                                className="btn-saiba-mais" 
                                onClick={() => openModal(5)}
                                >Saiba mais
                            </button>
                        </div>

                        <div className="produto">
                            <img src={imgProduto6} alt="Produto 6" className="img-produto-temp" />

                            <h2>Mouse Gamer Redragon M686 Vampire Elite</h2>

                            <p>Mouse sem fio com sensor de 16.000 DPI, iluminação RGB e 8 botões programáveis. Ideal para precisão e personalização em jogos competitivos.​</p>

                            <span>R$ 259,90 / cada</span>

                            <button 
                                className="btn-saiba-mais" 
                                onClick={() => openModal(6)}
                                >Saiba mais
                            </button>
                        </div>
                    </div>
                </section>


                {/*  */}
            </main>

            <Footer />
        </div>
    )
}

export default Produtos;