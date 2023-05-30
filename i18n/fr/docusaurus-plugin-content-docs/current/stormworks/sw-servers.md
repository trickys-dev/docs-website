---
sidebar_position: 10
description: Informations sur les serveurs SW
---


# SW Information Serveur

export const Icon = ({children, type}) => { if (type=="dlcG") return (<i class="fa-solid fa-gun text-warning" title="Weapon DLC"></i>); if (type=="dlcI") return (<i class="fa-solid fa-industry text-warning" title="Industrial DLC"></i>); if (type=="tick") return (<i class="fas fa-fw fa-check-circle text-success" title="Yes"></i>); if (type=="cross") return (<i class="fas fa-times-circle text-danger" title="No"></i>); }

<table>
<thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">Serveur 1</th>
        <th scope="col">Serveur 2</th>
        <th scope="col">Serveur 3</th>
        <th scope="col">Serveur 4</th>
        <th scope="col">Serveur 5</th>
        <th scope="col">Serveur 6</th>
        <th scope="col">Server NA1</th>
        <th scope="col">Server NA2</th>
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
    <td class="text-center">Normal</td>
    <td class="text-center"><a href="/category/hrp">RP</a></td>
</tr>
<tr>
    <th scope="row">Limite de Véhicule</th>
    <td class="text-center">2</td>
    <td class="text-center">2</td>
    <td class="text-center">2</td>
    <td class="text-center">2</td>
    <td class="text-center">3</td>
    <td class="text-center">3</td>
    <td class="text-center">2</td>
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
    <td class="text-center"></td>
    <td class="text-center"><Icon type="dlcG"></Icon></td>
</tr>
<tr>
    <th scope="row">Voyage rapide</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
</tr>
<tr>
    <th scope="row">Dégâts de joueur</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row">Dégâts des véhicules</th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/topup-zone">Zone de rechargement</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
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
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/boats">Licence de bateau</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/HRP/cargo-oil">Cargo</a></th>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="cross"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row">Îles débloquées</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row"><a href="/stormworks/auth">AutoAuth</a></th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
<tr>
    <th scope="row">Anti-vol</th>
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
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
    <td class="text-center"><Icon type="tick"></Icon></td>
    <td class="text-center"><Icon type="tick"></Icon></td>
</tr>
</tbody>
</table>


