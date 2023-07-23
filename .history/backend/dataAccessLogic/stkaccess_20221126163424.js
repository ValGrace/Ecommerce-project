import * as WS from 'aws-sdk'
import axios from 'axios'

export class Stkaccess {
    constructor (){}

    async LipaPost(stkpush) {
        await axios.post(stkpush)
        return stkpush
    }
    
}