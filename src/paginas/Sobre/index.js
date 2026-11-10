import './index.css'
import fotoPerfil from './minhafoto.jpeg';
import habilidademusica from './musica.png';
import habilidadedesenho from './desenhar.png';
import habilidademaquiagem from './maquiagem.png';

function Sobre(){
    return (
        <main>

            <header>
               <h1>Sobre</h1>
            </header>
            <section>  
               <div className='fotoPerfil'>
                   <img className='imgfotoPerfil' src={fotoPerfil} alt="Foto perfil" />
                   <p>Yasmim Santana</p>
            </div>
            <div>
                <article>
                  <h2>Música</h2>
                  <img src={habilidademusica} alt="Habilidade de Musica"/>
                  <p className='descrição'>
                    Gosto de ouvir musica sempre que vou fazer algo
                  </p>
            </article>
            <article>
                  <h2>Desenhar</h2>
                  <img src={habilidadedesenho} alt="Habilidade de Desenho"/>
                  <p className='descrição'>
                    Desenho na minha parede a 2 ano
                </p>
            </article>
                <article>
                  <h2>Maquiagem</h2>
                  <img src={habilidademaquiagem} alt="Habilidade de Maquiagem"/>
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