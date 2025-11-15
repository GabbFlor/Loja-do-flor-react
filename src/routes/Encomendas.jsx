import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Encomendas = () => {
    const [ pesquisa, setPesquisa ] = useState("");
    const [ nome, setNome ] = useState("");
    const [ tipo, setTipo ] = useState("");
    const [ especificacao, setEspecificacao ] = useState("");
    const [ valorUn, setValorUn ] = useState("");
    const [ qtd, setQtd ] = useState("");
    const [ formTotal, setFormTotal ] = useState(0);

    const handleSubmitEncomenda = (e) => {
        e.preventDefault();

        // enviar para a API

        limparForm();
    }

    const limparForm = () => {
        setNome("");
        setTipo("");
        setEspecificacao("");
        setValorUn("");
        setQtd("");
    }

    return (
        <div>
            <Header />
            
            <main>
                <section className="div-encomendas">
                    <h1>👜 Encomendas 👜</h1>
                </section>

                <section className="div-table">
                    <input 
                        type="text" 
                        id="input-pesquisa" 
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />

                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Especificacao</th>
                                <th>Valor un.</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody id="table">
                            
                        </tbody>
                    </table>
                </section>

                <section className="div-form-encomenda">
                    <h1>Adicionar encomendas</h1>

                    <form id="form-encomenda" onSubmit={handleSubmitEncomenda}>
                        <div>
                            <p>Nome:</p>
                            <input 
                                type="text" 
                                id="nome" 
                                placeholder="Digite aqui...."
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div>
                            <p>Tipo</p>
                            <select 
                                name="" 
                                id="select_tipo"
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                            >
                                <option value="">--Selecione--</option>
                                <option value="Placa mãe">Placa mãe</option>
                                <option value="Placa de video">Placa de vídeo</option>
                                <option value="Processador">Processador</option>
                                <option value="Memória ram">Memória Ram</option>
                                <option value="HD">HD</option>
                                <option value="SSD">SSD</option>
                                <option value="Fonte">Fonte</option>
                                <option value="Gabinete">Gabinete</option>
                                <option value="Monitores">Monitores</option>
                                <option value="Mouse">Mouse</option>
                                <option value="Teclado">Teclado</option>
                                <option value="Fontes">Fones</option>
                            </select>
                        </div>

                        <div>
                            <p>Especificação:</p>
                            <textarea 
                                name="" 
                                id="especificacao" 
                                placeholder="Digite aqui..."
                                value={especificacao}
                                onChange={(e) => setEspecificacao(e.target.value)}
                            />
                        </div>

                        <div>
                            <p>Valor unitário:</p>
                            <input 
                                type="number" 
                                id="valor_un" 
                                placeholder="Digite aqui..."
                                value={valorUn}
                                onChange={(e) => setValorUn(e.target.value)}
                            />
                        </div>

                        <div>
                            <p>Quantidade:</p>
                            <input 
                                type="number" 
                                id="qtd" 
                                placeholder="Digite aqui...."
                                value={qtd}
                                onChange={(e) => setQtd(e.target.value)}
                            />
                        </div>

                        <div className="div-buttons-form-encomenda">
                            <button type="button" id="limpar-form">Limpar</button>

                            <button type="submit" id="adicionar-encomenda">Adicionar</button>
                        </div>
                    </form>
                </section>

                <script src="scripts/connectAPI.js"></script>
                <script src="scripts/encomendas.js"></script>
            </main>

            <Footer />
        </div>
    )
}

export default Encomendas;