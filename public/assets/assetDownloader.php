<?php

    ini_set('upload_max_filesize', '2000M');
    ini_set('post_max_size', '2000M');

    header("Access-Control-Allow-Origin: *");

    if($_SERVER["REQUEST_METHOD"]=="POST"){
        // $path = $_POST['path'];
        $name = $_FILES['filenih']['name'];
        
        move_uploaded_file($_FILES['filenih']['tmp_name'], './'.$name);

        echo $name;

        // header('Location: /upload');
        
    }
