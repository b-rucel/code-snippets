<?php

function file_get_php_classes($filepath, $onlypublic=true) {
    $php_code = file_get_contents($filepath);
    $classes = get_php_classes($php_code, $onlypublic);

    return $classes;
}

function get_php_classes($php_code, $onlypublic) {
    $classes = array();
    $methods=array();
    $tokens = token_get_all($php_code);
    $count = count($tokens);

    for ($i = 2; $i < $count; $i++) {
        if ($tokens[$i - 2][0] == T_CLASS
            && $tokens[$i - 1][0] == T_WHITESPACE
            && $tokens[$i][0] == T_STRING) {
            $class_name = $tokens[$i][1];
            $methods[$class_name] = array();
        }

        if ($tokens[$i - 2][0] == T_FUNCTION
            && $tokens[$i - 1][0] == T_WHITESPACE
            && $tokens[$i][0] == T_STRING) {
            
            if ($onlypublic) {
                if ( !in_array($tokens[$i-4][0],array(T_PROTECTED, T_PRIVATE))) {
                    $method_name = $tokens[$i][1];
                    $methods[$class_name][] = $method_name;
                }
            } else {
                $method_name = $tokens[$i][1];
                $methods[$class_name][] = $method_name;
            }
        }
    }

    return $methods;
}

