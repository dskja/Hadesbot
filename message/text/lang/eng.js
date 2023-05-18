/* eslint-disable quotes */
const { prefix } = require('../../../config.json')

exports.unreg = () => {
    return `Ich konnte ihren Benutzer-Account erfolgreich aus der Datenbank Yassins Servers löschen!`
}

exports.wait = () => {
    return `Bitte warte einen Moment...`
}

exports.ok = () => {
    return `Fertig!`
}

exports.videoLimit = () => {
    return `Die größe des Video/GIF ist zu groß!`
}

exports.wrongFormat = () => {
    return `Falsches Format! Bitte schauen sie sich meine Nutzung unter *${prefix}menu an*`
}

exports.emptyMess = () => {
    return `Ich konnte keine Nachricht erkennen.Bitte gebe eine Nachricht nach dem *${prefix} an!`
}

exports.cmdNotFound = (cmd) => {
    return `Ich konnte denn Befehl *${prefix}${cmd}* nicht finden!`
}

exports.blocked = (ownerNumber) => {
    return `Als Bot kann ich keine Anrufe entgegennehmen.!\n\nKontaktieren sie Yassin für weitere Fragen: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Dieser Befehl kann nur von meinem Owner (Yassin) benutzt werden!`
}

exports.groupOnly = () => {
    return `Dieser Befehl kann nur in Gruppen ausgeführt werden!`
}

exports.adminOnly = () => {
    return `Dieser Befehl kann nur von den Gruppen-Admins ausgeführt werden!`
}

exports.addedGroup = (chat) => {
    return `Danke das sie mich eingeladen haben, Ich bitte die Mitglieder einschließlich Admins von *${chat.contact.name}*!\n\ndarum sich im *privat chat* mit dem Befehl:\n*${prefix}register* name zu registrieren damit sie mich verwenden können.`
}

exports.listBlock = (blockNumber) => {
    return `
*── 「 HALL OF SHAME 」 ──*

Diese Benutzer sind aktuell gebannt und somit in der Hall of Shame: *${blockNumber.length}* Benutzer\n
    `
}

exports.notPremium = () => {
    return `Ups! Diese Funktion kann ich nur Premium Benutzern erlauben.`
}

exports.notAdmin = () => {
    return `Der Benutzer ist kein Admin!`
}

exports.adminAlready = () => {
    return `Ich kann keinen Benutzern die Admin-Rechte geben wenn sie bereits welche haben!`
}

exports.botNotPremium = () => {
    return `Dieser Bot unterstüzt anscheinend noch keine Premium Funktionen. Bitte kontaktiere den Owner (Yassin).`
}

exports.botNotAdmin = () => {
    return `Um diese Funktion zu benutzen mache mich bitte zum Admin!`
}

exports.notRegistered = () => {
    return `Du bist nicht in den Hadesbot Datenbanken registriert!\n\nBitte registrier dich im *privart chat* indem du dies hier eingibst ("name" füge hier bitte deinen Namen ein!):\n*${prefix}register* name`
}

exports.registered = (name, userId, time, serial) => {
    return `
*── 「 REGISTRIERUNG 」 ──*

Dein Benutzer-Account wurde erfolgreich mit deinen angegebenen Daten in der Hadesbot-Datenbank registriert:
➸ *Name*: ${name}
➸ *ID*: ${userId}
➸ *Registriert am*: ${time}
➸ *Hades-ID*: ${serial}

Note:
Bitte teile deine *Hades-ID* an niemanden!

Geben sie *${prefix}rules* ein um die Regeln zu lesen.
    `
}

exports.registeredAlready = () => {
    return `Sie sind bereits registriert!.`
}

exports.received = (pushname) => {
    return `Hallo ${pushname}!\nDanke für deinen Bericht,  wir werden so schnell wie möglich daran arbeiten.`
}

