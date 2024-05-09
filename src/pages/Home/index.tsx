import { Cards } from "../../components/Card";
import { FaPlus } from "react-icons/fa";

const Home = () =>{
    const data = [
        {
            "image":<FaPlus/>,
            "title":"Simple Counter",
            "route":"simple-counter"
        }
    ]
    return(
        <div className="home">
            <div className="home_content">
                {data.map((item,index) => (
                    <div className="cards" key={index}>
                        <Cards title={item.title} route={item.route} image={item.image}></Cards>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Home;