import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <main className="errorPage">
            <h1>Erro! Página não encontrada</h1>
            <h2>Clique <Link to={"/"}>aqui</Link> para entrar na página inicial</h2>
        </main>
    )
}

export default ErrorPage;