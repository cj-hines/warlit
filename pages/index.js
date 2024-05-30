import Head from 'next/head';
import Timeline from '../components/Timeline';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Imagining War: The Art and Literature of Conflict Timeline</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.css" rel="stylesheet" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js"></script>
            </Head>
            <h1>Imagining War: The Art and Literature of Conflict Timeline</h1>
            <p> 
                "Every war story, according to Leo Tolstoy, begins with the disclaimer that war cannot be understood by those who have not witnessed it for themselves – yet the story is always told anyway."
                <br />
                <br />
                This tool compiles information on war literature's themes (memorialization of past wars, anticipation of future ones), tropes (the soldier’s departure/homecoming, the horror of battle, eyewitnesses who did not fight), and narrative forms (poetry, novels, narrative journalism). Click on the timeline for more information and to discover related events or texts. These, if any, will be highlighted yellow. This project is ongoing.
            </p>
            <div id="searchContainer" style={{ textAlign: "center", marginBottom: "20px" }}>
                <input type="text" id="searchInput" placeholder="type type type literature stuff or history stuff..." style={{ padding: "8px", width: "25%" }} />
                <button id="searchButton">Search</button>
            </div>
            <div className="controls">
                <button id="filter-all">All</button>
                <button id="filter-events">Events</button>
                <button id="filter-film">Film</button>
                <button id="filter-novel">Novel</button>
                <button id="filter-poetry">Poetry</button>
                <button id="filter-news">News</button>
                <button id="filter-other">Other</button>
            </div>
            <div id="timeline"></div>
            <div id="details">
                <h2>Details</h2>
                <div id="details-content">Click on the timeline to see more details.</div>
            </div>
            <Timeline />
            <footer id="foot"> 
                This is a tool developed by CJ Hines for the course "Imagining War: The Art and Literature of Conflict" at the Pembroke Cambridge Summer Programme. All content belongs to Dr. Nathaniel Zetter and Pembroke College at the University of Cambridge.
            </footer>
        </div>
    );
}
