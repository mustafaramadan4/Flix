import axios from 'axios';

module.exports = {
    loginWithCredentials: function(email, password) {
        let loggedIn;
        // Make the GET request to our local NodeJS backend server targeting
        // '/users' resource with the provided parameters.
        return new Promise ((resolve, reject) => {
            axios.get('https://flix-express.herokuapp.com/users', {
            // axios.get('http://192.168.68.130:3000/users', {
                params: {
                    email: email,
                    password: password
                }
            }) // TODO: update to log error when connection to express server fails
            .then(function (response) {
                    console.log('response.data:')
                    console.log(response.data);
                    if (response.data.length == 1) {
                        console.log('User logged in!');
                        loggedIn = true;
                        resolve(true);
                    } else if (response.data.length < 1) {
                        console.log('Failed to log user in.');
                        loggedIn = false;
                        resolve(false);
                        reject(true);
                    }
                }
            );
        });
    },
}
