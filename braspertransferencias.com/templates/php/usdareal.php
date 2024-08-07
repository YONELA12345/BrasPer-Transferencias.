<?php
$urlreal = 'https://www.google.com/finance/quote/USD-BRL';
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
    echo "<input type='hidden' value='" . $mitexto . "' id='usdareal' >";
    $content = substr($content, strpos($content, 'YMlKec fxKbKc') + 1);
}
/*
$urlreal = 'https://themoneyconverter.com/ES/USD/BRL';
$content = file_get_contents($urlreal);
//echo '<textarea>' . $content . '</textarea><br>';
while (strpos($content, 'BRL/USD =')) {
    $posible_url = substr(
        $content,
        strpos($content, 'BRL/USD =') - 30,
        strpos($content, 'BRL/USD =') + 30
    );
    $content = substr($content, strpos($content, 'BRL/USD = ') + 1);
    $pos_arr = strpos($posible_url, 'BRL/USD =');
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
    //echo 'Dolar a Real: ';
    echo "<input value='" . $comillas . "' id='usdareal' hidden><br>";
}

while (strpos($content, 'BRL/USD =')) {
    $posible_url = substr(
        $content,
        strpos($content, 'BRL/USD = ') - 30,
        strpos($content, 'BRL/USD =') * 30
    );

    $posicifinal = strpos($posible_url, 'USD');
    $posible_url = substr($posible_url, 6, $posicifinal);
    $content = substr($content, strpos($content, 'BRL/USD =') + 1);
    $entero = substr($posible_url, 4, 6);
    $mitexto = "$entero";
    $reemplazar = str_replace(',', '.', $mitexto);
    echo "<input value='" . $reemplazar . "' id='usdareal' hidden>";
    //echo strlen($entero);
}
 $urlreal="https://themoneyconverter.com/ES/USD/BRL";
$content=file_get_contents($urlreal);

    $inicio=substr($content,strpos($content,"USD ="));
    $final=strpos($inicio,'BRL');
    $posible_url=substr($inicio,0,$final);
    
    $content=substr($content,strpos($content,"cc-ratebox")+1);  

$entero=substr($posible_url,6,11);
$mitexto="$entero";
$reemplazar=str_replace(',','.',$mitexto);
echo "<input type='hidden' value='".$reemplazar."' id='usdareal' >"; 
*/
?>
