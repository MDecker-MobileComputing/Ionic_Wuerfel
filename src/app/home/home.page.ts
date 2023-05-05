import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

/**
 * Page zum Abruf der einzelnen Würfelwerten.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** URL um die Web-API aufzurufen, so dass sie eine Zufallszahl vom Typ `uint8`. */
  readonly URL_WEBAPI = "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8";

  /** Konfigurations-Objekt für HttpClient. */
  readonly OPTIONS_OBJECT: object = { observe: "response" };

  /** Wert für "src"-Attribut für `ion-img`-Element, mit dem aktuelle Zufallszahl dargestellt wird. */
  public wuerfelBildSource = "./assets/wuerfel_1.png";

  /** Würfel wird nur dann angezeigt, wenn diese Variable den Wert `true` hat. */
  public wuerfelSichtbar = false;


  /**
   * Konstruktor für *Dependency Injection*.
   */
  constructor( private httpClient: HttpClient,
               private alertCtrl : AlertController ) {}


  /**
   * Event-Handler für Button, der Web-API-Request auslöst.
   */
  public onNeueZahlButton() {

      this.httpClient.get(this.URL_WEBAPI, this.OPTIONS_OBJECT)
                     .subscribe(this.verarbeiteHttpResponse, this.verarbeiteHttpFehler);
  }

  /**
   * Event-Handler für erfolgreichen HTTP-Request.
   * Holt Zufallszahl aus JSON-String in der HTTP-Response und wandelt diese in eine Würfelzahl
   * von 1..6 um. Die entsprechende Würfelzahl wird als Bild angezeigt.
   *
   * Beispiel für Response:
   * ```
   * {
   *   "type":"uint8",
   *   "length":1,
   *   "data":[56],
   *   "success":true
   * }
   * ```
   */
  private verarbeiteHttpResponse = (httpResponse:any) => {

    const dataArray = httpResponse.body.data;

    const laenge = dataArray.length;
    if (laenge !== 1) {

      console.log(`FEHLER: Nicht genau ein Element im Array mit Zufallszahlen enthalten sondern ${laenge}.`);
      return;
    }

    const zufallszahl = dataArray[0];
    console.log(`zufallszahl=${zufallszahl}`);

    const wuerfelzahl = ( zufallszahl % 6 ) + 1;
    console.log(`wuerfelzahl=${wuerfelzahl}`);

    this.wuerfelBildSource = `./assets/wuerfel_${wuerfelzahl}.png`;
    this.wuerfelSichtbar = true;
  }

  /**
   * Event-Handler für fehlgeschlagenen HTTP-Request.
   */
  private verarbeiteHttpFehler = (fehler: HttpErrorResponse) => {

    const fehlerJson = JSON.stringify(fehler);
    console.log(`Fehler beim Zugriff auf Web-API (Status Code: ${fehlerJson})`);
    this.zeigeDialog("Fehler bei Web-API-Zugriff um Zufallszahl zu holen.");
    this.wuerfelSichtbar = false;
  }

  /**
   * Alert anzeigen, siehe auch https://ionicframework.com/docs/api/alert
   */
  private async zeigeDialog(nachricht: string) {

      const meinAlert =
      await this.alertCtrl.create({
          header  : "Fehler",
          message : nachricht,
          buttons : [ "Ok" ]
      });

      await meinAlert.present();
    }

}
