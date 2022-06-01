# Slutprojekt

Emil Åberg , 2022-05-30

## Inledning
Syftet var att göra ett eget slutprojekt där vi använder oss av de olika delarna vi jobbat med under kursen, databaser, hosting, planering, dokumentation och en bra och användarvänlig design.

Arbetssättet var att planera detaljrikt och sedan skissa i figma och när man börjar koda ska allting vara utplanerat så man hela tiden har koll på vad man ska göra. Jag kommer bygga sidan med 11ty och vara statisk men den tar information som kommer via en databas. Målet är att få fram en sida som folk kan läsa och se topplistor för olika saker, till exempel mest sökta maträtten på google, mest spelade låten på youtube mm.

## Bakgrund
Första delen var att planera projeketet, jag skrev upp de olika delarna och försökte beskriva hur jag skulle kunna koda det och göra strukturen. Efter planeringen gjorde jag skisser i figma där jag gjorde de olika sidorna och fixade teman. Temat tog jag från ett annat projekt jag jobbat med tidigare som jag hade spenderat mer tid på stylen, så jag visste att det fungerade bra och var validerad. I figman gjorde jag inte rätt färger utan jag var mer ute efter att göra objekten istället och fixade färgerna när jag kodade, inte det bästa sättet förmodligen. 

Sedan började jag med kodningen, först satte jag upp databasen och fixade så att jag kunde hämta "fetcha" datan från servern och sedan få en json fil lokalt där datan kom fram. Sedan länkade jag ihop detta min njk layout fil och fixade så att jag kunde läsa innehållet. Jag kunde efter det göra med hjälp av pagination sidor som skapades automatiskt för varje objekt i databas tabellen. Så jag behövde inte göra alla sidor enskilt utan de skapas från en layout, för att minska mängden filer och kod som jag skulle behövt göra. 

Efter jag fixat databasen och funktionerna på sidan började jag styla, jag tog del för del från figman och gjorde de till olika komponenter. Jag gjorde först navbaren som komponent så att jag kan inkludera den simpelt på alla sidor. Sedan gjorde jag landing pagen vilket var en väldigt simpel design som bara består av en stor bild under naven med rubrik på sidan. Under bilden ligger knapparna till de olika topplistorna, det är 8 rutor med passande bild och rubrik till topplistorna. Sidorna man kommer till innehåller samma nav som finns på landing page och detta för att jag vill ha en kontinuell design så man lätt man navigera runt utan några problem. Med mer tid hade jag gjort att en rubrik i navbaren ledde till en sida med en massa olika topplistor, och därav de 8 topplistorna på landing pagen var de populäraste.  En av rubrikerna går till en kontakt sida där information om "företaget" står, den blev inte färdig då jag fixade allt annat och inte hade tid. 

Redovisa arbetets olika delar. Så att läsaren förstår vad du gjort och hur.

Använd gärna bilder för att illustrera.

För att lägga till bilder i markdown. Bilderna kan du ladda upp med Git som vanligt, länka dem med url eller filnamnet.

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)


![NTI Gymnasiet Umeå Logo](https://raw.githubusercontent.com/jensnti/Webbprojekt/master/mallar/nti_logo_white_umea.svg)

## Positiva erfarenheter

Här beskriver du vad som har gått bra i ditt projekt och analyserar varför. Hur ska du upprepa framgångarna.

## Negativa erfarenheter

Här beskriver du det som du anser har gått mindre bra med ditt projekt och analyserar hur du kan undvika detta i framtida projekt.

## Sammanfattning

Här redovisar du dina slutsatser, erfarenheter och lärdomar. Reflektera över din produkt och dess/dina utvecklingsmöjligheter.
Vad kan vidareutvecklas och finns det utrymme att bygga vidare på projektet.