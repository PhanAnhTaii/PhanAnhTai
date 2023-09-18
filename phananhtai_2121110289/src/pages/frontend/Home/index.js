import Slideshow from "./Slideshow";
import { useEffect } from "react";
import { useState } from "react";
import categoryservice from "../../../services/CategoryService";
import ProductHome from "./ProductHome";
function Home() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getCatparentId(0).then(function (result) {
                setCategorys(result.data.categorys);
            });
        })();
    }, []);
    
    return (
        <section className="maincontent">
                <Slideshow/>
                {categorys.map(function(category,index){
                    return <ProductHome key={index} category={category}/>
                })}
               
        </section>
    );
}
export default Home;