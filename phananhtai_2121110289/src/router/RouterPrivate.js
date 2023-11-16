import Dashboard from '../pages/backend/Dashboard';

import BrandList from '../pages/backend/Brand/BrandList';
import BrandCreate from '../pages/backend/Brand/BrandCreate';
import BrandUpdate from '../pages/backend/Brand/BrandUpdate';
import BrandShow from '../pages/backend/Brand/BrandShow';
import BrandTrash from '../pages/backend/Brand/BrandTrash';


import CategoryList from '../pages/backend/Category/CategoryList';
import CategoryCreate from '../pages/backend/Category/CategoryCreate';
import CategoryUpdate from '../pages/backend/Category/CategoryUpdate';
import CategoryShow from '../pages/backend/Category/CategoryShow';
import CategoryTrash from '../pages/backend/Category/CategoryTrash';


import OrderList from '../pages/backend/Order/OrderList';
import OrderCreate from '../pages/backend/Order/OrderCreate';
import OrderUpdate from '../pages/backend/Order/OrderUpdate';
import OrderShow from '../pages/backend/Order/OrderShow';
import OrderTrash from '../pages/backend/Order/OrderTrash';

import ProductList from '../pages/backend/Product/ProductList';
import ProductCreate from '../pages/backend/Product/ProductCreate';
import ProductUpdate from '../pages/backend/Product/ProductUpdate';
import ProductShow from '../pages/backend/Product/ProductShow';
import ProductTrash from '../pages/backend/Product/ProductTrash';


import UserList from '../pages/backend/User/UserList';
import UserCreate from '../pages/backend/User/UserCreate';
import UserUpdate from '../pages/backend/User/UserUpdate';
import UserShow from '../pages/backend/User/UserShow';
import UserTrash from '../pages/backend/User/UserTrash';


import MenuList from '../pages/backend/Menu/MenuList';
import MenuCreate from '../pages/backend/Menu/MenuCreate';
import MenuUpdate from '../pages/backend/Menu/MenuUpdate';
import MenuShow from '../pages/backend/Menu/MenuShow';
import MenuTrash from '../pages/backend/Menu/MenuTrash';


import SliderList from '../pages/backend/Slider/SliderList';
import SliderCreate from '../pages/backend/Slider/SliderCreate';
import SliderUpdate from '../pages/backend/Slider/SliderUpdate';
import SliderShow from '../pages/backend/Slider/SliderShow';
import SliderTrash from '../pages/backend/Slider/SliderTrash';


import ContactList from '../pages/backend/Contact/ContactList';
import ContactCreate from '../pages/backend/Contact/ContactCreate';
import ContactUpdate from '../pages/backend/Contact/ContactUpdate';
import ContactShow from '../pages/backend/Contact/ContactShow';
import ContactTrash from '../pages/backend/Contact/ContactTrash';


import PostList from '../pages/backend/Postt/PostList';
import PostCreate from '../pages/backend/Postt/PostCreate';
import PostUpdate from '../pages/backend/Postt/PostUpdate';
import PostShow from '../pages/backend/Postt/PostShow';
import PostTrash from '../pages/backend/Postt/PostTrash';


import TopicList from '../pages/backend/Topic/TopicList';
import TopicCreate from '../pages/backend/Topic/TopicCreate';
import TopicUpdate from '../pages/backend/Topic/TopicUpdate';
import TopicShow from '../pages/backend/Topic/TopicShow';
import TopicTrash from '../pages/backend/Topic/TopicTrash';


import CustomerList from '../pages/backend/Customer/CustomerList';
import CustomerCreate from '../pages/backend/Customer/CustomerCreate';
import CustomerUpdate from '../pages/backend/Customer/CustomerUpdate';
import CustomerShow from '../pages/backend/Customer/CustomerShow';
import CustomerTrash from '../pages/backend/Customer/CustomerTrash';


import VoucherList from '../pages/backend/Voucher/VoucherList';
import VoucherCreate from '../pages/backend/Voucher/VoucherCreate';
import VoucherUpdate from '../pages/backend/Voucher/VoucherUpdate';
import VoucherShow from '../pages/backend/Voucher/VoucherShow';


