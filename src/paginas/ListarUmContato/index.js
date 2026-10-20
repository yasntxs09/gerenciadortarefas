import'./index.css'
import {useParams} from 'react-router-dom';
import tarefas from '../../mook/tarefas'

function ListarUmaTarefa() {
    const {id} =useParams();
    const tarefa = tarefa.find((item) => String(item.id) ==String(id));

    if (!tarefa) {
        return <p>Tarefa não encontrada</p>;
    }

    const { titulo, responsavel, descricao } = tarefa;

    return (

        <section>
            <header>
                <h1>Listar contato</h1>
            </header>
            <div>
                <h2>#{id} - {nome}</h2>
                <p>Responsável: {telefone}</p>
                <p>E-mail: {email}</p>
                <p>Telefone: {telefone}</p>
                <p>Cidade: {cidade}</p>
            </div>
        </section>
    )
}
export default ListarUmaTarefa;