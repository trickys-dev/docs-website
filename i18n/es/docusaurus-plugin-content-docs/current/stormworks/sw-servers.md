---
sidebar_position: 10
description: Info about SW servers
---


# SW Server Info

export const Icon = ({children, type}) => {
  if (type=="dlcG") return (<i class="fa-solid fa-gun text-warning" title="Weapon DLC"></i>)
  if (type=="dlcI") return (<i class="fa-solid fa-industry text-warning" title="Industrial DLC"></i>)
  if (type=="tick") return (<i class="fas fa-fw fa-check-circle text-success" title="Yes"></i>)
  if (type=="cross") return (<i class="fas fa-times-circle text-danger" title="No"></i>)
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
    <th scope="row">Type</th>
    <td class="text-center">Normal</td>
    <td class="text-center">Normal</td>
    <td class="text-center"><a href="/category/hrp">RP</a></td>
    <td class="text-center"><a href="/category/hrp">RP</a></td>
    <td class="text-center"><a href="/category/hrp">RP</a></td>
    <td class="text-center"><a href="/stormworks/trainserver">Trains</a></td>
</tr>
<tr>
    <th scope="row">Vehicle Limit</th>
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
    <th scope="row">Fast Travel</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row">Player Damage</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row">Vehicle Damage</th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/topup-zone">Topup Zones</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/no-fire-zone">NFZ</a></th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/boats">Boat License</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/HRP/cargo-oil">Cargo</a></th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row">Islands Unlocked</th>
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
    <th scope="row">Anti-Steal</th>
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


