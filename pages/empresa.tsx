import Carousel from 'react-bootstrap/Carousel'
import stylesHome from '../styles/Home.module.css'
import styles from '../styles/Empresa.module.css'

export default function Empresa() {
    return (
        <div className="container py-4">
            <div className="card p-3 mb-4 bg-light rounded-3">
                <div className="card-body" >
                <h5 className={stylesHome.description}>SpaceX, Tesla Motors, SolarCity, Hyperloop</h5>
                </div>
            </div>
            <Carousel controls={false}>
                <Carousel.Item interval={2000}>
                    <img
                    className={styles.img}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/SpaceX_Headquarters%2C_Hawthorne%2C_CA.jpg/270px-SpaceX_Headquarters%2C_Hawthorne%2C_CA.jpg"
                    alt="SpaceX"
                    />
                    <Carousel.Caption>
                    <h3>SpaceX</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className={styles.img}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/TeslaMotors_HQ_PaloAlto.jpg/250px-TeslaMotors_HQ_PaloAlto.jpg"
                    alt="Tesla Motors"
                    />

                    <Carousel.Caption>
                    <h3>Tesla Motors</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className={styles.img}
                    src="https://www.maistecnologia.com/wp-content/uploads/2016/08/SolarCity.jpg"
                    alt="SolarCity"
                    />

                    <Carousel.Caption>
                    <h3>SolarCity</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className={styles.img}
                    src="http://s2.glbimg.com/M3XEJkycTRQKFFc1MU3DZctosKE=/e.glbimg.com/og/ed/f/original/2016/08/24/hyperloop.jpg"
                    alt="Hyperloop"
                    />

                    <Carousel.Caption>
                    <h3>Hyperloop</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}