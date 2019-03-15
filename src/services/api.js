/*export default {
    post(url) {
        return {
            getOne : ({ id }) =>
            axios.get(`${url}/${id}`),
                getAll: () => axios.get(url),
                update : (toUpdate) =>
            axios.put(url,toUpdate),
                create: (toCreate) =>
            axios.put(url, toUpdate),
                delete: ({ id }) =>
            axios.delete(`${url}/${id}`)
        }
    }
}

//Example paramaters/arguments api.posts('posts).getAll()


//api.js

export default {
    ourPageRoute : `/ourPageRoute`
}


//OurPageRoute js controller

import api from './api';

fetchPageRouteData() {
     return axios.get(api.ourPageRoute)
}
*/