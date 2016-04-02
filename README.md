# Expanse All In One Setup

* 1: Run run_me_once.bat to make your coinbase address if you have never run gexp before.
 * (You only need to run this once if you have never had gexp on your PC)
 * (If you have run gexp before and have a coinbase address goto step 2.)

* 2: Run EXP_All_In_One.bat or EXP_All_In_One.exe and make your choice (Wait for gexp to completely sync).
 * 2.a: If you chose to start the proxy goto step 3. 

* 3: Make sure gexp has synced
 * 3.a: Run ethminer.bat with default settings or edit it and add your own settings.
 * 3.b: Where DIFF is your H/s converted to diff and ID is your miners name.
 * 3.c: Default Settings: ethminer -G -F http://127.0.0.1:3333/miner/20/Miner1

* 4: Open your Web Browser and point it too http://127.0.0.1:8080
 * 4.a: Username: admin Password: is blank by default, You can change the Username and Password in the config.json

Done... Have Fun...

Donations are welcome EXP: 0x14d56b0b9cdfdfd277b739774d61c77d78ae98e4 BTC: 1F54pw31eawxMFcFf7x5UquLSsY6EHDsPe

