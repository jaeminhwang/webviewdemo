(function () {

    // react-native에 통신을 요청한다.
    $('#btnSend').on('click', function() {    
        console.log(">>>>> RN Webview 통신 테스트");
        //sendMsgToParent("Hello, React Native Webview");     
        window.ReactNativeWebView.postMessage("Hello, React Native Webview");  
    })
    
    function sendMsgToRN( msg ) {
      //window.parent.postMessage( msg, '*' );
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));      
    }

    $('#btnCommand').on('click', function() {
        console.log(">>>>> Command 메시지 RN Webview로 Response 테스트 전송");
        
        var option = {
            "vender": "OnTheLive",
            "type": "Response",
            "command": "TurnOnCam",
            "transaction": "2",
            "data": "Success"
        }
       
        sendMsgToRN(option);
        
    })

    $('#btnEnum').on('click', function() {
        console.log(">>>>> 디바이스 목록 메시지 RN Webview로 Response 테스트 전송")
        
        var option = {
            "vender": "OnTheLive",
            "type": "Response",
            "command": "EnumerateDevices",
            "transaction": "1",
            "data": {
                "camDevices": [
                    {
                        "deviceId": "c780cc3e4b848be1a3b71e95dcd7b646e1c59b8ff234af4a3de957114e98c204",
                        "groupId": "16b370f1f458fb03f5719dfadd6cddeacf47a3f8b656ce7cbb111a8bd11ddbe2",
                        "kind": "videoinput",
                        "label": "Front Cam"
                    },
                    {
                        "deviceId": "d780cc3e4b848be1a3b71e95dcd7b646e1c59b8ff234af4a3de957114e98c205",
                        "groupId": "16b370f1f458fb03f5719dfadd6cddeacf47a3f8b656ce7cbb111a8bd11ddbe2",
                        "kind": "videoinput",
                        "label": "Back Cam"
                    }
                ],
                "micDevices": [
                    {
                        "deviceId": "1534a85b06813bf64069fe162f87d5224df37ab822219762f58c8d0c64df66e0",
                        "groupId": "16b370f1f458fb03f5719dfadd6cddeacf47a3f8b656ce7cbb111a8bd11ddbe2",
                        "kind": "audioinput",
                        "label": "마이크(Logitech StreamCam)"
                    }
                ]
          }
        }

        sendMsgToRN(option);
    })

    $('#btnUsers').on('click', function() {
        console.log(">>>>> 디바이스 목록 메시지 RN Webview로 Response 테스트 전송")
        
        var option = {
            "vender": "OnTheLive",
            "type": "Response",
            "command": "EnumerateDevices",
            "transaction": "1",
            "data": {
                "camDevices": [
                    {
                        "deviceId": "c780cc3e4b848be1a3b71e95dcd7b646e1c59b8ff234af4a3de957114e98c204",
                        "groupId": "16b370f1f458fb03f5719dfadd6cddeacf47a3f8b656ce7cbb111a8bd11ddbe2",
                        "kind": "videoinput",
                        "label": "Front Cam"
                    },
                    {
                        "deviceId": "d780cc3e4b848be1a3b71e95dcd7b646e1c59b8ff234af4a3de957114e98c205",
                        "groupId": "16b370f1f458fb03f5719dfadd6cddeacf47a3f8b656ce7cbb111a8bd11ddbe2",
                        "kind": "videoinput",
                        "label": "Back Cam"
                    }
                ],
                "micDevices": [
                    {
                        "deviceId": "1534a85b06813bf64069fe162f87d5224df37ab822219762f58c8d0c64df66e0",
                        "groupId": "16b370f1f458fb03f5719dfadd6cddeacf47a3f8b656ce7cbb111a8bd11ddbe2",
                        "kind": "audioinput",
                        "label": "마이크(Logitech StreamCam)"
                    }
                ]
          }
        }

        sendMsgToRN(option);
    })

}());
