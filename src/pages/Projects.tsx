import './Pages.css';
import ImageCarousel from './Carousel/ImageCarousel';
function Projects() {

    return (
        <div id="work-history">
            <h1>Project History</h1>
            <div id="projects">
                <div> 
                    <ul>
                        <h2>
                            <strong>Location/Title<br /></strong>
                        </h2>
                        <em>Date Worked On</em>
                        <li>Short Description</li>
                    </ul>
                </div>
                <ImageCarousel/>
            </div>
        </div>
    )
}

export default Projects;