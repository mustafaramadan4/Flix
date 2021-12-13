module.exports = {
    loginWithCredentials: function() {
    // Make the GET request to our local NodeJS backend server targeting
    // '/users' resource with the provided parameters. 
    axios.get('https://flix-express.herokuapp.com/users', {
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
            navigation.navigate('TabNav');
        } else if (response.data.length < 1) {
            console.log('Failed to log user in.');
            
        }
      });
}