import Login from '../layouts/LayoutAdmin/Login';



const RouterPrivate=[

    {path:'/admin',component:Dashboard},
    {path:'/admin/login',component:Login},

    {path:'/admin/brand',component:BrandList},
    {path:'/admin/brand/create',component:BrandCreate},
    {path:'/admin/brand/update/:id',component:BrandUpdate},
    {path:'/admin/brand/show/:id',component:BrandShow}, 
    {path:'/admin/brand/trash/',component:BrandTrash}, 

    {path:'/admin/category',component:CategoryList},
    {path:'/admin/category/create',component:CategoryCreate},
    {path:'/admin/category/update/:id',component:CategoryUpdate},
    {path:'/admin/category/show/:id',component:CategoryShow}, 
    {path:'/admin/category/trash',component:CategoryTrash}  ,

    {path:'/admin/order',component:OrderList},
    {path:'/admin/order/create',component:OrderCreate},
    {path:'/admin/order/update/:id',component:OrderUpdate},
    {path:'/admin/order/show/:id',component:OrderShow}  ,
    {path:'/admin/order/trash',component:OrderTrash}  ,

    {path:'/admin/product',component:ProductList},
    {path:'/admin/product/create',component:ProductCreate},
    {path:'/admin/product/update/:id',component:ProductUpdate},
    {path:'/admin/product/show/:id',component:ProductShow}  ,
    {path:'/admin/product/trash',component:ProductTrash}  ,


    {path:'/admin/user',component:UserList},
    {path:'/admin/user/create',component:UserCreate},
    {path:'/admin/user/update/:id',component:UserUpdate},
    {path:'/admin/user/show/:id',component:UserShow}   ,
    {path:'/admin/user/trash',component:UserTrash}  ,


    {path:'/admin/menu',component:MenuList},
    {path:'/admin/menu/create',component:MenuCreate},
    {path:'/admin/menu/update/:id',component:MenuUpdate},
    {path:'/admin/menu/show/:id',component:MenuShow}  ,
    {path:'/admin/menu/trash',component:MenuTrash}  ,


    {path:'/admin/slider',component:SliderList},
    {path:'/admin/slider/create',component:SliderCreate},
    {path:'/admin/slider/update/:id',component:SliderUpdate},
    {path:'/admin/slider/show/:id',component:SliderShow} ,
    {path:'/admin/slider/trash',component:SliderTrash}  ,


    {path:'/admin/contact',component:ContactList},
    {path:'/admin/contact/create',component:ContactCreate},
    {path:'/admin/contact/update/:id',component:ContactUpdate},
    {path:'/admin/contact/show/:id',component:ContactShow}    ,
    {path:'/admin/contact/trash',component:ContactTrash}  ,


    {path:'/admin/post',component:PostList},
    {path:'/admin/post/create',component:PostCreate},
    {path:'/admin/post/update/:id',component:PostUpdate},
    {path:'/admin/post/show/:id',component:PostShow}  ,
    {path:'/admin/post/trash',component:PostTrash}  ,


    {path:'/admin/topic',component:TopicList},
    {path:'/admin/topic/create',component:TopicCreate},
    {path:'/admin/topic/update/:id',component:TopicUpdate},
    {path:'/admin/topic/show/:id',component:TopicShow} ,
    {path:'/admin/topic/trash',component:TopicTrash}  ,


    {path:'/admin/customer',component:CustomerList},
    {path:'/admin/customer/create',component:CustomerCreate},
    {path:'/admin/customer/update/:id',component:CustomerUpdate},
    {path:'/admin/customer/show/:id',component:CustomerShow} ,
    {path:'/admin/customer/trash',component:CustomerTrash}  ,


    {path:'/admin/voucher',component:VoucherList},
    {path:'/admin/voucher/create',component:VoucherCreate},
    {path:'/admin/voucher/update/:id',component:VoucherUpdate},
    {path:'/admin/voucher/show/:id',component:VoucherShow} 
]
export default RouterPrivate;