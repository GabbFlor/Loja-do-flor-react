import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Style.css"

const Contato = () => {
    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ motivoContato, setMotivoContato ] = useState("");
    const [ maisInfos, setMaisInfos ] = useState("");
    const [ mostrarAgradecimentos, setMostrarAgradecimentos ] = useState(false);

    const handleSubmitContato = (e) => {
        e.preventDefault();

        console.log(`
            Contato recebido:
            Nome: ${nome};
            Email: ${email};
            Motivo do contato: ${motivoContato};
            Mais informações: ${maisInfos};
        `);

        setMostrarAgradecimentos(true);
    }
    
    return (
        <div>
            <Header />

            <main className="main-contato">
                <section id="section-form-contato" className={mostrarAgradecimentos ? "hidden-element" : ""}>
                    <h1>💬 Formulário de contato 💬</h1>

                    <form className="contato-form" id="formulario" onSubmit={handleSubmitContato}>
                        <div>
                            <label htmlFor="">Nome:</label>
                            <input 
                                type="text" 
                                name="nome" 
                                id="nome" 
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Motivo do contato:</label>
                            <input 
                                type="text" 
                                name="motivo_contato" 
                                id="motivoContato" 
                                required
                                value={motivoContato}
                                onChange={(e) => setMotivoContato(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Mais informações:</label>
                            <textarea 
                                name="informacoes" 
                                id="maisInfos" 
                                required
                                value={maisInfos}
                                onChange={(e) => setMaisInfos(e.target.value)}
                            />
                        </div>

                        <div className="div-buttons-form">
                            <a href="index.html">Voltar</a>

                            <button id="btnEnviar" type="submit">Enviar</button>
                        </div>
                    </form>
                </section>

                <section className={mostrarAgradecimentos ? "agradecimento" : "hidden-element agradecimento"} id="section-agradecimento">
                    <h1>Muito obrigado! 💜</h1>

                    <p>Agradecemos pelo seu contato senhor(a) <span id="usernameMsg"></span>! Informamos que recebemos a sua mensagem e já estamos trabalhando para propor melhorias :) 👍</p>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Contato;