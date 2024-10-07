import React from 'react';
import { Flex } from 'antd';
import { Divider } from 'antd';
const baseStyle = {
  width: '100%',
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  border:"2px solid #E1E1E1",
  backgroundColor: '#EBEBEB',
  borderRadius:"5px",

  marginTop:"10px",
  marginBottom:"10px",
  


};

const App = () => {
  return (
    <Flex  direction="row"> 
     <div style={{...baseStyle}}>
      <div>  <span className="text-[#00000073] text-[14px] font-[700] landing-[35px] pl-6 ">Merchant ID</span><span className="text-[#2E2828] text-[17px] font-[500] landing-[35px] ml-2 pr-5  ">M12345</span> </div><Divider style={{ borderColor: '#C2C2C2' }}className="h-6 w-2 " type="vertical"/>
      <div>  <span className="text-[#00000073] text-[14px] font-[700] landing-[35px] pl-6 ">Merchant Name</span><span className="text-[#2E2828] text-[17px] font-[500] landing-[35px] ml-2 pr-5   ">Name</span>  </div><Divider style={{ borderColor: '#C2C2C2' }} className="h-6" type="vertical"/>
      <div>  <span className="text-[#00000073] text-[14px] font-[700] landing-[35px] pl-6 ">Bind State</span><span className="text-[#2E2828] text-[17px] font-[500] landing-[35px] ml-2 pr-5  ">Bound</span>  </div><Divider style={{ borderColor: '#C2C2C2' }} className="h-6" type="vertical"/>
      <div>  <span className="text-[#00000073] text-[14px] font-[700] landing-[35px] pl-6 ">Sim IMSI</span><span className="text-[#2E2828] text-[17px] font-[500] landing-[35px] ml-2 pr-5  ">310260000000000</span>  </div><Divider style={{ borderColor: '#C2C2C2' }} className="h-6" type="vertical"/>
      <div>  <span className="text-[#00000073] text-[14px] font-[700] landing-[35px] pl-6 ">Mobile</span><span className="text-[#2E2828] text-[17px] font-[500] landing-[35px] ml-2 pr-5">+1234567890</span>  </div>
     </div>
    </Flex>
  );
};

export default App;




