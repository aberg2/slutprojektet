
## Planering

Min tanke om projektet är att jag ska använda mig av olika databaser och api:er. Databasen kommer va via NTI servern som vi använt tidigare och api:en kommer från tidigare heroku projekt då vi gjorde en egen. Och även från online apis om jag hinner. Navbar ska innehålla Home, about och contact

Databasen ska innehålla titel, bild länkar, videolänkar om olika sevärdheter / länder. Detta för att jag ska kunna fetcha innehållet och bygga sidan med hjälp av pagination utifrån. Det gör det simpelt att lägga till nya saker tror jag.

Designen kommer göras i figma och jag kommer sedan jobba utifrån det när jag kodar sidan.

Sidan kommer göras med 11ty, statisk med förbestämda sidor bara med olika innehåll. Sidan kommer va en samlingssida för olika topplistor som jag gör, topplistorna kommer va 8 olika ämnen och sedan top10 inom det ämnet utifrån vad jag tycker eller om jag får andras api:er att funka, t.ex. spotify, google eller någon annan bra api. En databas med topplistornas namn och sedan databas för varje topplista med dess olika innehåll.

Man öppnar sidan, sidan byggs via 11ty utifrån njk layout filer, texten för de olika kategorierna hämtas från en fetch och json data för att sätta innehållet, sidor för de olika kategorierna byggs via pagination som tar namnen från json datan och sedan sätts innehållet, på de olika topplistorna sätts innehållet med hjälp av en annan databas som innehåller beskrivning för de olika sakerna i listan.

Hostingen kommer ske via heroku då vi använt oss av det tidigare och det var simpelt.

Man kan ska inte kunna ändra något när man är inne på sidan utan bara läsa.

Figma länk: https://www.figma.com/file/kjSq47hEprXZSVOxglb7kM/Untitled?node-id=0%3A1