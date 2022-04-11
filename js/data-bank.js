var deeplink = `https://go.isclix.com/deep_link/5353514789844343379?url=`;
var url = window.location.href;

var allBank = [
  {"id":"mbbank",
   "name":"MBBank",
   "details":"BGiới Thiệu Nhiều, Nhận Tiền Triệu",
   "sub_info":`Phone xài số nào, Bank xài số đó.
Giao dịch khỏi nghĩ, mất tiền MB chi.`,
   "image":"https://dl.airtable.com/.attachments/29a7f59793de677102d5959e757652b1/3189aa15/tixung4.png",
   "android":"https://com.mbmobile/",
   "ios":"https://id1205807363.vn/"
  },
  {"id":"cake",
   "name":"CAKE",
   "details":"Ngân Hàng Số Miễn Phí Trọn Đời",
   "sub_info":`Mở tài khoản nhanh chóng trong 2 phút với quy trình e-KYC hiện đại và tiện lợi.
An toàn và bảo mật cho mọi giao dịch của bạn.`,
   "image":"https://dl.airtable.com/.attachments/97f01d87a5061a202f34ae228ce52073/fb7b6ade/CAKE.png",
   "android":"https://play.google.com/store/apps/details?id=xyz.be.cake",
   "ios":"https://apps.apple.com/kn/app/cake-the-mobile-bank/id1551907051"
  },
  {"id":"tnex",
   "name":"TNEX",
   "details":"Ngân Hàng Miễn Phí Cho Thế Hệ Mới",
   "sub_info":`Dịch vụ giao dịch miễn phí 5 không trọn đời.
Kết nối bạn bè qua Tnex dễ dàng.`,
   "image":"https://dl.airtable.com/.attachments/9c2e94c309a5379af3c3b0dc5f5fe494/1c5ef319/tnex-ung-dung-ngan-hang-so-thong-minh-233502-logo-08-01-2021.png",
   "android":"https://play.google.com/store/apps/details?id=vn.tnex.consumer",
   "ios":"https://apps.apple.com/vn/app/id1527220699?utm_source=accesstrade"
  },
  {"id":"viettelpay",
   "name":"ViettelPay",
   "details":"Chiết Khấu Ngay Đến 20% Không Giới Hạn Số Lần Khi Nạp Điện Thoại Trên ViettelPay.",
   "sub_info":`Giảm ngay 20% khi mua các gói data Viettel trên ViettelPay.
Nhận ngay bộ 12 VOUCHER mua DATA trên ViettelPay với giá chỉ 1.000đ/gói DATA.`,
   "image":"https://dl.airtable.com/.attachments/087d523f4e9fb6227081f785817f2346/816902b1/ScreenShot2021-07-13at6.07.44PM.jpg",
   "android":"https://com.bplus.vtpay/",
   "ios":"https://id1344204781/"
  },
  {"id":"vnpay",
   "name":"VNPAY",
   "details":"Ví VNPAY - Ví Của Gia Đình",
   "sub_info":`+150.000 Điểm chấp nhận thanh toán.
Thanh toán an toàn, đơn giản, nhanh chóng và bảo mật cấp cao.`,
   "image":"https://dl.airtable.com/.attachments/e0e9c5f02729d91fbf52400097150023/c46eaa8c/vppay.png",
   "android":"https://vidientuvnpay.vnpay.vn/",
   "ios":"https://vidientuvnpay.vnpay.vn/"
  },
  {"id":"vpbank",
   "name":"VPBank EKYC",
   "details":"100% Online - 5 Phút Có Ngay Tài Khoản",
   "sub_info":`Giới thiệu bạn hay - Nhận ngay tiền mặt.
Miễn phí nhiều dịch vụ tiện ích online.`,
   "image":"https://dl.airtable.com/.attachments/d92cf99207a0cfca77dfc1613d591003/e1f07984/vpbank.png",
   "android":"https://taikhoan.vpbank.com.vn/casa/ekyc/step1/",
   "ios":"https://taikhoan.vpbank.com.vn/casa/ekyc/step1/"
  },
  {"id":"savy",
   "name":"Savy TPBank",
   "details":"Tặng 50K Cho Khách Hàng Mới",
   "sub_info":`Tiết kiệm mọi lúc, mọi nơi chỉ từ 30K.
Lãi suất 6,5%, top cao nhất trong app tiết kiệm hiện nay.`,
   "image":"https://dl.airtable.com/.attachments/dcab37b76fa32edea920fae64fae214a/8181340a/savy.png",
   "android":"https://play.google.com/store/apps/details?id=vn.tpbank.savy",
   "ios":"https://apps.apple.com/vn/app/id1284522516"
  },
  {"id":"tpbank",
   "name":"TPBank EKYC",
   "details":"Ứng dụng ngân hàng của Kỷ nguyên số",
   "sub_info":`Gửi tiết kiệm lãi suất cao.`,
   "image":"https://content.accesstrade.vn/adv/1639021979_avatar_1639021979.jpeg",
   "android":"https://play.google.com/store/apps/details?id=com.tpb.mb.gprsandroid",
   "ios":"https://apps.apple.com/vn/app/id1284522516"
  },
]

