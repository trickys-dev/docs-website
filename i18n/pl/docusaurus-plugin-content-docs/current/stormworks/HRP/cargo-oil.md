---
sidebar_position: 0
description: HRP Cargo & Oil information
---

# Towar i Ropa

## Definicje

<!-- css for flex -->
  <div class="flex-vcenter">
    <div>
      <img src="/img/hrp/cargooil/HRPISOContainer.png" width="250px"/>
    </div>
<p>

- Ładunek lądowy/morski: Jest on zdefiniowany jako kontener ISO.

</p>
  </div>

<!-- css for flex -->
  <div class="flex-vcenter">
    <div>
      <img src="/img/hrp/cargooil/HRPAirISOContainerpng.png" width="200px"/>
    </div>
<p>

- Ładunek lotniczy: Jest zdefiniowany jako kontener AirISO.

</p>
  </div>

## Ładunek

1. Najpierw należy wybrać ładunek lądowy/morski lub lotniczy. (W przypadku tego poradnika wybierzemy lądowy/morski)

:::note Kilka notatek

- Lokalizacje, do których możesz dostarczać, różnią się między lądem/morzem lub powietrzem. Na przykład O’Neil (Powietrze) może dostarczyć do Arktyki, ale nie może do North Harbor (Ląd/Morze).
- NIE wolno zabierać żadnego ładunku lądowego/morskiego w powietrze, jest to sprzeczne z prawem HRP i doprowadzi do natychmiastowej kary. (Chyba że używasz pojazdu powietrznego do załadowania w odległości maksymalnie 1 km od terminalu)
- NIE wolno zabierać ładunku powietrznego przez ląd/morze, to jest sprzeczne z artykułem [Praw HRP (2.2)](/hrplaws#23-airiso-container-mismanagement) i doprowadzi do natychmiastowej kary.
- Możesz tylko 2 każdego typu ładunku zgodnie z artykułem [Prawa HRP (2.4)](/hrplaws#24-player-container-limit).

:::

2. Wyznacz gdzie chcesz zawieść ładunek za pomocą polecenia `?listdst` (dostarcza lokalizacje zależne od twojej lokalizacji)
3. Użyj polecenia `?claimto [Number]`, aby otrzymać ładunek do tego celu. <img src="/img/hrp/cargooil/HRPClaimTo.png" />

4. Udaj się do miejsca dostawy, na potrzeby tego poradnika użyjemy Spycakes.
5. Kiedy tam dotrzesz, popatrz na ładunek, aby znaleźć ID i użyj polecenia `?deliver [ID]`. <img src="/img/hrp/cargooil/HRPDeliver.png" width="750px" />


## Ropa

1. You must be in a [faction](https://trickys.gg/factions), you can either join one or [create](/stormworks/HRP/factions#create-a-faction) a new one.
2. Znajdź punkt ropy naftowej na mapie. (To daje 30cr po przechwyceniu)

<img src="/img/hrp/cargooil/HRPOilField.png" />

3. Udaj się do punktu ropy naftowej i poczekaj na przechwycenie.

<img src="/img/hrp/cargooil/HRPOilPointcapture1.png" />

4. Po przechwyceniu otrzymasz pieniądze, punkt zostanie porzucony i będzie niedostępny do przechwycenia przez 30 minut, więc poczekaj lub znajdź inny punkt.

<img src="/img/hrp/cargooil/HRPOilPointcapture2.png" />

## Wymiary

Kontenery ISO:
- Wysokość: 11 bloków – 2,75 metra.
- Szerokość: 11 bloków – 2,74 metra.
- Długość: 29 bloków – 7,25 metrów.
- Waga: 4 tony.

AirISO:
- Wysokość: 8 bloków - 2 metry.
- Szerokość: 9 bloków – 2,74 metra.
- Długość: 9 bloków – 7,25 metrów.
- Waga: 318 kg.