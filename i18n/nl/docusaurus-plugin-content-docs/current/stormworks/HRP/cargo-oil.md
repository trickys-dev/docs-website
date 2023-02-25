---
sidebar_position: 0
---

# Vracht & olie

## Definities

<!-- css for flex -->
  <div class="flex-vcenter">
    <div>
      <img src="/img/hrp/cargooil/HRPISOContainer.png" width="250px"/>
    </div>
<p>

- Land/Zee-Vracht: dit wordt gedefinieerd als een ISO-container.

</p>
  </div>

<!-- css for flex -->
  <div class="flex-vcenter">
    <div>
      <img src="/img/hrp/cargooil/HRPAirISOContainerpng.png" width="200px"/>
    </div>
<p>

- Luchtvracht: dit wordt gedefinieerd als een Air ISO-container.

</p>
  </div>

## Cargo

1. Eerst moet je ervoor kiezen om land/zee lading of lucht te doen. (Voor deze handleiding kiezen we land / zee)

:::note Een paar notities

- Locaties waar je kan leveren verschillen tussen land/zee of lucht. O’Neil (Air) kan bijvoorbeeld leveren op het noordpoolgebied, maar Noord Harbor (Land/Zee) niet.
- Je kunt GEEN land/zeelading in de lucht nemen, dit is in strijd met de HRP-regels en zal leiden tot een directe boete. (Tenzij je het binnen 1 km van de terminal laadt)
- Voor nu mag er per land of over zee luchtlading worden vervoerd, al wordt het niet aangeraden omdat het erg onhandig is.
- Er zijn maar 2 van elk type vracht toegestaan door HRP-wetgeving.

:::

2. Zoek uit waar je heen wilt gaan met `?listdst commando` (bied locaties aan afhankelijk van jouw locatie)
3. Gebruik `?claimto [Number]` commando om goederen naar die bestemming te claimen. <img src="/img/hrp/cargooil/HRPClaimTo.png" />

4. Ga naar de bezorglocatie, voor deze handleiding gaan we naar Terminal Spycakes.
5. Als je er eenmaal bent, kijk dan naar de lading voor het id en voer dan `?lever [cargo id]` in. <img src="/img/hrp/cargooil/HRPDeliver.png" width="750px" />


## Olie

1. Je moet in een groep zitten, je kan lid worden van een groep of een nieuwe maken.
2. Vind een olie locatie op de kaart. (This will give 30cr once captured) <img src="/img/hrp/cargooil/HRPOilField.png" />

3. Go to oil point and wait for capture. <img src="/img/hrp/cargooil/HRPOilPointcapture1.png" />

4. Once captured you will get money, the point will be uncaptured, and will be on cooldown for 30mins so wait or find another point. <img src="/img/hrp/cargooil/HRPOilPointcapture2.png" />

## Container Afmetingen

ISO Containers:
- Hoogte: 11 Blokken - 2,75 meter.
- Breedte: 11 Blokken - 2,75 meter.
- Lengte: 29 blokken - 7,25 meter.
- Gewicht: 4 Ton.

AirISO:
- Hight: 8 Blocks - 2 meters.
- Width: 9 Blocks - 2.25 meters.
- Length: 9 Blocks - 2.25 meters.
- Weight: 318 Kg.