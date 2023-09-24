import Home from '../pages/frontend/Home';
import Product from '../pages/frontend/Product';
import ProductDetail from '../pages/frontend/Product/ProductDetail';
import Contact from '../pages/frontend/Contact';
import Search from '../layouts/LayoutSite/Search';
import Post from '../pages/frontend/Post';
import PostDetail from '../pages/frontend/Post/PostDetail';
import Introduce from '../pages/frontend/Introduce';
import ShippingPolicy from '../pages/frontend/ShippingPolicy';
import WarrantyPolicy from '../pages/frontend/WarrantyPolicy';
import PurchasePolicy from '../pages/frontend/PurchasePolicy';
import ReturnPolicy from '../pages/frontend/ReturnPolicy';
const RouterPublic=[
    {path:"/",component:Home},
    {path:"/san-pham",component:Product},
    {path:"/lien-he",component:Contact},
    {path:"/bai-viet",component:Post}, 
    {path:"/chi-tiet-san-pham/:slug",component:ProductDetail},
    {path:"/chi-tiet-bai-viet/:slug",component:PostDetail},
    {path:'/tim-kiem/:key',component:Search},
    {path:"/bai-viet",component:Post}, 
    {path:'/gioi-thieu',component:Introduce},
    {path:"/chinh-sach-van-chuyen",component:ShippingPolicy}   ,
    {path:"/chinh-sach-bao-hanh",component:WarrantyPolicy}   ,
    {path:"/chinh-sach-mua-hang",component:PurchasePolicy}   ,
    {path:"/chinh-sach-doi-tra",component:ReturnPolicy}  
    
];
export default RouterPublic;    