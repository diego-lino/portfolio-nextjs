import Button from 'react-bootstrap/Button'
import styles from '../styles/PerfilCompacto.module.css'

export default function PerfilCompacto() {
    return (
        <div className="col-xs-12 col-md-3 col-md-pull-9">
          <div className={styles.bio}>
            <div className={styles.bio + ' ' + styles.bio__avatar}>
              <img src="https://www.suno.com.br/wp-content/uploads/2018/09/elon-musk.jpg" alt="Elon Musk" className={styles.bio__img}/>
            </div>
            <div className={styles.bio + ' ' + styles.bio__info}>
              <p><strong>Ocupação</strong> Empresário, inventor, investidor, físico, engenheiro, economista</p>
              <p><strong>Nascimento</strong> 28/06/1971</p>
              <p><strong>Fortuna</strong> Mais de 188 bilhões de dólares</p>
              <Button variant="dark" href="/empresa">Ver Empresas</Button>{' '}
            </div>
          </div>
        </div>
    );
}