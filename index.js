(function () {

    // react-native에 통신을 요청한다.
    $('#btnSend').on('click', function() {
        var option = {
            url: '/movie.json'
        }

        // "getMovieList"는 react-native에서 받는 메서드 이름입니다.
        window.webViewBridge.send('getMovieList', option, function(res) {
            $('#result').html(JSON.stringify(res))
        }, function(err) {
            console.error(err)
        })
    })

    // react-native에 통신을 요청한다.
    $('#btnCommand').on('click', function() {
        var option = {
    "vender": "OnTheLive",
    "type": "Request",
    "command": "TurnOnCam",
    "transaction": "2",
    "data": [
        { "deviceId": "c780cc3e4b848be1a3b71e95dcd7b646e1c59b8ff234af4a3de957114e98c204"}
    ]
}
       
        // "doCommand"는 react-native에서 받는 메서드 이름입니다.
        window.postMessage(option, '*');
        console.log(">>>>> 테스트 메시지 전송")
    })

    // react-native에 통신을 요청한다.
    $('#btnEnum').on('click', function() {
        var option = {
    "vender": "OnTheLive",
    "type": "Request",
    "command": "EnumerateDevices",
    "transaction": "1",
    "data": ""
    }

        // "doCommand"는 react-native에서 받는 메서드 이름입니다.
        window.webViewBridge.send('doEnum', option, function(res) {
            $('#result3').html(JSON.stringify(res))
        }, function(err) {
            console.error(err)
        })
    })






}());
