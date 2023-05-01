---
sidebar_position: 1
description: Règlements
---

importer Accordion de '@mui/material/Accordion'; importer AccordionSummary de '@mui/material/AccordionSummary'; importer AccordionDetails de '@mui/material/AccordionDetails'; importer Typography de '@mui/material/Typography'; importer ExpandMoreIcon de '@mui/icons-material/ExpandMore';

# Règlements

export default function ControlledAccordions() { const [expanded, setExpanded] = React.useState(false); const handleChange =(panel) => (event, isExpanded) => { setExpanded(isExpanded ? panel : false); }; return (
    <div>
    {/* #région de Discord Règles & Info */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: '33%', flexShrink: 0 }}><i class="fab fa-discord"></i> Information des Rôles Discord</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          Ce sont des règles qui s'appliquent directement aux serveurs discord de notre communauté.<br/><br/>
          1. Ceci est un serveur anglais, veuillez le garder ainsi.<br/>
          2. Respecter tout le monde. Ne pas antagoniser/harceler les autres ou créer un environnement hostile.<br/>
          3. Le contenu NSFW n'est pas autorisé.<br/>
          4. Aucune auto-publicité sans autorisation.<br/>
          5. L'utilisation malveillante ou exploitation de comptes discord alternatifs sera punie correctement.<br/>
          6. Utilisez le bon sens, votre compte est responsable de tout ce qui est posté par lui.<br/>
          7. Écoutez l'équipe de modération <a href="https://trickys.gg/staffteam"></a>, même si ce qu'ils disent n'est pas explicitement dans les règles.<br/><br/>
          Toutes les règles ci-dessus s'appliquent aux salons textuels et aux chats vocaux.<br/>
          Certains canaux peuvent avoir leurs propres règles et utilisations dans leurs descriptions, assurez-vous de le lire avant de le publier. Les règles sont appliquées à la discrétion du personnel de modération. Si vous avez un problème avec la façon dont un modérateur agit, veuillez faire un ticket de support à <a href="https://support.trickys.gg">https://support.trickys.gg</a>. <br/><br/>
          Si vous avez des questions concernant les règles, n'hésitez pas à les poser à toute personne de l'équipe de modération. S'il y a une urgence et que vous avez besoin d'un modérateur immédiatement, vous pouvez envoyer un message au rôle <span style={{color: "#2bac3c"}}>@Staff</span>. Ceci est destiné à une utilisation d'urgence seulement et ne doit pas être tourné autour avec. Les <a href="https://discord.com/guidelines">Lignes directrices</a> et <a href="https://discord.com/terms">les conditions d'utilisation</a> s'appliquent toujours.
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Stormworks Rules */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-anchor"></i> Documentation du serveur Stormworks</Typography>
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
