import React from 'react'
import footerLogoImg from '../assets/footerlogo.png'
import './css/footer.css'
import {
  PhoneOutlined
} from '@ant-design/icons';


const Footer = () => (
  <div className='footer'>
    <div className="mainfooter">
      <div className="mainleft">
        <div className="logo">
          <img src={footerLogoImg} alt="" className="footerlogo" />
        </div>
        <div className="introduce">
          smartproxy是IP代理服务器方案提供商，服务于大数据采集领域帮助企业/个人快速、高效的获取数据源，全面解决客户采集难效率慢等难题。
        </div>
        <div className="tel">
          <PhoneOutlined /> 16523147894
        </div>
      </div>
      <div className="mainright">

      </div>
      <hr/>
      <div className="link">
        <span>友情链接</span>
        {/* <a href="">豌豆HTTP  |</a>
        <a href="">豌豆代理  |</a>
        <a href="">比特指纹浏览器</a> */}
      </div>
      <hr/>
      <div className="footerbottom">
        <div className='copyright'><span>我们重视用户的隐私及安全，不会强制收集和使用用户信息，我们承诺用户数据不会和任何第三方机构进行共享，不会用于任何商业用途，</span></div>
        <div className='copyright'><span>我们遵守国家法律，不可用于非法途径，不能访问静态封闭网站，不跨境联网</span></div>
        <div className="copyright"><span>版权所有 上海圣钧信息科技有限公司 沪ICP备2022013962号-1</span></div>
      </div>
    </div>
  </div>
);

export default Footer;