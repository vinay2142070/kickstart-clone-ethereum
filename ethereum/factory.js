import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4eD6D86f85099AB237Eb3fCd9051001038e7C315'
);

export default instance;
