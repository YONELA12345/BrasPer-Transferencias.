<?php
//$urlreal="https://www.google.com/finance/quote/PEN-USD";
$urlreal="https://www.google.com/finance/quote/USD-PEN";
$content=file_get_contents($urlreal);
while(strpos($content,"YMlKec fxKbKc")){
    $resultado=substr($content,strpos($content,"YMlKec fxKbKc")-1,strpos($content,"YMlKec fxKbKc")+1);
    $pos_arr=strpos($resultado,"YMlKec fxKbKc");
    while(strrpos($resultado,">") > 0 && strrpos($resultado,"<") > $pos_arr){
        $resultado=substr($resultado,0,strrpos($resultado,"<"));
        
    }
    $entero=substr($resultado,16,16);
    $mitexto="$entero";
    $reemplazar=str_replace(',','.',$mitexto);
    $reves=1/$mitexto;
    echo "<input type='hidden' value='".$reves."' id='soladol' >";
    $content=substr($content,strpos($content,"YMlKec fxKbKc")+1);
}
/*
$urlreal = 'https://themoneyconverter.com/PEN/USD';
$content = file_get_contents($urlreal);
//echo '<textarea>' . $content . '</textarea>';
while (strpos($content, 'USD/PEN =')) {
    $posible_url = substr(
        $content,
        strpos($content, 'USD/PEN = ') - 30,
        strpos($content, 'USD/PEN =') * 30
    );

    $posicifinal = strpos($posible_url, 'PEN');
    $posible_url = substr($posible_url, 6, $posicifinal);
    $content = substr($content, strpos($content, 'USD/PEN =') + 1);
    $entero = substr($posible_url, 4, 6);
    $mitexto = "$entero";
    $reemplazar = str_replace(',', '.', $mitexto);
    echo "<input value='" . $reemplazar . "' id='soladol' hidden>";
    //echo strlen($entero);
}

$urlreal="https://themoneyconverter.com/PEN/USD";
$content=file_get_contents($urlreal);

    $inicio=substr($content,strpos($content,"PEN ="));
    $final=strpos($inicio,'USD');
    $posible_url=substr($inicio,0,$final);
    
    $content=substr($content,strpos($content,"cc-ratebox")+1);  

$entero=substr($posible_url,6,11);
$mitexto="$entero";
$reemplazar=str_replace(',','.',$mitexto);
echo "<input type='hidden' value='".$reemplazar."' id='soladol' >";
*/

?>
