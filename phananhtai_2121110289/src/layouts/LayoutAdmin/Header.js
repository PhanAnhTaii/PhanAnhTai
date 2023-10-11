import { Link } from "react-router-dom";
function Header() {
    return (
        <section classNameName="header ">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#031b36"}}>
                <div className="container-fluid ">
                    <Link className="navbar-brand text-white" to="/admin">Quản trị</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/admin">Trang Chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="#">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="brand">Thương Hiệu</Link></li>
                                    <li><Link className="dropdown-item" to="category">Danh Mục</Link></li> 
                                    <li><Link className="dropdown-item" to="contact">Liên Hệ</Link></li>         
                                    <li><Link className="dropdown-item" to="menu">Menu</Link></li>
                                    <li><Link className="dropdown-item" to="order">Đơn Hàng</Link></li>
                                    <li><Link className="dropdown-item" to="post">Bài Viết</Link></li>
                                    <li><Link className="dropdown-item" to="product">Sản Phẩm</Link></li>
                                    <li><Link className="dropdown-item" to="slider">Slider</Link></li>
                                    <li><Link className="dropdown-item" to="topic">Chủ Đề</Link></li>
                                    <li><Link className="dropdown-item" to="user">Người Dùng</Link></li>                                                                    
                                    <li><Link className="dropdown-item" to="customer">Khách Hàng</Link></li>                                                                    
                                    <li><Link className="dropdown-item" to="voucher">Khuyến Mãi</Link></li>                                                                    
                                </ul>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    );
}
export default Header;