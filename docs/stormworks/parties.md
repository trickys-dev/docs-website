---
sidebar_position: 2
description: Parties Information
---

# Parties

:::info Beta

The Party system is in beta!

:::

Parties allow you to do the following:
- Send messages within the party.

Coming Soon
- Take joined jobs (HRP).
- Whitelist vehicles to party.


## Create a Party

<!-- css for flex -->
  <div class="flex-vcenter">
    <div class="img-mg">
       <img src="/img/party/pcreated.png" width="200px"/>
   </div>
<p>

- To create a party use `?p create`.
- Once the party has been created you should see a pop-up showing you are the owner.
- If you have a long username, we will cut some of it off so that each name fits on one line.

</p>
 </div>

## Joining A Party

<!-- css for flex -->
  <div class="flex-vcenter">
    <div class="img-mg">
       <img src="/img/party/adinvite.png" width="200px"/>
   </div>
<p>

- You will need to be invited by the owner to join a party.
- When you are invited you will see this pop-up which you can accept or deny.
- use `?p accept` or `?p deny` commands in-game.

</p>
 </div>
<!-- css for flex -->
  <div class="flex-vcenter">
    <div class="img-mg">
       <img src="/img/party/pjoined.png" width="200px"/>
   </div>
<p>

- If `?p accept` is used then you have joined the party.

</p>
 </div>

## Leaving A Party

To leave a party use `?p leave`.

## Manage A Party

:::info Manage Parties

Only the party owner can use managment permissions.

:::

### Kick A Player

To kick a player from the party use `?p kick <id>`

### Invite A Player

<!-- css for flex -->
  <div class="flex-vcenter">
    <div class="img-mg">
       <img src="/img/party/pinvitepending.png" width="200px"/>
   </div>
<p>

- Use `?p invite <id>` to send a invite to a player.
- Once you have invited a player, you will see the number of pending invites within the pop-up.
- Once the player has accepted or denied the invite this will update.

</p>
 </div>

### Delete A Party

To delete the party which will remove everyone use `?p delete`.

:::note Leaving As Owner!

If you leave the game while being a party owner the party will be deleted and everyone in it will be removed.

:::

