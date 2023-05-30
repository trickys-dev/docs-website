---
sidebar_position: 0
description: HRP Fracht & Öl Informationen
---

# Fracht & Öl

## Definitionen

<!-- css for flex -->
  <div class="flex-vcenter">
    <div>
      <img src="/img/hrp/cargooil/HRPISOContainer.png" width="250px"/>
    </div>
<p>

- Land/Seefracht: Dies wird als ISO Container definiert.

</p>
  </div>

<!-- css for flex -->
  <div class="flex-vcenter">
    <div>
      <img src="/img/hrp/cargooil/HRPAirISOContainerpng.png" width="200px"/>
    </div>
<p>

- Luftfracht: Dies wird als AirISO Container definiert.

</p>
  </div>

## Fracht

1. Zuerst müssen Sie wählen, ob Sie Land/See oder Luftfracht machen. (Für diese Anleitung wählen wir Land/See)

:::note ein paar Hinweise

- Die Standorte, die Sie beliefern können, unterscheiden sich zwischen Land/See oder Luft. So kann beispielsweise O’Neil (Luft) in die Arktis liefern, aber der North Harbor (Land/Sea) nicht.
- Sie können KEINE Land-/See Fracht in der Luft transportieren, dies ist gegen HRP Gesetze und führt zu einer Geldstrafe. (Sofern Sie diese unter 1 km zum Terminal laden)
- Sie können KEINE Luftfracht an Land/See transportieren, dies ist gegen [HRP Gesetze (2.2)](/hrplaws#23-airiso-container-mismanagement) und führt zu einer Geldstrafe.
- Es sind nur 2 Frachten von jeglicher Art nach [HRP Gesetz (2.4)](/hrplaws#24-player-container-limit) zugelassen.

:::

2. Finden Sie heraus, wohin Sie Frachten liefern können mit dem `?listdst Befehl` (Lieferziele abhängig von Ihrem Standort)
3. Verwenden Sie den `?claimto [Number]` Befehl, um Fracht zu diesem Ziel in Anspruch zu nehmen. <img src="/img/hrp/cargooil/HRPClaimTo.png" />

4. Bringen Sie die Fracht zum Lieferort, für diese Anleitung beliefern wir Spycakes.
5. Sobald Sie angekommen sind, schauen Sie auf Fracht nach der ID und nutzen Sie `?deliver [Fracht ID]`. <img src="/img/hrp/cargooil/HRPDeliver.png" width="750px" />


## Öl

1. Sie müssen in einer [Fraktion](https://trickys.gg/factions)sein, Sie können entweder einer beitreten oder eine neue [erstellen](/stormworks/HRP/factions#create-a-faction).
2. Finden Sie einen Öl-Punkt auf der Karte. (Dies gibt 30cr sobald eingenommen)

<img src="/img/hrp/cargooil/HRPOilField.png" />

3. Gehen Sie zum Öl-Punkt und warten Sie, bis Sie ihn eingenommen haben.

<img src="/img/hrp/cargooil/HRPOilPointcapture1.png" />

4. Sobald der Punkt eingenommen ist, erhallten Sie Geld, der Punkt ist dann nicht mehr eingenommen und hat 30 min Abklingzeit, also warten Sie oder finden Sie einen weiteren.

<img src="/img/hrp/cargooil/HRPOilPointcapture2.png" />

## Maßen

ISO Container:
- Höhe: 11 Blöcke - 2,75 Meter.
- Breite: 11 Blöcke - 2,74 Meter.
- Länge: 29 Blöcke - 7,25 Meter.
- Gewicht: 4 Tonnen.

AirISO:
- Höhe: 8 Blöcke - 2 Meter.
- Breite: 9 Blocks - 2,25 Meter.
- Länge: 9 Blöcke - 2,25 Meter.
- Gewicht: 318 kg.