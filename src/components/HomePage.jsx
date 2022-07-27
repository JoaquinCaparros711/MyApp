import { Footer } from "./Footer"

export const HomePage = () => {
    return (
      <div>
        <div className="home">
          <h1 className="title" id="title">Joaquín Caparros -<br />
              Web Development
          </h1>
          <img src="https://i.im.ge/2022/07/27/F5aiCz.jpg" align="left"></img>
          <p className="parrafo">
            <strong>Hi, I’m Joaquín. I’m a programming fanatic ( Web Development ) I live in<br />
            San Rafael-Mza. I am currently studying Full Stack Web Development. I have a <br />
            diverse set of skills: Html + Css + JavaScript + React.js + Bootstrap... ( in progress ).<br />
            If you’re looking for a reliable and hard-working professional to elevate <br />
            your web presence, I’m the person you’re looking for.<br /><br /><br />

            <small>-follow your dreams-</small>
            </strong>
          </p>
      </div>

      <div className="home2">
        <p>"For me a programming is an art"</p>
      </div>

      <div className="home3">
        <div className="educational">
          <h1 className="educational">Educational<br /> background</h1>
        </div>

        <div className="container-school">

          <h3 className="school"><strong>Full Stack</strong></h3>
          <p>Egg Cooperation Academy</p>

          <h3 className="school"><strong>React.js</strong></h3>
          <p>Udemy</p>

          <h3 className="school"><strong>Comercio Electrónico y Financiamiento de proyectos</strong></h3>
          <p>Fundación Construyamos</p>

        </div>
        
      </div>
      
      <div className="home4">
        <p>I like photography</p>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.im.ge/2022/07/27/F5amV9.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://i.im.ge/2022/07/27/F5a9SF.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://i.im.ge/2022/07/27/F5aj6K.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://i.im.ge/2022/07/27/F5a6rX.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

    </div>
      
    )
  }
  
//   <a href="https://im.ge/i/F5amV9"><img src="https://i.im.ge/2022/07/27/F5amV9.jpg" alt="F5amV9.jpg" border="0"></a>
// <a href="https://im.ge/i/F5a9SF"><img src="https://i.im.ge/2022/07/27/F5a9SF.jpg" alt="F5a9SF.jpg" border="0"></a>
// <a href="https://im.ge/i/F5aj6K"><img src="https://i.im.ge/2022/07/27/F5aj6K.jpg" alt="F5aj6K.jpg" border="0"></a>
// <a href="https://im.ge/i/F5a0v6"><img src="https://i.im.ge/2022/07/27/F5a0v6.jpg" alt="F5a0v6.jpg" border="0"></a>
// <a href="https://im.ge/i/F5aiCz"><img src="https://i.im.ge/2022/07/27/F5aiCz.jpg" alt="F5aiCz.jpg" border="0"></a>
// <a href="https://im.ge/i/F5a6rX"><img src="https://i.im.ge/2022/07/27/F5a6rX.jpg" alt="F5a6rX.jpg" border="0"></a>