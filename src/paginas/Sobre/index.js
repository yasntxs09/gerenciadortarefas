import './index.css'
import fotoPerfil from './minhafoto.jpeg';
import habilidademusica from './musica.png';
import habilidadedesenho from './minhafoto.jpeg';
import habilidademaquiagem from './minhafoto.jpeg';

function Sobre(){
    return (
        <main>

            <header>
               <h1>Sobre</h1>
            </header>
            <section>  
               <div className='fotoPerfil'>
                   <img className="fotoperfil" src={fotoPerfil} />
                   <p>Yasmim Santana</p>
            </div>
            <div>
                <article>
                  <h2>Música</h2>
                  <img src={habilidademusica}/>
                  <p className='descrição'>
                    Gosto de ouvir musica sempre que vou fazer algo
                  </p>
            </article>
            <article>
                  <h2>Desenhar</h2>
                  <img src={habilidadedesenho}/>
                  <p className='descrição'>
                    Desenho na minha parede a 2 ano
                </p>
            </article>
                <article>
                  <h2>Maquiagem</h2>
                  <img src={habilidademaquiagem}/>
                  <p className='descrição'>
                    Gosto de fazer maquiagem pra ir em qualquer lugar 
                </p>
            </article>
            </div>
        </section>
        </main>
    )
}
export default Sobre;