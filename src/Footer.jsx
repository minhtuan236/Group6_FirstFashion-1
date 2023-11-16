import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandGoogleMaps } from "react-icons/tb";



function Footer() {
    
    return (
        <div>
            <dl class="row">
            <dt class="col-sm-5">HO CHI MINH OFFICE</dt> 
            <dt class="col-sm-5">HA NOI OFFICE</dt>                         
                <dd class="col-sm-5"><TbBrandGoogleMaps />  590 Cach Mang Thang 8,Ward 11,3 District,Ho Chi Minh City</dd>
                <dd class="col-sm-5"><TbBrandGoogleMaps />  M09-L12,Duong Noi New Urban Area, La Khe, Ha Dong District, Ha Noi</dd>
                <dd class="col-sm-5"><HiOutlineMail />  abcxxyz@first.fashion.com.vn</dd>
                <dd class="col-sm-5"><HiOutlineMail />  abcxxyz@first.fashion.com.vn</dd>
                <dd class="col-sm-5"><FiPhone />    0123.456.789</dd>
                <dd class="col-sm-5"><FiPhone />    0123.456.789</dd>
            </dl>
            <a className="share" href="a"><CiFacebook /></a>
            <a className="share" href="a"><CiTwitter /></a>
            <a className="share" href="a"><CiInstagram/></a>
            <p class="col-sm-8">HƯỚNG DẪN MUA HÀNG | HÌNH THỨC THANH TOÁN | CHÍNH SÁCH BẢO HÀNH - ĐỔI TRẢ | CHÍNH SÁCH BẢO MẬT | CHÍNH SÁCH GIAO HÀNG | CHÍNH SÁCH KIỂM HÀNG | CHÍNH SÁCH BẢO VỆ THÔNG TIN CÁC NHÂN CỦA NGƯỜI TIÊU DÙNG     </p>
            
            <br />
            Copyright &copy; 2023 First Fashion Inc. All rights reserved.
        </div>
     );
}

export default Footer;