exports.daily = (time) => {
    return `Entschuldigung, aber du hast dein Limit für die Verwendung dieser Funktion erreicht.\nBitte warte *${time.hours}* Stunde(n) *${time.minutes}* minute(n) *${time.seconds}* sekunde(n) und versuche es dann erneut.`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `
*── 「 Benutzer INFO 」 ──*

➸ *Benutzername*: ${username}
➸ *Status*: ${status}
➸ *Premium*: ${premi}
➸ *Gebannt*: ${benet}
➸ *Admin*: ${adm}

=_=_=_=_=_=_=_=_=_=_=_=_=

*── 「 LEVEL 」 ──*

➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
    `
}

exports.detectorOn = (name, formattedTitle) => {
    return `
*── 「 ANTI GRUPPEN LINK 」 ──*

Ankündigung für alle *${(name || formattedTitle)}* Mitglieder.
Diese Gruppe hat einen Gruppenlink-Detektor, wenn jemand einen Gruppenlink sendet, wird er sofort rausgeschmissen.

Vielen Dank für Ihre Aufmerksamkeit.
- Admin *${(name || formattedTitle)}*
    `
}

exports.linkDetected = () => {
    return `
*── 「 ANTI GRUPPEN LINK 」 ──*

Sie haben einen Gruppen-Link gesendet!
Sie werden nun aus der Gruppe entfernt. Falls sie wieder in die Gruppe wollen müssen sie sich bitte an die Gruppen-Admins wenden...
    `
}

exports.detectorOff = () => {
    return `Die Anti-Gruppen Link Funktion wurde erfolgreich *deaktiviert*!`
}

exports.detectorOnAlready = () => {
    return `Die Anti-Gruppen-Link Funktion wurde bereits aktiviert!.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Ankündigung für alle *${(name || formattedTitle)}* Mitglieder.
Diese Gruppe hat nun einen NSFW link detector, wenn jemand einen NSFW-Link sendet wird er direkt gekickt!.

Vielen Dank für Ihre Aufmerksamkeit..
- Admin *${(name || formattedTitle)}*
    `
}

exports.antiNsfwOff = () => {
    return `Die Anti-NSFW-Link Funktion wurde erfolgreich *deaktiviert*!`
}

exports.antiNsfwOnAlready = () => {
    return `Anti-NSFW-Link Funktion wurde bereits aktiviert.`
}

exports.antiBadWordsOn = (name, formattedTitle) => {
    return `
*── 「 ANTI BAD WORDS 」 ──*

Ankündigung für alle *${(name || formattedTitle)}* Mitglieder.
Diese Gruppe hat einen Detektor der die Mitglieder bei senden von nicht zugelassenen Wörtern oder Beleidigungen (Müssen von denn Admins der Bad-List hinzugefügt werden!) sendet wird dies sofort gelöscht!

Vielen Dank für Ihre Aufmerksamkeit.
- Admin *${(name || formattedTitle)}*
    `
}

exports.antiBadWordsOff = () => {
    return `Die Anti-Bad-Words Funktion wurde erfolgreich *deaktiviert*!`
}

exports.antiBadWordsOnAlready = () => {
    return `Die Anti-Bad-Words Funktion wurde bereits aktiviert.`
}

exports.antiBadWordsError = () => {
    return `Die Anti-Bad-Words Funktion ist nicht aktiviert, bitte aktiviere sie um sie zu nutzen.`
}

exports.levelingOn = () => {
    return `Die Leveling Funktion wurde erfolgreih *aktiviert*!`
}

exports.levelingOff = () => {
    return `Die Leveling Funktion wurde erfolgreich *deaktiviert*!`
}

exports.levelingOnAlready = () => {
    return `Die Leveling Funktion ist bereits aktiviert.`
}

exports.levelingNotOn = () => {
    return `Die Leveling Funktion wurde nicht aktivert, aktiviere sie um sie zu nutzen!`
}

exports.levelNull = () => {
    return `Du hast momentan noch kein Level!`
}

exports.welcome = (event) => {
    return `Willkommen @${event.who.replace('@c.us', '')}!`
}

exports.welcomeOn = () => {
    return `Die Willkommen Funktion wurde erfolgreich *aktiviert*!`
}

