import { useState, useEffect } from 'react';
import Data from './data';


const defaultDetails = {
  id : 2,
  name : "Tommy",
  experience : "December 2015 - Present",
  role : "Full Stack Web Developer",
  curriculum  : [
    "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
    "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
    "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
]
}

const Index = () => {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);
  const [ details, setDetails ] = useState({
    name : "",
    role : "",
    experience :"" ,
    curriculum : []
  });

  useEffect(() => {
    setTimeout(() => {
      setData(Data);
      setLoading(false);
      setDetails(defaultDetails);
    },2000);
  },[]);

  return (
    <div>
      {loading ? <h1 className="App-header"> loading ... </h1> : <h1 className="App-header"> Experience </h1>}
      <div className="primary-grid">
        <nav className="navigation">
        {data.map((person) => {
              const { id,name} = person;
              return (
              <div key={id}>
                <button className="btn" onClick={() => {
                  setDetails(person)
                }}>{name.toUpperCase()} </button>
            </div> )
            })}
      </nav>

      <div className="details">
      <h2>{details.role}</h2>
      <h4>{details.name.toUpperCase()}</h4>
      <p>{details.experience}</p>

      <article>
      {details.curriculum.map((i) => {
        return (
        <li key={Math.random()}> {i} </li>
      )
      })}
      </article>

      </div>
      </div>
    </div>
  )
}

export default Index;
