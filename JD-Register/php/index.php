<?php
	header("Content-type:text/html;charset=utf-8");
	$user=$_GET["username"];
	$link=mysqli_connect("localhost","root","root","jd");
	$sql="select username from userinfo where username='$user'";
	$result=mysqli_query($link,$sql);
	$row=mysqli_fetch_array($result);
	if($row!=null)
		echo 0;
	else
		echo 1;
?>