<?php
    $json = file_get_contents('/Users/brucelim/Sites/github/tentacles.kraken/data/instagram.urls.json');

    var_export(json_decode($json, true));
?>