# Electron-Apps erstellen #

Würfel-App als Electron-App für verschiedene Desktop-Betriebssysteme (Zielplattformen) erstellen:
```
npm run electron:mac
npm run electron:linux
npm run electron:win
```
Siehe Definition der entsprechenden Befehle in [package.json](package.json) unter `scripts`.
Für jede Zielplattform wird ein Unterordner im Ordner `release-builds` angelegt:
```
release-builds/WuerfelApp-win32-ia32
release-builds/WuerfelApp-darwin-x64
release-builds/WuerfelApp-linux-x64
```
Der Ordner mit `darwin` im Namen ist für MacOS.

<br>

Wenn unter Ubuntu der Befehl `npm run electron:win` ausgeführt werden soll, dann muss [Wine](https://www.winehq.org/) installiert sein:
* Überprüfen, ob es installiert ist: `wine --version`
* Installieren: `sudo apt install wine64`

<br>

Die Linux-App ist über folgenden Befehl im Ordner `WuerfelApp-linux-x64` zu starten: `./WuerfelApp &`

<br>

----

## Referenzen ##

* Ionic-App mit Electron für Windows und MacOS erstellen: https://devdactic.com/ionic-desktop-electron/
* Electron-App (nicht Ionic-spezifisch!) für Windows, MacOS und Linux erstellen: https://www.christianengvall.se/electron-packager-tutorial/

<br>