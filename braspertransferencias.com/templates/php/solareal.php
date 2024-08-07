<?php
$urlreal = 'https://www.google.com/finance/quote/PEN-BRL';
$content = file_get_contents($urlreal);
while (strpos($content, 'YMlKec fxKbKc')) {
    $resultado = substr(
        $content,
        strpos($content, 'YMlKec fxKbKc') - 1,
        strpos($content, 'YMlKec fxKbKc') + 1
    );
    $pos_arr = strpos($resultado, 'YMlKec fxKbKc');
    while (
        strrpos($resultado, '>') > 0 &&
        strrpos($resultado, '<') > $pos_arr
    ) {
        $resultado = substr($resultado, 0, strrpos($resultado, '<'));
    }
    $entero = substr($resultado, 16, 16);
    $mitexto = "$entero";
    $reemplazar = str_replace(',', '.', bcdiv($mitexto, '1', 4));
    echo "<input type='text' value='" . $mitexto . "' id='solareal' hidden>";
    $content = substr($content, strpos($content, 'YMlKec fxKbKc') + 1);
}
/*
$urlreal = 'https://themoneyconverter.com/ES/PEN/BRL';
$content = file_get_contents($urlreal);
while (strpos($content, 'BRL/PEN =')) {
    $posible_url = substr(
        $content,
        strpos($content, 'BRL/PEN =') - 30,
        strpos($content, 'BRL/PEN') + 30
    );
    $content = substr($content, strpos($content, 'BRL/PEN = ') + 1);
    $pos_arr = strpos($posible_url, 'BRL/PEN = ');
    while (
        strrpos($posible_url, '"') > 0 &&
        strrpos($posible_url, '"') > $pos_arr
    ) {
        $posible_url = substr($posible_url, 0, strrpos($posible_url, '"'));
    }
    $entero = substr($posible_url, 10, 7);
    $mitexto = $entero;
    $reemplazar = str_replace(',', '.', $mitexto);
    $comillas = str_replace('"', ' ', $reemplazar);
    $igual = str_replace('"', ' ', $comillas);
    //echo 'Sol a Real:';
    echo "<input value='" . $comillas . "' id='solareal' hidden><br>";
    echo "<input value='" . $igual . "' hidden><br>";
}

$urlreal = 'https://themoneyconverter.com/ES/PEN/BRL';
$content = file_get_contents($urlreal);
$inicio = substr($content, strpos($content, 'PEN =') + 0);
$final = strpos($inicio, 'BRL');
$posible_url = substr($inicio, -0, $final);
$content = substr($content, strpos($content, 'cc-ratebox') + 1);
$entero = substr($posible_url, 6, 14);
$mitexto = "$entero";
echo '<br>' . $entero . '<br>';
$reemplazar = str_replace(',', '.', $mitexto);
echo "<input value='" . $reemplazar . "' id='solareal' >";
*/

?>
