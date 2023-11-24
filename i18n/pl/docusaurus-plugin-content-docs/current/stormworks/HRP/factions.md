---
sidebar_position: 1
description: Informacje o frakcjach HRP
---

# Frakcje

:::caution Not Active

These are no longer in use since [v0.9.0](/updates/0.9.0)

:::

## Tworzenie Frakcji

Nadal pracujemy nad stworzeniem aplikacji, która automatycznie tworzy frakcję, aż do tego czasu możesz utworzyć zgłoszenie na serwerze Discord.

- You can only own one faction.
- Changing the name of a faction (including the TAG) or to transfer ownership will cost `500⎈`

Informacje które musisz podać aby utworzyć frakcję:
1. Type of faction:
    - Small - `max roles: 5, max users: 10, cost to create: 200⎈`
    - Medium - `max roles: 10, max users: 25, cost to create: 400⎈`
    - Large - `max roles: 15, max users: 50, cost to create: 1000⎈`
    - Enterprise - `max roles: 15, max users: 100, cost to create: 2500⎈`
2. Name of your faction.
3. Faction description.
4. Faction abbreviation, has to be at least 2 or more characters (example: Government is GOV).
5. Roles names `You cannot have roles named: admin, staff, coastguard`.
6. Provide discord (this is not requried) You dont have to have a discord to create a faction.

:::caution Posiadasz serwer Discord?

- Właściciele, którzy mają serwer Discord dla frakcji, która operują, muszą mieć co najmniej jednego administratora z głównego serwera na własnym serwerze z uprawnieniami administratora.
- Właścicielem frakcji musi być właściciel serwera Discord.
- Servers must have 2FA enabled `(Server Settings -> Safety Setup -> Permissions -> Enable 2FA)`.

:::

:::note Aktualne Frakcje

Możesz zobaczyć wszystkie aktualnie istniejące frakcje [Klikając Tutaj](https://trickys.gg/factions)

:::

## Profile Frakcji

- Awatar profilowy.
- Obraz okładki.
- Bio/opis.
- Link z zaproszeniem do serwera frakcji Discrd.
- Kolor konturu awatara.

<div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factionbuttons.png"/>
 </div>

### Awatar Frakcji

  <div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factionavatar.png"/>
    <p>
    Prześlij awatar dla swojej frakcji.
    Wybrany awatar pokaże się również w osadzonej wiadomości Discord podczas publikowania adresu URL twojej frakcji, więcej na ten temat poniżej.
    </p>
 </div>

### Obraz Okładki Frakcji

  <div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factioncover.png"/>
    <p>
    Prześlij obraz dla okładki swojej frakcji.
    Wybrana okładka pojawi się na stronie profilu frakcji, przykład poniżej.
    </p>
 </div>

### Opis Frakcji

  <div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factionbio.png"/>
    <p>
    Napisz opis dla swojej frakcji, będzie on widoczny na stronie profilu frakcji.
    </p>
 </div>

Możesz korzystać z BBCode w opisie swojej frakcji, oto co jest dozwolone:

- [b] - <code>[b]Hello World[/b]</code> - <b>Pogróbienie</b>
- [i] - <code>[i]Hello World[/i]</code> - <i>Pochylenie</i>
- [s] - <code>[s]Hello World[/s]</code> - <s>Przekreślenie</s>
- [u] - <code>[u]Hello World[/u]</code> - <u>Podkreślenie</u>

### Kolor Konturu Awatara Frakcji

<div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factionavatarcolour.png"/>
    <p>
    Możesz wybrać kolor konturu, który znajduje się wokół awatara twojej frakcji.
    Wybrany kolor pokaże się również w osadzonej wiadomości Discord podczas publikowania adresu URL twojej frakcji, przykład poniżej.
    </p>
 </div>

### Zaproszenie na serwer Discord frakcji

<div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factiondiscordinvite.png"/>
    <p>
    Możesz ustawić zaproszenie na serwer Discord frakcji.
    Link musi zaczynać się od <code>https://discord.com/invite/</code> <br/>
    Przykład <code>https://discord.com/invite/&#60;invite-code&#62;</code>
  </p>
 </div>

## Zarządzanie Rolami

Aby zarządzać rolami w twojej frakcji, kliknij zakładkę `Roles`.

<img src="/img/hrp/factions/factionrolestab.png" />

  Klikając na zakładkę z rolami, będziesz mógł wykonać następujące czynności:
- Utworzenie nowej roli
- Zmiana kolejności ról
- Edytowanie uprawnień ról
- Zmiana nazwy ról
- Usuwanie ról

<img src="/img/hrp/factions/factionsroleviewpage.png" />

:::tip

Bez względu na uprawnienia, role nie mogą edytować własnej roli ani ról nad nimi.

:::

:::note Rola Właściciela

Rola właściciela każdej frakcji nie może edytować tam własnych kolejności ról lub uprawnień.

:::

## Faction Deletion

To initiate a faction deletion request, you must meet the following criteria:
1. Be the designated owner of the faction.
2. Possess ownership of the Discord server associated with the faction.

If the above requirements are meet then you can submit a ticket on discord and request to have your faction removed. After you have confirmed you wish to delete the faction the following will be permanently deleted.
- Faction Name, Faction Abbrv, Faction Roles, Faction Members, Faction Settings (Bio, Avatar, Banners).
- Any remaining credits left in the faction at the time of deletion will be transferred to the Treasury.

Prior to commencing the deletion process, individuals overseeing a Faction Discord server must ensure its removal.

A faction that remains undeleted retains its active status, with the faction owner retaining responsibility for both the faction's upkeep and adherence to existing and future faction rules and requirements, until its deletion, irrespective of any other considerations.

## Przykład

Poniżej znajduje się przykład tego, jak wyglądałby rezultat, gdybyś zmodyfikował wszystko.

### Przykład niestandardowego profilu frakcji

<div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factionexamplediscord.png"/>
   <p>
    <b>Udostępnianie linku frakcji</b><br/>
    Udostępnienie linku na Discord pokaże osadzenie twojej frakcji, w tym niestandardowy kolor i awatar, który ustawiłeś.
    </p>
</div>
   <div class="flex-vcenter mb-1">
    <img src="/img/customprofiles/factions/factionexampleavatar.png"/>
   <p>
     <b>Kolor konturu awatara</b><br/>
    Przeglądanie profilu z wybranym kolorem na stronie internetowej.
    </p>
</div>