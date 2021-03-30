import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5cC708F18E39b9ADfa741F5D9C8AD9C4725ad007'
);

export default instance;
