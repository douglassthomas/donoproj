<?php
    header("Access-Control-Allow-Origin: *");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form style='
                display: flex;
                justify-content: center;
                align-items:center;
                width:100%;
                height:calc(100vh - 50px);
            ' id='fromnih'
            encType='multipart/form-data'
            method='POST'
            action='assetDownloader.php'
            >
                <input type='file' name='filenih' id='filenih'/>
                <button type='submit'>UPLOAD</button>
            </form>
</body>
</html>        
        