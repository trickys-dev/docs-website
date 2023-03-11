---
sidebar_position: 3
---





# Trein Server

Deze server is bedoeld voor Rollenspel op de spoorwegen. Het deel van de spoorwegen, van Spycakes tot Camodo maakt een volledig bloksignaal voor rollenspel tussen signalering en machinisten in een realistische spoorwegomgeving.

:::note Absolute Block Signaal Samenvatting

De spoorwegen worden verdeeld in vier gedeeltes, die worden beheerd door vier afzonderlijke signaalboxen. Dit systeem helpt het veilig gebruik maken van treinen op het spoor, door slechts één trein op elk gewenst moment toe te staan in een traject.

:::

:::caution Banned Components

- Jet trains
- Nuclear reactors

:::

## Machinist

### Snelheidslimieten

Het spoor wordt opgesplitst in gedeeltes met verschillende snelheidsgrenzen. Deze grenzen worden aangeduid met borden over de spoorlijn in mijl per uur.

Zie hier devolgende snelheidslimieten op het spoor:
- Yards = 10mph (16km/h)
- Bocht tussen Spycakes en North Donkk = 80 mph (128kmh)
- Rest van de lijn = 100 mph (161km/h)

:::caution Snelheidslimiet overschreden

Als je gepakt wordt met meer dan 100 mph zal je uit het spel worden gezet, als je deze regel blijft breken kan je verbannen worden van de treinserver.

:::

### Signalen
Dit systeem maakt gebruik van traditionele bovenste quadrant semaphore signalen, wat betekent dat in plaats van verkeerslichtsignalen waar je aan gewend bent deze signalen gebruikt met bewegende armen met overeenkomstige lampen die de chauffeur informeren als ze kunnen doorgaan of stoppen.

Alle signalen op deze spoorweg zijn bovenste quadrant semaphore signalen, Dit betekent dat een horizontale arm altijd het signaal is dat er gevaar is op de lijn en je snelheid moet minderen. Een arm die naar boven wijst, geeft aan dat het signaal vrij is, wat betekent dat het vrij is om verder te gaan.

<b>Thuis/Starter signaal</b>

<div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvredsignal.png" width="300px"/>
    Signaal aan = Gevaar<br/>
    Je moet stoppen als je dit signaal ziet
  </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvgreensignal.png" width="300px"/>
    Signaal uit = Clear<br/>
    Als je dit signaal ziet dan is het vrij om door te gaan naar het volgende signaal
  </div>
<b>Distant Signal</b><br/> You will encounter these distant signals before home/starter signals to give you a warning whether they are at danger or clear. Je kunt dit zien als gele verkeerslichten op de weg.
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvyellowsignal1.png" width="300px"/>
    Signaal On = Waarschuwing<br/>
    Je moet je voorbereiden om te stoppen omdat verderop een signaal op gevaar kan staan
  </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvyellowsignal2.png" width="300px"/>
    Signal Off = Clear<br/>
    Je bent vrij om door te gaan
  </div>
<b>Vaste Afstand Signalen</b>
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvyellowsignal3.png" width="300px"/>
    Wanneer je Camodo nadert van de Sawyer Eilanden zul je eerst een vast signaal tegenkomen. Zoals de naam beschrijft, dit signaal is vastgezet op gevaar verderop; het geeft aan dat je bereid moet zijn om te stoppen bij het volgende thuis/starter signaal dat een gevaar laat zien
  </div>

### Communicatie

  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvcommbox.png" width="300px"/>
    Mocht je hulp nodig hebben, dan kunt u contact opnemen met signaleerders in de chat of via de radio. Elk signaalbox is ingesteld met zijn eigen radiotelefoon en u kunt de frequentie van uw dichtstbijzijnde signaalbox vinden met behulp van kaart labels.
  </div>

## Signaleerders

Binnenkort beschikbaar...

### Aanvragen om een Signaleerder te worden

Binnenkort beschikbaar...
