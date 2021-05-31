// This is a JavaScript file

$(document).on("click", "#codigo", function(){
     cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.cancelled == true){
           $("#resultado").html("<p>Cancelado</p>");
           $("#resultado").css("background-color", "#E75A5D");
          
        }
        else{
           $("#resultado").html("<p>"+result.text+"</p>");
           $("#resultado").css("background-color", "#D3F1B7");
        }
      },
      function (error) {
          $("#resultado").html("<p>"+error+"</p>");
          $("#resultado").css("background-color", "#red");
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: true // iOS and Android
      }
   );
});