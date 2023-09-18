import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/Logo.png'
import menuservice from "../../services/MenuService";
import MenuItem from "./MenuItem";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Menu() {
  const [key, setKey] = useState("");
  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getByParentId('mainmenu', 0).then(function (result) {
        setMenus(result.data.menus);
      });
    })();
  }, [])
  // const { key } = useParams();
  //   const [products, setProducts] = useState([]);
  //   document.title = "Kết quả tìm kiếm";
  //   useEffect(function () {
  //       (async function () {
  //           const result = await productservice.getProductSearch(key);
  //               setProducts(result.data.products) 

  //       })();
  //   }, [key]);
  return (
    <nav className="navbar navbar-expand-lg border-top" style={{ backgroundColor: "white" }}>
      <div className="container-fluid mb-2">
        <Link className="navbar-brand d-sm-block  fs-3 text-warning" to="#"><img src={Logo} alt="logo" style={{ width: 230, height: 50, paddingTop: 10, paddingLeft: 10 }} /></Link>
        <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            {menus.map(function (menu, index) {
              return (<MenuItem menu={menu} key={index} />

              );
            })}

            -
          </ul>
          <form className="d-flex me-4" role="search">

            <input className="form-control me-2" type="text"  value={key} onChange={(e) => setKey(e.target.value)} placeholder="Tìm kiếm" aria-label="Search" />
            <Link className="btn btn-outline-success"  to={"/tim-kiem/"+key} >Search</Link>
          </form>
          
          <div className="me-4">
            <Link to="gio-hang">
              <FaShoppingCart className="" style={{ color: "green",width:30,height:30}} />
              {/* <span class="position-absolute  translate-middle badge rounded-pill bg-black">
                0
                <span class="visually-hidden">unread messages</span>
              </span> */}
            </Link></div>
        </div>
      </div>
    </nav>
  );
}
export default Menu;












