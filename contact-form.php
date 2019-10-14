<?php

if (isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $content = $_POST['content'];
  $sucess = '';

  $mailTo = "kevin@KevinKlintDavis.com";
  $headers = "From: ".$email;
  $text =  "You received an email from ".$name.".\n\n".$message;


if(mail($mailTo, $subject, $text, $headers)){
  //header("Location: index.html?mailsent");
  $name = $email = $subject = '';
  $content = "Message sent successfully!";
}
 ?>
