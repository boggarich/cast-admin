let apiOrigin  = 'http://45.63.116.200';

export let bearerToken = localStorage.getItem('adminBearerToken');

let urls = {
    getChannels: apiOrigin + '/api/admin/channels',
    getCasters: apiOrigin + '/api/admin/casters',
    login: apiOrigin +  '/api/admin/dashboard/users/login',
}

export default urls;