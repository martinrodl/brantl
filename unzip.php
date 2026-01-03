<?php
// Simple unzip script - DELETE after use!
$zipFile = 'brantl-static-deploy.zip';
$extractTo = './';

if (file_exists($zipFile)) {
    $zip = new ZipArchive;
    if ($zip->open($zipFile) === TRUE) {
        $zip->extractTo($extractTo);
        $zip->close();
        echo "✅ ZIP extracted successfully!<br>";
        echo "Files extracted to: " . realpath($extractTo) . "<br>";
        echo "<br><strong>⚠️ Now DELETE this unzip.php file immediately!</strong>";
    } else {
        echo "❌ Failed to open ZIP file";
    }
} else {
    echo "❌ ZIP file not found: $zipFile";
}
?>
