import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const Encomendas = () => {
    const [ pesquisa, setPesquisa ] = useState("");
    const [ nome, setNome ] = useState("");
    const [ tipo, setTipo ] = useState("");
    const [ especificacao, setEspecificacao ] = useState("");
    const [ valorUn, setValorUn ] = useState("");
    const [ qtd, setQtd ] = useState("");
    const [ formContent, setFormContent ] = useState(null);

    const handleSubmitEncomenda = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/encomendas", {
            nome: nome,
            tipo: tipo,
            espec: especificacao,
            valorUn: valorUn,
            qtd: qtd,
        })
        .then((response) => {
            console.log("Funfou");
            getContentTable();
        })
        .catch((error) => {
            alert("Erro ao adicionar encomenda, olhe o console.")
            console.error(`Erro: ${error}`)
        })

        limparForm();
    }

    const limparForm = () => {
        setNome("");
        setTipo("");
        setEspecificacao("");
        setValorUn("");
        setQtd("");
    }

    const getContentTable = () => {
        axios.get("http://localhost:3000/encomendas")
        .then((response) => {
            setFormContent(response.data);
        })
        .catch((error) => {
            alert("Erro ao recuperar os dados da API, olhar o console...");
            console.error(`Erro: ${error}`);
        })
    }

    useEffect(() => {
        getContentTable();
    }, [])

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
                            {formContent != null ? (
                                formContent.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.nome}</td>
                                        <td>{item.tipo}</td>
                                        <td>{item.espec}</td>
                                        <td>{item.valorUn}</td>
                                        <td>{item.qtd}</td>
                                        <td>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL',}).format(item.qtd * item.valorUn)}</td>
                                    </tr>
                                ))
                            ) : (<tr/>)}
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