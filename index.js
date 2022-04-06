(function () {

    // react-native에 통신을 요청한다.
    $('#btnSend').on('click', function() {    
        console.log(">>>>> RN Webview 통신 테스트");
        window.ReactNativeWebView.postMessage("Hello, React Native Webview");        
    })
    
    function sendMsgToParent( msg ) {
      window.parent.postMessage( msg, '*' );
    }

    // react-native에 통신을 요청한다.
    $('#btnCommand').on('click', function() {
        var option = {
            "vender": "OnTheLive",
            "type": "Respone",
            "command": "TurnOnCam",
            "transaction": "2",
            "data": "Success"
        }
       
        // "doCommand"는 react-native에서 받는 메서드 이름입니다.
        sendMsgToParent(option);
        console.log(">>>>> Command 메시지 전송")
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
