<!doctype html>
<html class=no-js> 
    <head> 
        <meta charset=utf-8> 
        <title>Bio</title> 
        <meta name=description> <meta name=viewport content="width=device-width">  
        <link rel=stylesheet href=styles/vendor.css>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"> 
        <link rel=stylesheet href=styles/main.css> 
        <meta name="csrf-token" content="{{ csrf_token() }}" data-csrf="{{ csrf_token() }}" id="csrf">
    </head> 
    <body ng-app=bio>
        <div> 
            <div ui-view></div> 
        </div>  
        <script src=scripts/vendor.js></script> 
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
        <script src=scripts/scripts.js></script> 
    </body> 
</html> 