module.exports.home = function(request, response) {

    return response.json({
        "home_content": "My own social networking website"
    })
}