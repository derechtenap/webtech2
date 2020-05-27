_Übungsaufgaben Webtechnologie — Prof. de Vries, Technische Betriebswirtchaft, FH Südenwestfalen, Hagen_
# jQuery
## 1.1 Aufgabe: CSS-Selektoren
> (a) Verändern Sie mit jQuery die CSS-Einstellungen, so dass die Hintergrundfarbe aller `<tr>`-Elemente hellbau erscheinen.

> (b) Modifizeren Sie das Dokument, so dass nur noch jede zweite Zeile mit der Hintergrundfarbe erscheint. (Hinweis: [Link](http://www.w3schools.com/jquery/jquery_selectors.asp))

## 1.2 Aufgabe: Animationseffekte
> Programmieren Sie mit jQuery folgende Animationseffekte:

## 1.3 Aufgabe: Suchbegriffvervollständigung
> (a) Programmieren Sie eine Suchanfrage, die mittels der `autocomplete`-Funktion aus einer vordefinierten Liste von Programmiersprachen nach jedem Tastendruck diejenigen Begriffe anzeigt, die mit den bisher im Suchfeld übereinstimmen. Verwenden Sie dazu die bereitgestellten Frameworks neben der Standardbibliothek von jQuery:
> - [jQuery-UI](http://code.jquery.com/ui/1.11.4/jquery-ui.js)
> - [jQuery-UI-CSS](http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css)

**Letztere Ist kein JavaScript! Beachten Sie die Hinweise unter [Link](https://api.jqueryui.com/autocomplete/).**

> (* b) Modifizieren Sie Ihr Programm, so dass die gefilterten Suchbegriffe dynamisch aus einer Datenbank selektiert und im Suchfeld angezeigt werden.

## 1.4 * Aufgabe: AJAX mit jQuery
_Vgl. Aufgabe 15.2 aus dem letzten Semester_

> In dem [Verzeichnis](http://haegar.fh-swf.de/Webtechnologie/Aufgaben/Woche_1-15/) befinden sich der Quelltext einer HTML-Seite und mehrere JSON-Dateien mit Informationen zu verschiedenen Städten. Die HTML-Seite liefert das Gerüst, mit dem die Städteinformationen HTML5-konform angezeigt werden sollen. (Insbesondere sollte sie auch auf mobilen Endgeräten dargestellt werden, testen Sie es!)
Laden Sie die Dateien in ein Unterverzeichnis Ihres Webservers und erweitern Sie den Quelltext der HTML-Datei um jQuery-Anweisungen, so dass beim Anklicken der Buttons die jeweilige JSON-Datei geladen wird und deren Informationen in den Elementen `titel` und `inhalt` angezeigt werden. Zum Besipeil soll nach dem Laden der Datei `Istanbul.json` der folgende Text erscheinen:

### Istanbul
_Istanbul is a city in Turkey with a metropolitan area of 14 million residents. Istanbul is the most populous city of Turkey and of Europe._

Beachten Sie, dass standardmäßig jQuery den empfangenden Datentyp per _"Intelligent Guess"_ in JavaScript umformt.