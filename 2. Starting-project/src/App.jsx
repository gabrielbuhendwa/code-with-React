import reactImg from './assets/react-core-concepts.png';
import ComponentImg from  './assets/components.png';

const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}


function Header (){
  const description = reactDescriptions[genRandomInt(2)];
  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcept() {
  return (
    <li>
      <img src="" alt=""/>
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
    </li>
  );
}

function App() {
  return (
    
    <div>
      <Header/>
      <main>
        <section>
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept 
              title="Components" 
              description="let's build our first Block."
              img={ComponentImg}
              />
            <CoreConcept/>
            <CoreConcept/>
            <CoreConcept/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
