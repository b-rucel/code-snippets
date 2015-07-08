<?php
    $json = file_get_contents('sample.json');

    var_export(json_decode($json, true));
?>