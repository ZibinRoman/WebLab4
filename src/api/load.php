<?
ob_end_clean();
header('content-type: application/json;charset=utf-8');
$inputJsonData = file_get_contents("php://input");
$inputJson = json_decode($inputJsonData);
$iofile = $inputJson->iofile;
$json = file_get_contents($iofile); 
$obj = json_decode($json, true);
echo json_encode($obj, JSON_UNESCAPED_UNICODE);
?>