exports.welcomeOff = () => {
    return `Die Willkommen Funktion wurde erfolgreich *deaktiviert*!`
}

exports.welcomeOnAlready = () => {
    return `Die Willkommen Fuktion ist bereits aktibviert worden.`
}

exports.minimalDb = () => {
    return `Benötigt werden mindestens *10* Benutzer, die eine Stufe in der Datenbank haben!`
}

exports.autoStikOn = () => {
    return `Die Autosticker-Funktion wurde erfolgreich *aktiviert*!`
}

exports.autoStikOff = () => {
    return `Die Autosticker-Funktion wurde erfolgreich *deaktiviert*!`
}

exports.autoStikOnAlready = () => {
    return `Die Autosticker-Funktion wurde bereits aktiviert`
}

exports.afkOn = (pushname, reason) => {
    return `
*── 「 AFK MODUS 」 ──*

AFK Modus wurde *aktiviert*!
➸ *Benutzername*: ${pushname}
➸ *Grund*: ${reason}
    `
}

exports.afkOnAlready = () => {
    return `Der AFK Modus wurde bereits ativiert.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `
*── 「 AFK MODUS 」 ──*

Ssshhh! Dieser Benutzer ist aktuell im AFK Modus:
➸ *Grund*: ${getReason}
➸ *Seit*: ${getTime}
    `
}

exports.afkDone = (pushname) => {
    return `*${pushname}* ist nun nicht mehr im AFK Modus`
}

exports.gcMute = () => {
    return `
*── 「 Stumm 」 ──*

Nur Admins können in dieser Gruppe Nachrichten versenden.
    `
}

exports.gcUnmute = () => {
    return `
*── 「 Entstummt 」 ──*

Alle Mitglieder können jetzt Nachrichten in dieser Gruppe versenden.
    `
}

exports.notNum = (q) => {
    return `"${q}", sind keine Zahlen!`
}

exports.registeredFound = (name, time, serial, userId) => {
    return `
*── 「 REGISTRIERT 」 ──*

Account wurde gefunden!
➸ *Name*: ${name}
➸ *Benutzer-ID*: ${userId}
➸ *Registrierte Zeit*: ${time}
➸ *Hades-ID*: ${serial}
    `
}

exports.registeredNotFound = (serial) => {
    return `Account mit Hades-ID: *${serial}* nicht gefunden! (Mit Serial ist deine Hades-ID gemeint!)`
}

exports.pcOnly = () => {
    return `Der Befehl kann nur im *privat chat* benutzt werden!`
}

exports.linkNsfw = () => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Du hast einen NSFW Link gesendet
Du wirst nun gekickt... (Falls du wieder in die Gruppe möchtest wende dich dann bitte an die Admins!)
    `
}

exports.fakeLink = () => {
    return `Der Link, den du geschickt hast, ist verdächtig. Zur Sicherheit der Gruppe werde ich dich rauswerfen. Falls dies ein Fehler war wende dich bitte an die Admins\nBye~.`
}

exports.muteChatOn = () => {
    return `Erfolgreich *stummgeschalteter* Bot für diese Gruppe!`
}

exports.muteChatOff = () => {
    return `Erfolgreich *unmute* Bot für diese Gruppe!`
}

exports.muteChatOnAlready = () => {
    return `Bot ist bereits *stummgeschaltet*.`
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Du hast das Nachrichten Limit erreicht! Bitte machen sie dies:
❏ *_Warten Sie bis 12:00 Uhr (UTC+7)_*
    `
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 TIMER 」 ──*

Dein Timer ist gesetzt!
➸ *Nachricht*: ${messRemind}
➸ *Dauer*: ${parsedTime.hours} hour(s) ${parsedTime.minutes} minute(s) ${parsedTime.seconds} second(s)
➸ *Für*: @${sender.id.replace('@c.us', '')}
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 TIMER 」 ──*

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Nachricht*: ${messRemind}`
}

