import { PiDownloadSimple } from "react-icons/pi";

function ProductInfo() {
    return ( 
        <div className="productinfo">
            <h1 class="mt-5">PRODUCT INFORMATION</h1>
            <hr />
            <article>
                <div class="card-body">
                    <div className="infomation">
                        <dl class="row">
                            <dt class="col-sm-3">Sản phẩm</dt>
                                        
                        <dd className="info">Mùa lễ hội này, CHANEL đã tạo ra một thiết kế hộp đựng phiên bản giới hạn màu ngọc trai và
                                            vàng ánh kim, mở ra là chai COCO MADEMOISELLE Eau de Parfum thanh lịch.</dd>

                            <dt class="col-sm-3">Thành phần</dt>
                                        
                        <dd className="info">COCO MADEMOISELLE Eau de Parfum là một mùi hương hổ phách-rạng rỡ và gợi cảm.
                                 Những tia sáng tươi mát và sống động của nốt hương cam nhanh chóng đánh thức các giác quan.
                                 Tầng hương giữa trong trẻo và gợi cảm khơi dậy các nốt hương hoa nhài và hoa hồng. Làn hương
                                mở lối cho các nốt hương patchouli và cỏ vetiver tinh tế, làm nổi bật nét thanh thoát của mùi hương.</dd>
                        </dl>

                    </div>
                </div>
            </article>
            <div className="info">
                <a href="a"><PiDownloadSimple />Download description</a>
            </div>
        </div>
     );
}

export default ProductInfo;