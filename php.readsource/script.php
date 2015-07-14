<?php
    // reads class source definition and prints out method names
    include 'readsource.php';

    // file_get_php_classes
    // get_php_classes



    // one class file example
    print_r(file_get_php_classes('sample.php').PHP_EOL);



    // directory example
    $sample_dir = dirname($_SERVER['PWD'].'/'.$_SERVER['SCRIPT_FILENAME']).'/sample/';

    // print_r(dirname($_SERVER['PWD'].'/'.$_SERVER['SCRIPT_FILENAME']).PHP_EOL);
    // print_r(getcwd().'/sample/'.PHP_EOL);

    foreach (scandir($sample_dir) as $key => $value) {
        if(!startsWith($value, '.')) {
            print_r($value.PHP_EOL);
            print_r(file_get_php_classes($sample_dir.$value));
            print_r(PHP_EOL);
        }
    }

    function startsWith($haystack, $needle) {
        // search backwards starting from haystack length characters from the end
        return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== FALSE;
    }

?>