exports.nameChanged = (q) => {
    return `Der Benutzername wurde geändert zu *${q}*`
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
*── 「 WILLKOMMEN 」 ──*

======================
➸ *Name*: ${pushname}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Rolle*: ${role}
➸ *Premium*: ${premium}
======================

Registrierte Benutzer: *${jumlahUser}*

*[1]* Downloader
*[2]* Bot
*[3]* Sonstiges
*[4]* Sticker
*[5]* Weeaboo
*[6]* Spaß
*[7]* Moderation
*[8]* Owner
*[9]* Leveling
*[10]* AI

Geben Sie *${prefix}menu* index_number ein, um das ausgewählte Seitenmenü zu öffnen.

Anmerkung
Der Bot hat jedes Mal eine Abklingzeit von *5 Sekunden*, wenn du ihn benutzt.
    `
}

exports.menuDownloader = () => {
    return `
*── 「 DOWNLOADER 」 ──*

1. *${prefix}twitter*
Twitter-Medien herunterladen.
Aliases: *twt*
Usage: *${prefix}twitter* link

2. *${prefix}youtube*
YouTube-Video herunterladen.
Aliases: *yt*
Usage: *${prefix}youtube* link

_Index of [1]_
    `
}

exports.menuBot = () => {
    return `
*── 「 BOT 」 ──*

1. *${prefix}rules*
Unbedingt lesen.
Aliases: *rule*
Verwendung: *${prefix}rules*

2. *${prefix}menu*
Verfügbare Befehle anzeigen.
Aliases: -
Verwendung: *${prefix}menu* index_number

3. *${prefix}status*
Bot-Status anzeigen.
Aliases: *stats*
Verwendung: *${prefix}status*

4. *${prefix}listblock*
Gesperrte Nummern prüfen.
Aliases: -
Verwendung: *${prefix}listblock*

5. *${prefix}ping*
Bot-Geschwindigkeit prüfen.
Aliases: *p*
Verwendung: *${prefix}ping*

6. *${prefix}delete*
Nachrichten vom Bot löschen.
Aliases: *del*
Verwendung: Auf gelöschte Nachrichten mit einer Beschriftung antworten *${prefix}delete*

7. *${prefix}report*
Fehler an den Besitzer melden.
Aliases: -
Verwendung: *${prefix}report* text

8. *${prefix}tos*
Terms of service.
Aliases: -
Verwendung: *${prefix}tos*

9. *${prefix}join*
Treten Sie einer Gruppe über einen Link bei.
Aliases: -
Verwendung: *${prefix}join* Gruppen_Link

10. *${prefix}ownerbot*
Besitzer Kontakt senden.
Aliases: -
Verwendung: *${prefix}ownerbot*

11. *${prefix}getpic*
Profilbild des Benutzers senden.
Aliases: -
Verwendung: *${prefix}getpic* @user/49xxxxxxxxxxx

12. *${prefix}premiumcheck*
Prüfen Sie Ihre verbleibende Prämienfrist.
Aliases: *cekpremium*
Verwendung: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Liste der Premium-Benutzer.
Aliases: *listpremium*
Verwendung: *${prefix}premiumlist*

14. *${prefix}limit*
Prüfen Sie Ihr verbleibendes Limit.
Aliases: -
Verwendung: *${prefix}limit*

15. *${prefix}serial*
Überprüfen Sie Ihre Bio anhand der Seriennummer.
Aliases: -
Verwendung: *${prefix}serial* Seriennummer

16. *${prefix}runtime*
Überprüfen Sie Ihre Host-Laufzeit.
Aliases: -
Verwendung: *${prefix}runtime*

17. *${prefix}unregister*
Heben Sie die Registrierung Ihres Kontos auf.
Aliases: *unreg*
Verwendung: *${prefix}unregister*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
*── 「 SONSTIGES 」 ──*

1. *${prefix}say*
Der Bot wird Ihre Nachricht wiederholen.
Aliases: -
Verwendung: *${prefix}say* text

2. *${prefix}tts*
Erstellen Sie eine Text-zu-Sprache-Audio. Den Sprachcode finden Sie hier - https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
Aliases: -
Verwendung: *${prefix}tts* sprach_code | text

3. *${prefix}afk*
Versetzen Sie Ihr Konto in den AFK-Modus.
Aliases: -
Verwendung: *${prefix}afk* Grund. Senden Sie eine beliebige Nachricht an die Gruppe, um sie zu deaktivieren.

4. *${prefix}math*
Ein Taschenrechner.
* = Multiplikation
+ = addition
- = Subtraktion
/ = division
Aliases: -
Verwendung: *${prefix}math* 12*12

5. *${prefix}reminder*
Timer
*s* - sekunden
*m* - minuten
*h* - stunden
*d* - tage
Aliases: -
Verwendung: *${prefix}reminder* 10s | timer_nachricht

6. *${prefix}imagetourl*
Bild-Uploader.
Aliases: *imgtourl*
Verwendung: Senden sie ein Bild mit dem Befehl *${prefix}imagetourl* oder antworten sie auf ein Bild mit dem Befehl *${prefix}imagetourl*

7. *${prefix}genshininfo*
Genshin Impact Character Info.
Aliases: *genshin*
Verwendung: *${prefix}genshininfo* character_name

8. *${prefix}translate*
Übersetzen Sie einen Text.
Aliases: *tl*
Verwendung: *${prefix}translate* text | code_lang

9. *${prefix}tomp3*
Konvertieren Sie ein Video in Audio (MP3).
Aliases: -
Verwendung: Senden sie ein Video mit dem Befehl *${prefix}tomp3* oder antworten sie auf ein Video mit dem Befehl *${prefix}tomp3*

10. *${prefix}bass*
Bassverstärkung.
Aliases: -
Verwendung: Antworten sie auf eine Audio/Sprachnachricht mit dem Befehl *${prefix}bass* dB_level.

11. *${prefix}nightcore*
Erzeugen Sie einen Nightcore-Effekt.
Aliases: -
Verwendung: Antworten sie auf eine Audio/Sprachnachricht mit dem Befehl *${prefix}nightcore*

12. *${prefix}google*
Suche über Google.
Aliases: *googlesearch*
Verwendung: *${prefix}google* suche

13. *${prefix}toptt*
PTT-Audio erstellen.
Aliases: *ptt*
Verwendung: Antworte auf eine Audio/Sprachnachricht mit dem Befehl *${prefix}toptt*

_Verzeichnis [3]_
    `
}

exports.menuSticker = () => {
    return `
*── 「 STICKER 」 ──*

1. *${prefix}sticker*
Erstellen Sie Sticker aus gesendeten oder geantworteten Bildern.
Aliases: *stiker*
Verwendung: Senden Sie Bilder mit dem Befehl *${prefix}sticker* oder antworten Sie auf die Bilder mit dem Befehl *${prefix}sticker*.

2. *${prefix}stickergif*
Erstellen Sie Sticker aus Videos/GIFs.
Aliases: *stikergif* *sgif*
Verwendung: Senden Sie Videos/GIFs mit dem Befehl *${prefix}stickergif* oder antworten Sie auf die Videos/GIFs mit dem Befehl *${prefix}stickergif*.

3. *${prefix}stickertoimg*
Sticker in ein Bild umwandeln.
Aliases: *stikertoimg* *toimg*
Verwendung: Antworten sie auf ein Bild mit dem Befehl *${prefix}stickertoimg*

4. *${prefix}stickerwm*
Erstellen Sie einen Sticker mit Metadaten/WM.
Aliases: *stcwm*
Verwendung: Senden Sie Bilder mit dem Befehl *${prefix}stickerwm* pack_name | author_name oder antworten Sie auf das Bild mit dem Befehl *${prefix}stickerwm* pack_name | author_name

5. *${prefix}stickermeme*
Erstellen Sie ein Sticker-Meme.
Aliases: *stcmeme*
Verwendung: Senden Sie Bilder mit dem Befehl *${prefix}sticker* upper_text | bottom_text oder antworten Sie auf die Bilder mit dem Befehl *${prefix}sticker* upper_text | bottom_text

6. *${prefix}takestick*
Sticker-Metadaten bearbeiten.
Aliases: *take*
Verwendung: Antworten Sie auf die Sticker mit einer Beschriftung *${prefix}takestick* pack_name | author_name

7. *${prefix}stickernobg*
Erstellen Sie Sticker aus gesendeten oder beantworteten Bildern mit leerem Hintergrund.
Aliases: *take*
Verwendung: Senden sie ein Bild mit dem Befehl *${prefix}stickernobg* oder antworten sie auf ein Bild mit dem Befehl *${prefix}stickernobg*

_Verzeichnis [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
*── 「 WEEABOO 」 ──*

1. *${prefix}neko*
Schicken Sie ein Neko-Girl-Foto.
Aliases: -
Verwendung: *${prefix}neko*

2. *${prefix}wallpaper*
Schicke Anime Wallpapers.
Aliases: *wp*
Verwendung: *${prefix}wallpaper*

3. *${prefix}kemono*
Senden Sie kemonomimi Girl Fotos.
Aliases: -
Verwendung: *${prefix}kemono*

4. *${prefix}wait*
Suche nach Anime-Quellen in der Screenshot-Szene.
Aliases: -
Verwendung: Screenshot mit dem Befehl *${prefix}wait* senden oder antworte auf den Screenshot mit dem Befehl *${prefix}wait*

5. *${prefix}source*
Suchen Sie nach Quellen aus dem Doujin-Panel, Illustrationen und Bildern zum Thema Anime.
Aliases: *sauce*
Verwendung: Bild mit Befehl *${prefix}source* senden oder antworten sie auf ein Bild mit dem Befehl *${prefix}source*

6. *${prefix}waifu*
Senden Sie beliebige Waifu-Fotos.
Aliases: -
Verwendung: *${prefix}waifu*

_Verzeichnis [5]_
    `
}

exports.menuFun = () => {
    return `
*── 「 SPAß 」 ──*

1. *${prefix}triggered*
Einen triggered Effekt auf ein Bild anwenden.
Aliases: -
Verwendung: Sende ein Bild mit dem Befehl *${prefix}triggered* oder auf eine Nachricht mit einer Bildunterschrift antworten *${prefix}triggered* oder Sie können direkt *${prefix}triggered* verwenden.

2. *${prefix}kiss*
Jemanden küssen ( ͡° ͜ʖ ͡°).
Aliases: -
Verwendung: Bild mit Befehl *${prefix}kiss* senden oder antworten sie auf ein Bild mit *${prefix}kiss*

3. *${prefix}profile*
Prüfen Sie mein Profil.
Aliases: *me*
Verwendung: *${prefix}profile*

4. *${prefix}trash*
Müll?
Aliases: -
Verwendung: *${prefix}trash*

5. *${prefix}hitler*
Schlimmer als Hitler.
Aliases: -
Verwendung: *${prefix}hitler*

_Verzeichnis [6]_
    `
}

exports.menuModeration = () => {
    return `
*── 「 MODERATION 」 ──*

1. *${prefix}add*
Benutzer zur Gruppe hinzufügen.
Aliases: -
Verwendung: *${prefix}add* 49xxxxxxxxxxx

2. *${prefix}kick*
Mitglieder aus der Gruppe entfernen.
Aliases: -
Verwendung: *${prefix}kick* @Mitglied1

3. *${prefix}promote*
Mitglied zum Admin ernennen.
Aliases: -
Verwendung: *${prefix}promote* @member1

4. *${prefix}demote*
Mitglied von Admin entfernen.
Aliases: -
Verwendung: *${prefix}demote* @member1

5. *${prefix}leave*
Bot von Gruppe verlassen.
Aliases: -
Verwendung: *${prefix}leave*

6. *${prefix}everyone*
Makieren Sie alle Gruppenmitglieder.
Aliases: -
Verwendung: *${prefix}everyone*

7. *${prefix}groupicon*
Gruppenbild ändern.
Aliases: -
Verwendung: Bild mit diesem Befehl senden *${prefix}groupicon* oder antworten Sie auf ein Bild mit dem Befehl *${prefix}groupicon*

8. *${prefix}antilink*
Aktiviere die Anti-Gruppen Link Funktion.
Aliases: -
Verwendung: *${prefix}antilink* enable/disable

9. *${prefix}welcome*
Aktiviert die Willkommen Funktion.
Aliases: -
Verwendung: *${prefix}welcome* enable/disable

10. *${prefix}autosticker*
Aktiviere die Auto-Sticker-Funktion. Jedes gesendete Bild wird in einen Sticker verwandelt.
Aliases: *autostiker autostik*
Verwendung: *${prefix}autostiker* enable/disable

11. *${prefix}antinsfw*
Aktiviere Anti-NSFW link.
Aliases: -
Verwendung: *${prefix}antinsfw* enable/disable

12. *${prefix}mutegc*
Legen Sie die Gruppe auf Admin fest, die nur eine Nachricht senden kann.
Aliases: -
Verwendung: *${prefix}mutegc* enable/disable

13. *${prefix}grouplink*
Senden Sie einen Einladungslink der aktuellen Gruppe.
Aliases: -
Verwendung: *${prefix}grouplink*

14. *${prefix}revoke*
Einladungslink der aktuellen Gruppe aufheben.
Aliases: -
Verwendung: *${prefix}revoke*

15. *${prefix}leveling*
Aktiviere die Leveling Funktion
Aliases: -
Verwendung: *${prefix}leveling* enable/disable

16. *${prefix}badwords*
Einrichten der Funktion von Bad-Words
Aliases: *badword*
Verwendung: *${prefix}badwords* enable/disable oder add/remove, um Wörter der Bad-Wort Liste hinzuzufügen/zu entfernen.

_Verzeichnis [7]_
    `
}

exports.menuOwner = () => {
    return `
*── 「 OWNER 」 ──*

1. *${prefix}bc*
Erstelle einen broadcast.
Aliases: -
Verwendung: *${prefix}bc* text

2. *${prefix}clearall*
Löscht alle Chats auf dem Bot-Konto.
Aliases: -
Verwendung: *${prefix}clearall*

3. *${prefix}getses*
Machen Sie einen Screenshot von der Sitzung des Bot-Kontos.
Aliases: -
Verwendung: *${prefix}getses*

4. *${prefix}ban*
Gesperrte Benutzer hinzufügen/entfernen.
Aliases: -
Verwendung: *${prefix}ban* add/del @user/49xxxxxxxxxxx

5. *${prefix}leaveall*
Verlasse alle Gruppen
Aliases: -
Verwendung: *${prefix}leaveall*

6. *${prefix}eval*
Werten Sie den JavaScript-Code aus.
Aliases: *ev*
Verwendung: *${prefix}eval*

7. *${prefix}shutdown*
Shutdown-Bot.
Aliases: -
Verwendung: *${prefix}shutdown*

8. *${prefix}premium*
Premium-Benutzer hinzufügen/entfernen.
*s* - sekunden
*m* - minuten
*h* - stunden
*d* - tage
Aliases: -
Verwendung: *${prefix}premium* add/del @user/49xxxxxxxxxxx 30d

9. *${prefix}setstatus*
Ändert die Info des Bots
Aliases: *setstatus setstat*
Verwendung: *${prefix}status* text

10. *${prefix}serial*
Prüfen Sie die Seriennummer des Benutzers.
Aliases: -
Verwendung: *${prefix}serial* user_serial

11. *${prefix}exif*
Passen Sie Ihren Sticker WM an.
Aliases: -
Verwendung: *${prefix}exif* pack_name | autor_name

12. *${prefix}mute*
Alle Benutzer stumm schalten.
Aliases: -
Verwendung: Verwenden Sie *${prefix}mute* zum Stummschalten und *${prefix}mute* noch einmal zum Aufheben der Stummschaltung.


13. *${prefix}setname*
Ändern Sie den Namen des Bots. Maximal 25 Zeichen.
Aliases: -
Verwendung: *${prefix}name* neuer_bot_name

14. *${prefix}block*
Benutzer sperren.
Aliases: *blok*
Verwendung: *${prefix}block* @user/49xxxxxxxxxxx

15. *${prefix}unblock*
Benutzer entsperren
Aliases: *unblok*
Verwendung: *${prefix}unblock* @user/49xxxxxxxxxxx

16. *${prefix}xp*
XP zu jemandem hinzufügen.
Aliases: -
Verwendung: *${prefix}xp* @user/49xxxxxxxxxxx menge_xp

_Verzeichnis [8]_
    `
}

exports.menuLeveling = () => {
    return `
*── 「 LEVELING 」 ──*

1. *${prefix}level*
Überprüfen Sie Ihr Level
Aliases: -
Verwendung: *${prefix}level*

2. *${prefix}leaderboard*
Prüfen Sie die Rangliste.
Aliaases: -
Verwendung: *${prefix}leaderboard*

_Verzeichnis [9]_
    `
}

exports.menuAi = () => {
    return `
*── 「 AI 」 ──*

1. *${prefix}ai*
ChatGPT 3.5 Implementierung. (Derzeit nicht verfügbar)
Aliases: -
Verwendung: *${prefix}ai* ihre_frage

2. *${prefix}image*
Bild nach vorgegebenem Prompt erstellen. (Derzeit nicht verfügbar)
Aliases: *img*
Verwendung: *${prefix}image* Aufforderung

_Verzeichnis [10]_
    `
}

exports.rules = () => {
    return `
*── 「 REGELN 」 ──*

1. KEIN Spamen an den Bot.
Strafe: *WARNUNG/SOFTBLOCK*

2. Rufen Sie NICHT den Bot an.
Strafe: *SOFTBLOCK*

3. Bots NICHT ausnutzen
Strafe: *DAUERHAFTE SPERRE*

Wenn Sie diese Regeln verstanden haben, geben Sie bitte *${prefix}menu* ein, um loszulegen.
    `
}

// Note for owner/hoster, please DO NOT edit this section.
exports.tos = (ownerNumber) => {
    return `
*── 「 TERMS OF SERVICE 」 ──*


wir möchten Sie darauf hinweisen, dass Hadesbot ein von Yassin allein gefördertes Projekt ist, das sich noch in der Entwicklung befindet. Obwohl der Bot bereits in einem fortgeschrittenen Stadium ist, könnten noch Fehler oder Probleme auftreten. Wir möchten Sie bitten, uns umgehend zu informieren, falls Ihnen ein solches Problem auffällt. Wir werden unser Bestes tun, um es so schnell wie möglich zu beheben.
Wir möchten betonen, dass Hadesbot für nichts verantwortlich ist. Wenn Sie beispielsweise den "Say"-Befehl verwenden und unangemessene oder illegale Inhalte senden, übernehmen wir dafür keine Verantwortung. Bitte verwenden Sie den Bot verantwortungsbewusst und halten Sie sich an die geltenden Gesetze und Vorschriften. Wir behalten uns das Recht vor, Beweise zu liefern, die zeigen, dass der Bot nur das wiedergibt, was von ihm programmiert wurde.
Wenn Sie Anfragen, Fehler oder andere Probleme haben und Yassin per WhatsApp nicht erreichbar sind, können Sie uns eine E-Mail an hadesbot.whatsapp@gmail.com senden. Wir werden unser Bestes tun, um auf Ihre Anfrage zu antworten. Bitte beachten Sie, dass die Antwortzeiten etwa 2 Wochen dauern können, je nach Arbeitsbelastung und anderen Faktoren.

Owner-Kontakt:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner)

Vielen Dank für Ihr Verständnis.

Mit freundlichen Grüßen,
Yassin
    `
}
