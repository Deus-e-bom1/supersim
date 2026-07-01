<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
error_reporting(0);
ini_set('display_errors', 0);

if (isset($_GET['cpf'])) {
    $cpf = preg_replace('/[^0-9]/', '', $_GET['cpf']);
    $url = "https://api-apela.online/?user=a2a46935d4deb43874fcbf9828f00e10&cpf=" . $cpf;
    
    $context = stream_context_create([
        "http" => [
            "ignore_errors" => true, // Fetch even if 404/500
            "user_agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "timeout" => 15
        ],
        "ssl" => [
            "verify_peer" => false,
            "verify_peer_name" => false,
        ]
    ]);
    
    $response = @file_get_contents($url, false, $context);
    
    if ($response !== false) {
        // If response is somehow HTML (cloudflare block, error), we check it
        $is_json = json_decode($response);
        if (json_last_error() === JSON_ERROR_NONE) {
            echo $response;
        } else {
            echo json_encode(["error" => "API did not return JSON", "raw" => substr($response, 0, 100)]);
        }
    } else {
        $err = error_get_last();
        echo json_encode(["error" => "Failed to fetch data from API", "details" => $err ? $err['message'] : 'timeout']);
    }
} else {
    echo json_encode(["error" => "CPF not provided"]);
}
?>
