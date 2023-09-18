// import Logo from '../../assets/images/Logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { FaShoppingBag, FaPrint,FaSearch} from 'react-icons/fa';
// import { Link } from "react-router-dom";
// function Header() {
//     return (
//         <section className="header py-3"style={{backgroundColor:"#031b36"}}>
//             <div className="container>">
//                 <div className="row ">
//                     <div className="col-md-3">
//                         <img src={Logo} alt="logo" style={{width:300,paddingLeft:70}}/>
//                     </div>
//                     {/* <div className="col-md-4 py-3">
//                         <div class="input-group mb-3">
//                             <input type="text" class="form-control" placeholder="Từ khóa tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//                             <button type="submit" class="input-group-text" id="basic-addon2"><FaSearch/></button>
//                         </div>
//                     </div> */}
//                     <div className="col-md-3 py-2">
//                         <div className="row ">
//                             <div className="col ">
//                                 <div className="row ">
//                                     <div className="col-3 "><div className="fs-3 text-danger"><FontAwesomeIcon icon={faPhone} /></div></div>
//                                     <div className="col-9 text-white ">Tư vấn hỗ trợ<br /><Link style={{textDecorationLine:"none"}}><strong className='text-danger'>0397901748</strong></Link></div>
//                                 </div>
//                             </div>
//                             <div className="col ">
//                                 <div className="row ">
//                                     <div className="col-3 "><div className="fs-3 text-danger"><FontAwesomeIcon icon={faUser} /></div></div>
//                                     <div className="col-9 text-white">Xin chào<br /><Link style={{textDecorationLine:"none"}}><strong className='text-danger'>Đăng nhập</strong></Link></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-2 py-3">
//                         <div className="row ">
//                             <div className="col ">
//                                 <Link to="#" className="position-relative text-white">
//                                     <FontAwesomeIcon icon={faHeart} />
//                                     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                         0
//                                         <span class="visually-hidden">unread messages</span>
//                                     </span>
//                                 </Link></div>
//                             <div className="col ">
//                                 <Link to="#" className="position-relative text-white">
//                                     <FaShoppingBag />
//                                     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                         0
//                                         <span class="visually-hidden">unread messages</span>
//                                     </span>
//                                 </Link></div>
//                             <div className="col ">
//                                 <Link to="#" className="position-relative text-white">
//                                     <FaPrint />
//                                     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                         0
//                                         <span class="visually-hidden">unread messages</span>
//                                     </span>
//                                 </Link></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default Header;