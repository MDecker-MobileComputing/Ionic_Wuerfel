# Electron-Apps erstellen #

Würfel-App als Electron-App für verschiedene Desktop-Betriebssysteme (Zielplattformen) erstellen:
```
npm run electron:mac
npm run electron:linux
npm run electron:win
```
Siehe Definition der entsprechenden Befehle in [package.json](package.json) unter `scripts`.
Für jede Zielplattform wird ein Unterordner im Ordner `release-builds` angelegt.

<br>

Die Linux-App ist über `./WuerfelApp &` im Ordner `WuerfelApp-linux-x64` zu starten.

<br>

----

## Referenzen ##

* Ionic-App mit Electron für Windows und MacOS bauen: https://devdactic.com/ionic-desktop-electron/
* Electron-App (nicht Ionic-spezifisch!) für Windows, MacOS und Linux bauen: https://www.christianengvall.se/electron-packager-tutorial/

