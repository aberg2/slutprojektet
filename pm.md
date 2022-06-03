# Slutprojekt

Emil Åberg , 2022-05-30

## Inledning
Syftet var att göra ett eget slutprojekt där vi använder oss av de olika delarna vi jobbat med under kursen, databaser, hosting, planering, dokumentation och en bra och användarvänlig design.

Arbetssättet var att planera detaljrikt och sedan skissa i figma och när man börjar koda ska allting vara utplanerat så man hela tiden har koll på vad man ska göra. Jag kommer bygga sidan med 11ty och vara statisk men den tar information som kommer via en databas. Målet är att få fram en sida som folk kan läsa och se topplistor för olika saker, till exempel mest sökta maträtten på google, mest spelade låten på youtube mm.

## Bakgrund
Första delen var att planera projeketet, jag skrev upp de olika delarna och försökte beskriva hur jag skulle kunna koda det och göra strukturen. Efter planeringen gjorde jag skisser i figma där jag gjorde de olika sidorna och fixade teman. Temat tog jag från ett annat projekt jag jobbat med tidigare som jag hade spenderat mer tid på stylen, så jag visste att det fungerade bra och var validerad. I figman gjorde jag inte rätt färger utan jag var mer ute efter att göra objekten istället och fixade färgerna när jag kodade, inte det bästa sättet förmodligen. 

Sedan började jag med kodningen, först satte jag upp databasen och fixade så att jag kunde hämta "fetcha" datan från servern och sedan få en json fil lokalt där datan kom fram. Sedan länkade jag ihop detta min njk layout fil och fixade så att jag kunde läsa innehållet. Jag kunde efter det göra med hjälp av pagination sidor som skapades automatiskt för varje objekt i databas tabellen. Så jag behövde inte göra alla sidor enskilt utan de skapas från en layout, för att minska mängden filer och kod som jag skulle behövt göra. 

Efter jag fixat databasen och funktionerna på sidan började jag styla, jag tog del för del från figman och gjorde de till olika komponenter. Jag gjorde först navbaren som komponent så att jag kan inkludera den simpelt på alla sidor. Sedan gjorde jag landing pagen vilket var en väldigt simpel design som bara består av en stor bild under naven med rubrik på sidan. Under bilden ligger knapparna till de olika topplistorna, det är 8 rutor med passande bild och rubrik till topplistorna. Sidorna man kommer till innehåller samma nav som finns på landing page och detta för att jag vill ha en kontinuell design så man lätt man navigera runt utan några problem. Med mer tid hade jag gjort att en rubrik i navbaren ledde till en sida med en massa olika topplistor, och därav de 8 topplistorna på landing pagen var de populäraste.  En av rubrikerna går till en kontakt sida där information om "företaget" står, den blev inte färdig då jag fixade allt annat och inte hade tid. Efter jag gjort färdigt stylen fixade jag en api med json data från en online sida. Som en rolig grej för att få in lite fler delar i mitt arbete.

Redovisa arbetets olika delar. Så att läsaren förstår vad du gjort och hur.

Använd gärna bilder för att illustrera.

För att lägga till bilder i markdown. Bilderna kan du ladda upp med Git som vanligt, länka dem med url eller filnamnet.

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)


![NTI Gymnasiet Umeå Logo](https://raw.githubusercontent.com/jensnti/Webbprojekt/master/mallar/nti_logo_white_umea.svg)

## Positiva erfarenheter
Positiva erfarenheter från detta projekt är att jag lärde mig mer om bootstrap. Jag använde mig nästan helt av bootstrap för det är väldigt simpelt att använda och lätt att komma igång med. Man kan ta inspiration från andra som använt bootstrap lätt då man kan använda samma klasser och få liknande resultat. Det är också nästan automatiskt med responsiviteten så man behöver inte tänka på det. Jag jobbade mer på front-end hållet på detta projekt och det tyckte jag var roligare än att mixa mellan front och back end vilket gjorde att jag var mer intresserad av arbetet. Därav tycker jag att jag fick ihop en snyggare produkt än vad jag fått ihop på andra arbeten.

 Jag har blivit ännu bättre på att använda 11ty och 11ty-fetch. Jag kan upprepa framgångarna med att göra en lika detaljrik planering som jag gjorde på detta projetk(punktlista och figma), det gör det lättare att hålla koll på vad man ska göra hela tiden.


Här beskriver du vad som har gått bra i ditt projekt och analyserar varför. Hur ska du upprepa framgångarna.

## Negativa erfarenheter
De negativa sakerna som jag stötte på var när jag jobbade med funktionerna till sidan. Jag var lite ringrostig med 11ty så det tog längre tid än väntat på att fixa grunderna till projektet och installera alla delar. Hostingen var också ett stort problem för mig, min plan var att använda olika databaser en med topplistämnena och sedan databaser för innehållet. Dessa skulle då pushas till min heroku api sida som jag gjort tidigare, men tyvärr hade heroku en säkerhetsläcka så jag kunde inte koppla min github och pusha på några lektioner. Detta gjorde att jag behövde använda en databas som redan fanns pushad och då kunde jag inte göra 10 saker i varje topplista, utan jag fick nöja mig med en sak för varje lista.

 Vi installerade Heroku CLI sedan för att kunna hosta och göra ändringar på våra githubs men jag hann inte ändra min api utan fokuserade på att göra klart andra delar istället. Jag glömde också bort att man inte kan pusha 11ty projekt till heroku vilket gjorde att jag spenderade en massa onödig tid på att felsöka och försöka fixa ett omöjligt problem. Med netlify kunde jag hosta på några knapptryck. Min andra api som jag tagit från en annan online sida fungerade dock inte på netlify utan kräver mer felsökning som jag inte hunnit fixa.

Här beskriver du det som du anser har gått mindre bra med ditt projekt och analyserar hur du kan undvika detta i framtida projekt.

## Sammanfattning
Slutsatsen om projeketet är att det gick väldigt bra tycker jag, det var roligt att man kunde välja fritt vad man skulle göra då jag blev mer intresserad av projektet. Sidan innehåller inte lika mycket innehåll som jag önskat, det är inte den mest komplicerade hemsidan så att få in mer innehåll kräver bara mer tid att skriva in, alt använda api som fungerar. Jag hade velat lägga in lite mer komplicerade funktioner för att göra sidan mer komplett, till exempel en simpel kundsupport där man skickar meddelande från sidan direkt. Och även en api som fungerar utan fetch, så den kan live uppdateras varje gång man använder hemsidan. 

Jag fokuserade mest på front-end och tror inte jag hade hunnit med lika mycket design om jag gjort fler funktioner. Jag har lärt mig 11ty fetch och hämta data, och vidare utvecklat mina kunskaper att använda bootstrap som style verktyg vilket har varit roligt. Sidan kan utvecklas genom att få "football.js" fetchen att fungera, om fler databaser används för content då hade sidan blivit komplett på de delar som finns nu. Ett contact form då jag har påbörjat en sida för det, och en about sida. 

Sidan är checkad för validering med CSS validation och HTML validation då båda blev godkända. Den är även checkad med WAVE
![CSS Validering](http://jigsaw.w3.org/css-validator/images/vcss)


Här redovisar du dina slutsatser, erfarenheter och lärdomar. Reflektera över din produkt och dess/dina utvecklingsmöjligheter.
Vad kan vidareutvecklas och finns det utrymme att bygga vidare på projektet.