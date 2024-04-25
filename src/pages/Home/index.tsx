import { Cards } from "../../components/Card";

const Home = () =>{
    const data = [
        {
            "title":"Simple Counter",
            "route":"simple-counter"
        }
    ]
    return(
        <div className="home">
            <div className="home_content">
                {data.map((item,index) => (
                    <div className="cards" key={index}>
                        <Cards title={item.title} route={item.route}></Cards>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Home;