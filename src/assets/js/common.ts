import urls from './apis';
import axios from 'axios';

class CommonJs {

    async login(self: any) {

        return await axios({

            method: 'post',
            url: urls.login,
            data: {
                userName: self.username,
                password: self.password
            }

        })
    
    }

}

let commonObj = new CommonJs;

export default commonObj;