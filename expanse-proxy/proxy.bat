echo off
color 02
echo launching proxy in 5 minutes or press any key if your gexp is Synced 
TIMEOUT /T 280
expanse-proxy.exe config.json
pause
