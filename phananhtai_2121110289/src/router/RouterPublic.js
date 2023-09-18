import Home from '../pages/frontend/Home';
import Product from '../pages/frontend/Product';
import ProductDetail from '../pages/frontend/Product/ProductDetail';
import Contact from '../pages/frontend/Contact';
import Cart from '../pages/frontend/Cart';
import Search from '../layouts/LayoutSite/Search';
const RouterPublic=[
    {path:"/",component:Home},
    {path:"/san-pham",component:Product},
    {path:"/lien-he",component:Contact},
    {path:"/chi-tiet-san-pham/:slug",component:ProductDetail},
    {path:'/tim-kiem/:key',component:Search},
    {path:'/gio-hang',component:Cart}
    
];
export default RouterPublic;    