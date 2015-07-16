<?php
    # to handle any shutdown of the php thread
    function shutdown_handler() {
        ini_set("error_log", "/tmp/php-error.log");
        $error = error_get_last();

        if(!is_null($error)) {
            # http://us1.php.net/manual/en/errorfunc.constants.php
            $info = array(
                'error' => var_export($error, true)
            );

            $url = ($_SERVER['SERVER_PORT'] == 443 ? 'https' : 'http').'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
            $args = <<<EOT
url : {$url}
error : {$info['error']}
EOT;
            error_log($args, 0);
        }
    }

    register_shutdown_function("shutdown_handler");
    # to handle any shutdown of the php thread
?>
