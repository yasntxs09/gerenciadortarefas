import './index.css';

function CadastrarTarefa(){
    const [titulo, setTitulo]= useState('');
    const [descricao, setDescricao]= useState('');
    const [responsavel, setResponsavel]= useState('');

    function cadastrarTarefa(e){
        e.preventDefault()
        console.log("Tarefa: " + tarefa)
        console.log("Responsável: " + responsavel)
        console.log("Descrição: " + descricao)
    }
    return(
        <main>
            <header>
                <h1>Nova Tarefa</h1>
            </header>

            <section>
                <h2>Formulário para cadastro de tarefas</h2>
                <p>Entre com todos o campos!!!</p>

                <div>
                    <form>
                        <label>Nome da tarefa</label>
                        <imput type="text" value={titulo} onChange={e=>setTitulo(e.target.value)} />

                        <label>Decrição</label>
                        <imput type="text" value={descricao} onChange={e=>setTitulo(e.target.value)} />

                        <label>Responsável</label>
                        <imput type="text" value={responsavel} onChange={e=>setTitulo(e.target.value)} />

                        <button type='submit'></button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default CadastrarTarefa;