<?php

    function sum(int &$a) {
        $a++;
        return $a;
    }

    $b = 12 ;
    $result = sum($b);
    echo "<h1>$b</h1> :  $result";

?>