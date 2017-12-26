import axios from 'axios'

export default class GetNews {
    static request = () => {
        return axios.get('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,USD,EUR,XRP,ETH,XMR,ZEC,NEO,ICN,XEM,CTO').then((response)=>{
            console.log(response)
        })
            .catch((err) => {
                throw err
            })
    }
}
