import './Pages.css';
import picture from '../assets/dominicProjects1.png'

function Home(){
    return(
        <div id='home'>
            <h1>Hello! </h1>
            <p>Example Text</p>
            <img src={picture}/>
            <h2>Sign Off</h2>
        </div>
    )
}

export default Home;