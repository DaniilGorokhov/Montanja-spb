<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$fo = $_POST['fo'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$email = $_POST['email'];

$date = substr($date, -2) . '-' . substr($date, -5, 2) . '-' . substr($date, 0, 4);

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'kripa0cool@mail.ru';
$mail->Password = 'overwatch1234';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('kripa0cool@mail.ru');
$mail->addAddress('montanja-spb@yandex.ru');
$mail->isHTML(true);

$mail->Subject = 'Заявка на заказ с сайта';
$mail->Body    = $fo . ' оставил(-а) телефон ' .$phone. ', удобное время для звонка: ' .$date. ' ' .$time. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thanks.html');
}
?>