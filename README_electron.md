# Würfel-App als Electron-App für Desktop-Betriebssysteme erstellen ##

## Änderungen ##

Folgende Änderungen an der App waren erforderlich, um die App auch als Electron-App zu erstellen:
* Umlauf aus Anzeigename der App entfernt ("Wuerfel" statt "Würfel"), siehe Attribut `appName` in Datei 
  [capacitor.config.json](./capacitor.config.json) festgelegter Anzeigename der App.
* In Datei [index.html](src/index.html) im Ordner `src` musste der Wert des `href`-Attributs des `<base>`-Tags um einen Punkt vor dem Slash ergänzt werden.
* In der Datei mit den CSS-Regeln für die einzige Seite der App (Datei [home.page.scss](src/app/home/home.page.scss)) wurden die Regeln für den Selektor `ion-img` so angepasst, dass die Würfel-Grafik in ihrer nativen Größe angezeigt wird (also nicht vergrößert oder verkleinert wird).

<br>

## Electron-Apps erstellen ##

Vorbereitung:
```
npm install 
npm install ngx-electron electron
ionic build 
npx cap add electron
```

Vorschau der Electron-App: 
```
npx cap open electron
```

Nach Änderung im Quellcode:
```
ionic capacitor copy
```

Dann Würfel-App als Electron-App für verschiedene Desktop-Betriebssysteme (Zielplattformen) mit einem der folgenden Befehle erstellen:
```
npm run electron:win
npm run electron:mac
npm run electron:linux
```
Siehe Definition der entsprechenden Befehle in [package.json](package.json) unter `scripts`.
Für jede Zielplattform wird ein Unterordner im Ordner `release-builds` angelegt.

<br>

**Start der App:**
* Windows: Der Ordner `WuerfelApp-win32-ia32` enthält die Datei `WuerfelApp.exe`, die durch Doppelklick gestartet werden kann.
* Linux: Im Ordner `WuerfelApp-linux-x64` den Befehl `./WuerfelApp &` ausführen.

<br>

----

## Cross-Platform-Compilation ##

Die App konnte unter Windows für Linux erstellt werden.

**App für Windows unter Ubuntu-Linux erstellen:**
Wenn unter Ubuntu der Befehl `npm run electron:win` ausgeführt werden soll, dann muss [Wine](https://www.winehq.org/) installiert sein:
* Überprüfen, ob es installiert ist: `wine --version`
* Installieren: `sudo apt install wine64`

<br>

Die App konnte unter Linux auch für MacOS erstellt werden, aber nicht unter Windows für MacOS.

<br>

----

## Referenzen ##

* Ionic-App mit Electron für Windows und MacOS erstellen: https://devdactic.com/ionic-desktop-electron/
* Electron-App (nicht Ionic-spezifisch!) für Windows, MacOS und Linux erstellen: https://www.christianengvall.se/electron-packager-tutorial/

<br>