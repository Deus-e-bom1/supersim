<?php
$url = "https://api-apela.online/?user=a2a46935d4deb43874fcbf9828f00e10&cpf=00000000000";
$context = stream_context_create([
    "http" => [
        "user_agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    ],
    "ssl" => [
        "verify_peer" => false,
        "verify_peer_name" => false,
    ]
]);
$res = @file_get_contents($url, false, $context);
if ($res === false) {
    echo "Error: ";
    print_r(error_get_last());
} else {
    echo "Success: $res";
}
