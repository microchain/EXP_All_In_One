echo off
color 02
echo launching wallet in 5 minutes or press any key if your gexp is Synced 
TIMEOUT /T 300
expwallet.exe | taskkill /F /IM cmd.exe