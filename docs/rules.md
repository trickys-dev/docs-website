---
sidebar_position: 1
description: Rules
---
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

# Rules

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange =(panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
    {/* #region Discord Rules & Info */}
      <Accordion expanded={expanded === 'dcpanel'} onChange={handleChange('dcpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fab fa-discord"></i> Discord Rules & Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          These are rules that apply directly to discord servers within our community.<br/><br/>
          1. This is an English server, please keep it that way.<br/>
          2. Respect everyone. Do not antagonise/harass others or create a hostile environment.<br/>
          3. NSFW content is not allowed.<br/>
          4. No self-advertising without permission.<br/>
          5. Malicious or exploitative use of alternate discord accounts will be met with proper punishments.<br/>
          6. Use common sense, your account is responsible for anything posted by it.<br/>
          7. Listen to the <a href="https://trickys.gg/staffteam">moderation team</a>, even if what they are saying is not explicitly in the rules.<br/><br/>
          All of the above rules apply to text channels & voice chats.<br/>
          Certain channels may have their own rules and uses in their descriptions, make sure to read it before posting. The rules are applied at the discretion of the moderation staff. If you have an issue with the way a moderator acts, please make a support ticket at <a href="https://support.trickys.gg">https://support.trickys.gg</a>. <br/><br/>
          If you have any questions regarding the rules, please feel free to ask anyone from the moderation team. If there is an emergency and you need a moderator immediately, you can ping the <span style={{color: "#2bac3c"}}>@Staff</span> role. This is for emergency use only and not to be joked around with. Discord's <a href="https://discord.com/guidelines">Guidelines</a> & <a href="https://discord.com/terms">Terms of Service</a> always apply.
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Stormworks Rules */}
      <Accordion expanded={expanded === 'swpanel'} onChange={handleChange('swpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-anchor"></i> Stormworks Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <b>The following rules apply to all servers:</b><br/>
          1. Use common sense.<br/>
          2. Don't spawn large or complex vehicles.<br/>
          3. No Spawning vehicles from the <a href="https://trickys.gg/vehiclebans">Vehicle Ban List</a>.<br/>
          4. Despawn unused & broken vehicles. (<a href="/stormworks/commands">?clean or ?c</a>)<br/>
          5. No advertising in-game.<br/>
          6. No modified workbenches.<br/>
          7. No using structure workbenches.<br/>
          8. <a href="https://trickys.gg/staffteam">Staff</a> have final say.<br/>
          9. Malicious or exploitative use of alternate steam accounts is strictly prohibited.<br/>
          10. You need a <a href="/stormworks/boats">Boat License</a> to use boats on non RP servers.<br/>
          11. Do not fire inside the <a href="/stormworks/no-fire-zone">NFZ</a>, this is a safe zone. Using weapons in non weapons servers is prohibited.<br/>
          12. The usage of nuclear weapons is prohibited.<br/>
          13. Do not spam chat or voice. (music is not allowed within 1km of spawn)<br/>
          14. Do not grief/intentionally ruin the fun of gameplay for other players.<br/>
          15. Do not impersonate staff.<br/><br/>
          You can read the <a href="/stormworks/hrp/rprules">Roleplay Rules</a> here.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'truckpanel'} onChange={handleChange('truckpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fas fa-truck"></i> ETS/ATS Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          All up-to-date company rules can be viewed in <a href="https://trucksbook.eu/company/125046">Trucksbook</a>.
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region FS22 Rules */}
      <Accordion expanded={expanded === 'fs22panel'} onChange={handleChange('fs22panel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-tractor"></i> FS22 Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <span class="tricky-color">General Rules</span><br/>
          1.1 Do not sabotage other peoples work.<br/>
          1.2 Always show respect for other peoples equipment, crops and livestock.<br/>
          1.3 Always listen to the farm manager when working as a farm worker or contractor.<br/>
          1.4 Do not create landscapes that will spoil the map for everyone (e.g a large unnatural mountain on your field).<br/>
          1.5 Use common sense.<br/>
           <span class="tricky-color">Trees</span><br/>
          2.1 Only cut down trees on your property or property that you are contacted on.<br/>
          2.2 Trees must be properly stored, scattered trees left on fields or roads will result in a fine.<br/>
           <span class="tricky-color">Driving</span><br/>
          3.1 If you are carrying a load or implement beacons must be on.<br/>
          3.2 Drivers must adhere to the correct side of the road depending on the map.<br/>
          3.3 Crashing into another vehicle(player), compensation may be asked for.<br/>
           <span class="tricky-color">Punishment & Fines</span><br/>
          These will result in a warning or a fine;<br/>
          4.1 Fly-tipping - leaving bags or pallets around the map will result in a fine per item from the bank.<br/>
          4.2 Leaving vehicles or equipment in or around the shop will result in a fine.<br/>
          4.3 Dumping bulk (straw, grains, wood chippings etc) on the road.<br/>
          4.4 Blocking roads, sell points or other peoples fields with objects.<br/>
          4.5 The bank can issue fines to any farm when they see sit, even for something that is not stated in these rules.<br/>
           <span class="tricky-color">Debt</span><br/>
          Green (£0 - £-25,000), Yellow (£-25,001 - £-40,000), Red (£-40,001 - £-50,000+)<br/>
          5.1 Reaching yellow will get you a warning, when reaching red you will get one last warning, when you go over red the bank gets involved.<br/>
           <span class="tricky-color">FS22 Generators</span><br/>
          6.1 Small farms* are allowed to use a generator that produces upto 14k a month.<br/>
          *A small farm is a farm that owns upto or less then 2 land tiles.<br/>
          6.2 All other farms are considered big and should be independant (have no generators).<br/>
          Breaking either of these will result in farm deleation.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Minecraft Rules */}
      <Accordion expanded={expanded === 'mcpanel'} onChange={handleChange('mcpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-square-full"></i> Minecraft Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <span class="tricky-color">General Rules</span><br/>
        1. No purposeful lagging of the server.<br/>
        2. Any act of exploting bug/s is an immediate ban.<br/>
        3. No Nukes within two rtp range of any claimed chunk.<br/>
        4. If two or more players are playing together and are  bassmates (players that share a base/s) you are required to be in the same team/party. (Using FTBchunks)<br/>
        5. You are allowed a maximum of four mining machines (Quarries, Digital Miners, etc) per team/party running at a time. (See rule 4)<br/>
        6. Minecraft Game Manager has final say.<br/>
        <span class="tricky-color">Dimension Specific Rules</span><br/>
        End Rules:<br/>
        1. Anything on the main End island can not be claimed (This does not include the End city)<br/>
        2. Spawn platform may not be changed in anyway<br/>
        3. Bedrock portals to leave or enter the End City may not be claimed or changed in anyway<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region KSP Rules */}
      <Accordion expanded={expanded === 'ksppanel'} onChange={handleChange('ksppanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-user-astronaut"></i> KSP Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Use common sense.<br/>
          2. Don't spawn vehicles that cause significant lag.<br/>
          3. No messing with other players vehicles or Kerbals.<br/>
          4. No removing other players vehicles unless you have the permission of the person who spawned them.<br/>
          5. Remove vehicles that either you do not plan to use and/or will not benefit the server.<br/>
          6. <a href="https://trickys.gg/staffteam">Staff</a> have the final say.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region CC2 Rules */}
      <Accordion expanded={expanded === 'cc2panel'} onChange={handleChange('cc2panel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-ship"></i> CC2 Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Do not grief/intentionally ruin the fun of gameplay for other users.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region BeamMP Rules */}
      <Accordion expanded={expanded === 'beampanel'} onChange={handleChange('beampanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-car-side"></i> BeamMP Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Do not grief/intentionally ruin the fun of gameplay for other users.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Project Zomboid Rules */}
      <Accordion  disabled  expanded={expanded === 'pzpanel'} onChange={handleChange('pzpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-biohazard"></i> Project Zomboid Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          To be added
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Factorio Rules */}
      <Accordion  disabled  expanded={expanded === 'factpanel'} onChange={handleChange('factpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-industry"></i> Factorio Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          To be added
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region MotorTown Rules */}
      <Accordion expanded={expanded === 'mtpanel'} onChange={handleChange('mtpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-car"></i> MotorTown Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Typography>
         <a href="/motortown/rules">Click Here</a> to view the MT Rules.
         </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region WarThunder Rules */}
      <Accordion expanded={expanded === 'wtpanel'} onChange={handleChange('wtpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-fighter-jet"></i> WarThunder Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <a href="/warthunder/rules">Click Here</a> to view the War Thunder Rules.
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    </div>
  );
}