function innerAndroid(){
  var innerHTMLAndroid = '';
  for(let i=0; i<allBank.length;i++){
    
    var detailsBank = allBank[i].sub_info.match(/.+(\n|\.)/g);
    let innerDetails = '';
    for(let u=0; u<detailsBank.length;u++){
      innerDetails += `<p class="feeds-block__item-content__title loan_period">${detailsBank[u]}</p>`
    }
    
  innerHTMLAndroid += `<div class="feeds-block__item-wrap" style="text-align:center;">
                <div class="feeds-block__item">
                  <div class="feeds-block__item-link">
                    <div class="feeds-block__item-img">
                      <img src="${allBank[i].image}" alt="${allBank[i].name}">
                    </div>
                    <div class="feeds-block__item-content">
                      <strong class="h5 text-capitalize">${allBank[i].name} (Android)</strong>
                      <strong class="h6 text-capitalize pl-3 text_promo" style="font-size: 14px;color: #fd4848; min-height: 20px;">${allBank[i].details}</strong>
                      <div class="sub-info">
                        ${innerDetails}
                      </div>
                     </div>
                                <div class="feeds-block__item-button">
                                     <a href="${deeplink}${allBank[i].android}&utm_source=banksodep&utm_medium=${url}&utm_campaign=reg-now&utm_content=Nhấn%20đăng%20kí%20tài%20khoản" data-link="${deeplink}${allBank[i].android}" target="_blank" id="track_link" class="btn-lead">
                                        <button id="bttn_voucher" data-id="1">
                                            <span>Đăng Ký Tài Khoản</span>
                                        </button>
                                     </a>
                                      <a href="" target="_blank" class="btn-lead track_info" id="track_info" style="margin-top: 15px; float: left; display: none;">Điền thông tin nhận Voucher sau khi đăng ký thành công</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>  `;
  }
  document.getElementById('innerBank').innerHTML = innerHTMLAndroid;
}

function innerIOS(){
  var innerHTMLIOS = '';
  for(let i=0; i<allBank.length;i++){
    
    var detailsBank = allBank[i].sub_info.match(/.+(\n|\.)/g);
    let innerDetails = '';
    for(let u=0; u<detailsBank.length;u++){
      innerDetails += `<p class="feeds-block__item-content__title loan_period">${detailsBank[u]}</p>`
    }
    
  innerHTMLIOS += `<div class="feeds-block__item-wrap" style="text-align:center;">
                <div class="feeds-block__item">
                  <div class="feeds-block__item-link">
                    <div class="feeds-block__item-img">
                      <img src="${allBank[i].image}" alt="${allBank[i].name}" title="${allBank[i].name}">
                    </div>
                    <div class="feeds-block__item-content">
                      <strong class="h5 text-capitalize">${allBank[i].name} (IOS)</strong>
                      <strong class="h6 text-capitalize pl-3 text_promo" style="font-size: 14px;color: #fd4848; min-height: 20px;"> Giới thiệu nhiều, nhận tiền triệu</strong>
                      <div class="sub-info">
                        ${innerDetails}
                      </div>
                     </div>
                                <div class="feeds-block__item-button">
                                     <a href="${deeplink}${allBank[i].ios}&utm_source=banksodep&utm_medium=${url}&utm_campaign=reg-now&utm_content=Nhấn%20đăng%20kí%20tài%20khoản" data-link="${deeplink}${allBank[i].ios}" target="_blank" id="track_link" class="btn-lead">
                                        <button id="bttn_voucher" data-id="1">
                                            <span>Đăng Ký Tài Khoản</span>
                                        </button>
                                     </a>
                                      <a href="" target="_blank" class="btn-lead track_info" id="track_info" style="margin-top: 15px; float: left; display: none;">Điền thông tin nhận Voucher sau khi đăng ký thành công</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>  `;
  }
  document.getElementById('innerBank').innerHTML = innerHTMLIOS;
}


if (jscd.os.match(/Android/g)){ //Android
  innerAndroid()
}
if (jscd.os.match(/iOS/g)){  //IOS
  innerIOS()
}
if (jscd.os.match(/Windows/g)){ //Window
  innerAndroid()
}

//for(let i=0; i<allBank.length;i++){

