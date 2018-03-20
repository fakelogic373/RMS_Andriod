export default class DB {
    constructor(url) {
        this.url = url;
    }
    find = async(action,parameters) => {
        let urlParameters = '';
        if (parameters) {
            urlParameters = '?' +
            Object.keys(parameters).map( i => i + '=' + parameters[i]).join('&')
        }
        console.log(urlParameters)
        try {
            // const TOKEN = sessionStorage.getItem('token');
            // var headers = {};
            // if (TOKEN) {
            //     headers.Authorization = "Bearer " + TOKEN;
            // }
            var response = await fetch(this.url + urlParameters, {

            });
            var data = await response.json();
            console.log("data fetched or find");
            action(data)
        }
        catch (e) {
            console.log("Error", e)
        }
    }

    findAll = async (action) => {
        try {
            var response = await fetch(this.url);
            var data = await response.json();
            console.log(data);
            action(data);
        }
        catch (e) {
            console.log("Error", e)
        }
    }

    findOne = async (id, action) => {
        try {
            var response = await fetch(this.url + '/' + id );
            var data = await response.json();
            console.log(data);
            action(data);
        }
        catch (e) {
            console.log("Error", e);
        }
    }

    create = async (json) => {
        try {
            var response = await fetch(this.url,
                
            )
            var data = await response.json();
            console.log(data);
        } catch (e) {
            console.log("Error", e)
        }
    }

    destroy = async (id, action) => {
        try {
            var response = await fetch(this.url + '/' + id
            );
            var data = await response.json();
            console.log(data);
            // take an action with the data
            action()
        } catch (e) {
            console.log("Error", e)
        }
    }

    update = async (id, json, action) => {
        try {
            var response = await fetch(this.url + '/' + id
            )
            if (action) {
                action()
            }
        } catch (e) {
            console.log("Error", e)
        }
    }

    // addToken = (request) => {
    //     request = request || {}
    //     request.headers = request.headers || {}
    //     request.headers.Authorization =  'Bearer ' + sessionStorage.getItem('token')
    //     return request
    // }
    
    buy = async (id, action) => {
        try {
            var response = await fetch(this.url + '/api/User?query=buy&id=' + id );
            var data = await response.json();
            console.log(data);
            action(data);
        }
        catch (e) {
            console.log("Error", e);
        }
    }


    checkout = async (action) => {
        const response = await fetch(this.url +'/api/User?query=checkout')
        const data = await response.json()
        action(data)
    }

    // setCooking = async (id,action) => {
    //     const response = await fetch(this.url +'/api/Orders?query=setCooking&id=' + id)
    //     const data = await response.json()
    //     action(data)
    // }



}