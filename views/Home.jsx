import CarouselComponent from "../componets/CarouselComponent";
import food1 from "../assets/img/pasta.jpg";
import food2 from "../assets/img/pizza.jpg";

const Home = () => {
    const carouselImages = [
        food1,
        food2,
    ];
    return (
        <center>
            <br />
            <hr style={{ width: '90%' }} />
            <section>
                <h2>Platos Populares</h2>
                <hr style={{ width: '90%' }} />
                <CarouselComponent images={carouselImages} />
            </section>
            <hr style={{ width: '90%' }} />
            <section>
                <h2> Videos Populares</h2>
                <hr style={{ width: '90%' }} />
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ub1WfnpqXFc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{marginRight:'5em'}}
                ></iframe>                
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/pg_55jPfryg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </section>
            <hr style={{ width: '90%' }} />
        </center>
    );
}

export default Home;