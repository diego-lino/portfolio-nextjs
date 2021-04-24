import Head from 'next/head'
import PerfilCompacto from '../components/PerfilCompacto'
import PerfilDetalhado from '../components/PerfilDetalhado'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container py-4">
      <Head>
        <title>Meu Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="card p-3 mb-4 bg-light rounded-3">
        <div className="card-body" >
          <h5 className={styles.description}>Quem é Elon Musk?</h5>
        </div>
      </div>
      <main >

        <div className="row flex-md">
          <PerfilCompacto></PerfilCompacto>
          <PerfilDetalhado></PerfilDetalhado>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <span>
          Powered by Diego e Túlio
        </span>
      </footer>
    </div>
  )
}
