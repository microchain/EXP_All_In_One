ECHO OFF
COLOR 02
CLS
:MENU
ECHO.
ECHO :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
ECHO : Welcome to expanse all in one Mining, Wallet and gexp :
ECHO :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
ECHO :                                                       :
ECHO : 1 - gexp and expwallet only                           :
ECHO : 2 - gexp only                                         :
ECHO : 3 - gexp, expwallet and mining-proxy                  :
ECHO : 4 - gexp and mining-proxy only                        :
ECHO : 5 - exit                                              :
ECHO :                                                       :
ECHO :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
ECHO.
SET /P M=Type 1, 2, 3, 4 or 5 then press ENTER:
IF %M%==1 GOTO gexpwallet
IF %M%==2 GOTO gexp
IF %M%==3 GOTO all
IF %M%==4 GOTO gexpproxy
IF %M%==5 GOTO EOF
:gexpwallet
cd expwallet/
start expwallet.bat
gexp --port "42786" --rpc --rpcaddr "127.0.0.1" --rpcport "9656" --rpccorsdomain "*" --maxpeers "100" --nat "none" console
pause 
exit
:gexp
cd expwallet/
gexp --port "42786" --rpc --rpcaddr "127.0.0.1" --rpcport "9656" --rpccorsdomain "*" --maxpeers "100" --nat "none" console
pause 
exit
:all
cd expwallet/
start expwallet.bat
cd ../expanse-proxy/
start proxy.bat
cd ../expwallet/
gexp --port "42786" --rpc --rpcaddr "127.0.0.1" --rpcport "9656" --rpccorsdomain "*" --maxpeers "100" --nat "none" console
pause 
exit
:gexpproxy
cd expanse-proxy/
start proxy.bat
cd ../expwallet/
gexp --port "42786" --rpc --rpcaddr "127.0.0.1" --rpcport "9656" --rpccorsdomain "*" --maxpeers "100" --nat "none" console
pause 
exit