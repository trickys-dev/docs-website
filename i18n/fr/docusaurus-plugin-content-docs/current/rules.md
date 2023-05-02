---
sidebar_position: 1
description: Règlements
---

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

# Règlements

export default function ControlledAccordions() { const [expanded, setExpanded] = React.useState(false); const handleChange =(panel) => (event, isExpanded) => { setExpanded(isExpanded ? panel : false); }; return (
    <div>
    {/* #region Discord Rules & Info */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fab fa-discord"></i> Information des Rôles Discord</Typography>
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
          1. Utilisez le bon sens.<br/>
          2. N'apparaissez pas de gros véhicules ou de complexes.<br/>
          3. Pas de véhicules d'apparition dans la <a href="https://trickys.gg/vehiclebans">Liste d'interdiction de véhicule</a>.<br/>
          4. Faire disparaître les véhicules non utilisés ou brisés. (<a href="/stormworks/commands">?clean ou ?c</a>)<br/>
          5. Aucune publicité en jeu (exemple : avoir des noms de serveurs et/ou des logos sur les véhicules).<br/>
          6. Aucun atelier modifié.<br/>
          7. Pas d'ateliers de structure utilisés.<br/>
          8. <a href="https://trickys.gg/staffteam">Staff</a> ont le dernier mot.<br/>
          9. L'utilisation malveillante ou exploitation de comptes discord alternatifs sera punie correctement.<br/>
          10. Vous avez besoin d'une licence de bateau <a href="/stormworks/boats"></a> pour utiliser des bateaux sur des serveurs 1,2,3.<br/>
          11. Ne tirez pas à l'intérieur de la <a href="/stormworks/no-fire-zone">NFZ</a>, c'est une zone sûre.<br/>
          12. N'utilisez pas d'armes nucléaires nulle part.<br/>
          13. Ne spammez pas le chat ou la voix. (la musique n'est pas autorisée à moins de 1 km d'apparition)<br/>
          14. Ne chagrinez pas intentionnellement le plaisir du jeu pour les autres utilisateurs.<br/><br/>
          Lois de Roleplay pour les serveurs 3,4,5<br/>
          1. <a href="/hrplaws">Loi sur les jeux</a><br/>
          2. <a href="https://trickys.gg/staffteam">Charte RP</a>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fas fa-truck"></i> Règles du serveur ETS/ATS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          Toutes les règles de la société à jour peuvent être consultées dans <a href="https://trucksbook.eu/company/125046">Trucksbook</a>.
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-tractor"></i> Règles du serveur</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <span class="tricky-color">Règles générales</span><br/>
          1. Ne sabotez pas le travail des autres joueurs.<br/>
          1.2 Faites toujours preuve de respect pour les équipements, les cultures et le bétail des autres joueurs.<br/>
          1. Écoutez toujours le gestionnaire de la ferme lorsque vous travaillez en tant que travailleur ou entrepreneur.<br/>
          1. Ne pas créer des paysages qui gâcheront la carte pour tout le monde (e. une grande montagne contre nature sur votre champ).<br/>
          1.5 Utilisez le bon sens.<br/>
           <span class="tricky-color">Arbres</span><br/>
          2. Ne coupez que des arbres sur votre propriété ou sur laquelle vous êtes contacté.<br/>
          2. Les arbres doivent être entreposés comme il se doit, les arbres dispersés laissés sur les champs ou les routes se solderont par une amende.<br/>
           <span class="tricky-color">Conduite</span><br/>
          3. Si vous portez une charge ou implantez des balises doivent être activées.<br/>
          3. Les conducteurs doivent respecter le bon côté de la route en fonction de la carte.<br/>
          3.3 Crashing dans un autre véhicule(joueur), une compensation peut être demandée.<br/>
           <span class="tricky-color">punitions et amendes</span><br/>
          Celles-ci entraîneront une alerte ou une amende;<br/>
          4. Astuce - le fait de laisser des sacs ou des palettes autour de la carte entraînera une amende par article de la banque.<br/>
          4. Laisser des véhicules ou de l'équipement dans ou autour de la boutique se traduira par une amende.<br/>
          4.3 Vrac de vidage (paille, grains, copeaux de bois, etc) sur la route.<br/>
          
 4.4 Bloquer les routes, vendre des points ou d'autres champs de peuples avec des objets.<br/>
          4. La banque peut infliger des amendes à n'importe quelle ferme quand elle se voit assise, même pour quelque chose qui n'est pas stipulé dans ces règles.<br/>
           <span class="tricky-color">dettes</span><br/>
          vert (0 - 25 £, 00), Jaune (£-25,001 - £-40,000), Rouge (£-40,001 - £-50,000+)<br/>
          5. Atteindre le jaune vous donnera un avertissement, en atteignant le rouge, vous recevrez un dernier avertissement, quand vous dépassez le rouge, la banque s'implique.<br/>
           <span class="tricky-color">Générateurs FS22</span><br/>
          6. Les petites fermes* sont autorisées à utiliser un générateur qui produit jusqu'à 14k par mois.<br/>
          *Une petite ferme est une ferme qui possède jusqu'à 2 parcelles de terre.<br/>
          6. Toutes les autres fermes sont considérées comme grandes et doivent être indépendantes (n'ont pas de générateurs).<br/>
          La rupture de l'un d'eux entraînera la suppression de la ferme.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Ats/Ets Rules */}
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-square-full"></i> Serveurs Minecraft</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
a
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-user-astronaut"></i> Règles du serveur KSP</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Utilisez le bon sens.<br/>
          2. Ne faites pas apparaître des véhicules qui causent un lag significatif.<br/>
          3. Pas de désordres avec les véhicules des autres joueurs ou les Kerbals.<br/>
          4. Il ne faut pas retirer les véhicules des autres joueurs sauf si vous avez la permission de la personne qui les a créés.<br/>
          5. Supprimez les véhicules que vous ne prévoyez pas d'utiliser et/ou qui ne bénéficieront pas au serveur.<br/>
          6. <a href="https://trickys.gg/staffteam">Staff</a> ont le dernier mot.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-ship"></i> Règles du serveur CC2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Utiliser le sens commun.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-car"></i> Règles du serveur MotorTown</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Utiliser le sens commun.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    </div>
  ); }
