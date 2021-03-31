import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x26B9d1049e81f6f14b340ca77088191Da90390D8'
);

export default instance;
