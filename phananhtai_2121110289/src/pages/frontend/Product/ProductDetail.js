import { useState } from "react";
import productservice from "../../../services/ProductService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/frontend/ProductItem";
import { FaCar, FaCheckSquare, FaCogs, FaMinus, FaPlus, FaSyncAlt } from "react-icons/fa";

function ProductDetail() {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);
    useEffect(() => {
        setCartCount(calculateCartCount(cart));
    }, [cart]);

    const updateQuantity = (index, quantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = quantity;
        updatedCart[index].total = updatedCart[index].price * quantity;
        setCart(updatedCart);
        setCartCount(calculateCartCount(updatedCart));
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Cập nhật lại localStorage
    };
    const addToCart = () => {
        const productCopy = { ...product };
        const updatedCart = [...cart, productCopy];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    const calculateCartCount = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };



    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product);
                    setProductOther(result.data.product_other);
                }

            });
        })();
    }, [slug])
    // let amountElement=document.getElementById('amount')
    // let amount =amountElement.value
    // let render=(amount)=>{
    //     amountElement.value=amount
    // }
    // function Plus(){
    //     amount++;
    //     render(amount);
    // }
    // function Minus(){
    //     if(amount<1){
    //         amount=0;
    //     }
    //     else{
    //       amount--;
    //     render(amount);  
    //     }
    // }
    return (
        <section className="maincontent my-4">
            <div className="container ">

                <div className="row">
                    <div className="col-md-6">
                        <img src={urlImage + 'product/' + product.image} className="img-fluid w-100" /></div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>

                        <del><h5> {product.price}<sup>đ</sup> </h5></del>
                        <h4 className="text-danger"> {product.pricesale} <sup>đ</sup></h4>
                        <div className="col-md-6 my-4" >
                            <button style={{ width: 480, height: 50 }} onClick={addToCart} className="btn btn-outline-primary table-bordered my-2"><strong>Thêm Vào Giỏ Hàng</strong></button>
                            <button style={{ width: 480, height: 50 }} className="btn btn-success my-2"><strong>Mua Hàng</strong></button>
                        </div>


                        <div class="box-policy my-4">
                            <div className="row">
                                <div className="col-md-5 ">
                                    <p><FaCar className="fa-2x" style={{ color: "green" }} /><strong>Freeship toàn quốc</strong></p>
                                    <p><FaCheckSquare className="fa-2x" style={{ color: "green" }} /><strong>Đổi trả hàng trong 7 ngày</strong></p></div>
                                <div className="col-md-5">
                                    <p><FaSyncAlt className="fa-2x" style={{ color: "green" }} /><strong>Cam kết hàng chính hãng</strong></p>
                                    <p><FaCogs className="fa-2x" style={{ color: "green" }} /><strong>Bảo hành 2 năm quốc tế</strong></p></div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12 my-2">
                        <table className="table table table-striped table-bordered table-hover"><h4>{product.detail}</h4></table>

                    </div>

                </div>

                <h3 className="py-3 text-danger"><b>Sản Phẩm Cùng Loại</b></h3>
                <div className="row">
                    {product_other.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}

                </div>
            </div>
        </section>
    );
}

export default ProductDetail;