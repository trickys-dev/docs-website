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
          <Typography sx={{ width: '33%', flexShrink: 0 }}><i class="fab fa-discord"></i> Discord Rules & Information</Typography>
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
s
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    </div>
  ); }
