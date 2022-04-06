(function () {

    // react-native에 통신을 요청한다.
    $('#btnSend').on('click', function() {    
        console.log(">>>>> RN Webview 통신 테스트");
        sendMsgToParent("Hello, React Native Webview");     
    })
    
    function sendMsgToParent( msg ) {
      //window.parent.postMessage( msg, '*' );
      window.ReactNativeWebView.postMessage(msg);      
    }

    // react-native에 통신을 요청한다.
    $('#btnCommand').on('click', function() {
        console.log(">>>>> Command 메시지 RN Webview로 Response 테스트 전송");
        
        var option = {
            "vender": "OnTheLive",
            "type": "Response",
            "command": "TurnOnCam",
            "transaction": "2",
            "data": "Success"
        }
       
        sendMsgToParent(option);
        
    })

    // react-native에 통신을 요청한다.
    $('#btnEnum').on('click', function() {
        console.log(">>>>> 디바이스 목록 메시지 RN Webview로 Response 테스트 전송")
        
        var option = {
            "vender": "OnTheLive",
            "type": "Request",
            "command": "EnumerateDevices",
            "transaction": "1",
            "data": ""
        }

        sendMsgToParent(option);
    })



}());
