---
sidebar_position: 10
description: Informatie over SW servers
---


# SW Server Informatie

export const Icon = ({children, type}) => {
  if (type=="dlcG") return (<i class="fa-solid fa-gun text-warning" title="Weapon DLC"></i>);
  if (type=="dlcI") return (<i class="fa-solid fa-industry text-warning" title="Industrial DLC"></i>);
  if (type=="tick") return (<i class="fas fa-fw fa-check-circle text-success" title="Yes"></i>);
  if (type=="cross") return (<i class="fas fa-times-circle text-danger" title="No"></i>);
}

<table>
<thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">Server 1</th>
        <th scope="col">Server 2</th>
        <th scope="col">Server 3</th>
        <th scope="col">Server 4</th>
        <th scope="col">Server 5</th>
        <th scope="col">Server 6</th>
    </tr>
</thead>
<tbody>
<tr>
    <th scope="row">Soort</th>
    <td class="text-center">Normaal</td>
    <td class="text-center">Normaal</td>
    <td class="text-center"><a href="/category/hrp">Rollenspel</a></td>
    <td class="text-center"><a href="/category/hrp">Rollenspel</a></td>
    <td class="text-center"><a href="/category/hrp">Rollenspel</a></td>
    <td class="text-center"><a href="/stormworks/trainserver">Treinen</a></td>
</tr>
<tr>
    <th scope="row">Voertuig limiet</th>
    <td class="text-center">2</td>
    <td class="text-center">2</td>
    <td class="text-center">2</td>
    <td class="text-center">2</td>
    <td class="text-center">3</td>
    <td class="text-center">3</td>
</tr>
<tr>
    <th scope="row">DLCs</th>
    <td class="text-center"></td>
    <td class="text-center"><Icon type="dlcG"></Icon> <Icon type="dlcI"></Icon></td>
    <td class="text-center"><Icon type="dlcG"></Icon></td>
    <td class="text-center"></td>
    <td class="text-center"></td>
    <td class="text-center"></td>
</tr>
<tr>
    <th scope="row">Snel reizen</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row">Speler Schade</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row">Voertuig Schade</th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/topup-zone">Top-up Zones</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/no-fire-zone">Wapen Vrije Zone</a></th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/boats">Boot Licentie</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/HRP/cargo-oil">Vracht</a></th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row">Eilanden Ontgrendeld</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/HRP/cargo-oil">AutoAuth</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row">Anti-Diefstal</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row">Anti-Lag</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
</tbody>
</table>


