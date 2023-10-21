import './App.css';
import { data } from './utils/dataUtil';

function App() {
  return (
    <section className="section">
      <div className="container d-flex f-direction-column g-md">
        <h1 className="title">Cafes el Mundo</h1>
        <div className="g-layout g-layout--auto-fit-columns g-md">
          {data.map(element => {
            const { title, image, id } = element;
            return (
              <div key={id} className="card">
                <img src={image} alt={title} width={180} height={180} className='img img--card' />
                <h2 className='card__title'>{title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default App;
