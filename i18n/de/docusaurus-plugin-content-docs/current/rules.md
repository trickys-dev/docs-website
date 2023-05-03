---
sidebar_position: 1
description: Rules
---

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

# Rules

export default function ControlledAccordions() { const [expanded, setExpanded] = React.useState(false); const handleChange =(panel) => (event, isExpanded) => { setExpanded(isExpanded ? panel : false); }; return (
    <div>
    {/* #region Discord Rules & Info */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-anchor"></i> Stormworks Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Use common sense.<br/>
          2. Don't spawn large or complex vehicles.<br/>
          3. No Spawning vehicles from the <a href="https://trickys.gg/vehiclebans">Vehicle Ban List</a>.<br/>
          4. Despawn unused & broken vehicles. (<a href="/stormworks/commands">?clean or ?c</a>)<br/>
          5. No advertising in-game (example: having server names and/or logos on vehicles).<br/>
          6. No modified workbenches.<br/>
          7. No using structure workbenches.<br/>
          8. <a href="https://trickys.gg/staffteam">Staff</a> have final say.<br/>
          9. Malicious or exploitative use of alternate steam accounts is strictly prohibited.<br/>
          10. You need a <a href="/stormworks/boats">Boat License</a> to use boats on servers 1,2,3.<br/>
          11. Do not fire inside the <a href="/stormworks/no-fire-zone">NFZ</a>, this is a safe zone.<br/>
          12. Do not use nuclear weapons anywhere.<br/>
          13. Do not spam chat or voice. (music is not allowed within 1km of spawn)<br/>
          14. Do not grief/intentionally ruin the fun of gameplay for other users.<br/><br/>
          Roleplay Laws For Servers 3,4,5<br/>
          1. <a href="/hrplaws">Game Laws</a><br/>
          2. <a href="https://trickys.gg/staffteam">RP Charter</a>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
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
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-square-full"></i> Minecraft Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
a
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region KSP Rules */}
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
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
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-ship"></i> CC2 Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Use common sense.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region CC2 Rules */}
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-car"></i> MotorTown Server Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Use common sense.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    </div>
  ); }