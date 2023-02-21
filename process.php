<?php

echo 'Processing...' . "\n\n";

if (isset($_POST['name'])) {
  echo 'Name: ' . $_POST['name'] . "\n";
}

if (isset($_POST['email'])) {
  echo 'Email: ' . $_POST['email'] . "\n";
}

if (isset($_POST['message'])) {
  echo 'Message: ' . $_POST['message'];
}
