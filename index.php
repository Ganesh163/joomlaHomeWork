<?php 
if(isset($_POST['submit'])){
    $target_path="images/";
    $target_path=$target_path.basename($_FILES['uploadedfile']['name']);
    if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'],$target_path)){
        $conn = new mysqli("localhost","root","","test");
        $sql = "Insert into upload_image(`path`) values('$target_path')";
        if($conn->query($sql)==TRUE){
            echo "<br><br>";
        }else{
            echo "Error:".$sql.$conn->error;
        }
        $sqli = "select path from upload_image order by id desc limit 1";
        $result = $conn->query($sqli);
        if($result->num_rows>0){
            while($row = $result->fetch_assoc()){
                $path=$row['path'];
                echo"
                    <div style=\"background-image: url('$path'); background-size: 100% 100%\"; class='item'>
                    <div class='resizer ne'></div>
                    <div class='resizer nw'></div>
                    <div class='resizer se'></div>
                    <div class='resizer sw'></div>
                    </div>
                ";
            }
        }
        $conn->close();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rectangles</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body class="main-area">
    <div class="container">
        <h1 id="main-heading">Draw a rectangle by clicking on the screen</h1>
        <form class = "my-5" method="post" enctype="multipart/form-data" action="" id="mainform">
            <input type="file" name="uploadedfile" class="form-control" id="image">
            <button type="submit" name="submit" class="btn btn-success my-3">UPLOAD</button>
        </form>
        <div class="playground">
        </div>
    <script src="app.js"></script>
</body>
</html>