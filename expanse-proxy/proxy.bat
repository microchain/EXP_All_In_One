echo off
color 02
echo launching proxy in 5 minutes or press any key if your gexp is Synced 
TIMEOUT /T 300
cd expanse-proxy/
expanse-proxy.exe config.json
pause