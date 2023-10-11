---
sidebar_position: 1
description: Règlements
---

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

# Règlements

export default function ControlledAccordions() { const [expanded, setExpanded] = React.useState(false); const handleChange =(panel) => (event, isExpanded) => { setExpanded(isExpanded ? panel : false); }; return (
    <div>
    {/* #region Discord Rules & Info */}
      <Accordion expanded={expanded === 'dcpanel'} onChange={handleChange('dcpanel')}>
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
      <Accordion expanded={expanded === 'swpanel'} onChange={handleChange('swpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-anchor"></i> Documentation du serveur Stormworks</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <b>Les règles suivantes s'appliquent à tous les serveurs :</b><br/>
          1. Utilisez le bon sens.<br/>
          2. N'apparaissez pas de gros véhicules ou complexes.<br/>
          3. Pas de véhicules d'apparition dans la <a href="https://trickys.gg/vehiclebans">Liste d'interdiction de véhicule</a>.<br/>
          4. Faire disparaître les véhicules non utilisés ou brisés. (<a href="/stormworks/commands">?clean ou ?c</a>)<br/>
          5. Pas de publicité dans le jeu.<br/>
          6. Aucun atelier modifié.<br/>
          7. Pas d'ateliers de structure utilisés.<br/>
          8. <a href="https://trickys.gg/staffteam">Staff</a> ont le dernier mot.<br/>
          9. L'utilisation malveillante ou exploitation de comptes discord alternatifs sera punie correctement.<br/>
          10. Vous avez besoin d'une licence de bateau <a href="/stormworks/boats"></a> pour utiliser des bateaux sur des serveurs 1,2,3.<br/>
          11. Ne tirez pas à l'intérieur de la <a href="/stormworks/no-fire-zone">NFZ</a>, c'est une zone sûre. L'utilisation d'armes dans les serveurs sans armes est interdite.<br/>
          12. L'utilisation d'armes nucléaires est interdite.<br/>
          13. Ne spammez pas le chat ou la voix. (la musique n'est pas autorisée à moins de 1 km d'apparition)<br/>
          14. Ne chagrinez pas intentionnellement le plaisir du jeu pour les autres utilisateurs.<br/><br/>
          Lois de Roleplay pour les serveurs 3,4,5<br/>
          1. <a href="/hrplaws">Loi sur le jeu</a><br/>
          2. <a href="https://trickys.gg/staffteam">Charte RP</a>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region ATS/ETS Rules */}
      <Accordion expanded={expanded === 'truckpanel'} onChange={handleChange('truckpanel')}>
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
    {/* #region FS22 Rules */}
      <Accordion expanded={expanded === 'fs22panel'} onChange={handleChange('fs22panel')}>
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
    {/* #region Minecraft Rules */}
      <Accordion expanded={expanded === 'mcpanel'} onChange={handleChange('mcpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-square-full"></i> Serveurs Minecraft</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <span class="tricky-color">Règles générales</span><br/>
        1. Aucun lag intentionnel du serveur.<br/>
        2. Tout acte d'exploiter bogue/s est un bannissement immédiat.<br/>
        3. Pas de Nukes dans une plage de deux rtp de n'importe quel chunk.<br/>
        4. Si deux ou plusieurs joueurs jouent ensemble et sont des bassmates (joueurs qui partagent une base/s), vous devez être dans la même équipe/partie. (Utilisation de FTBchunks)<br/>
        5. Vous avez droit à un maximum de quatre machines minières (Quarries, Digital Miners, etc) par équipe/partie en cours à la fois. (Voir la règle 4)<br/>
        6. Minecraft Game Manager a le dernier mot.<br/>
        <span class="tricky-color">Dimension Specific Rules</span><br/>
        Fin de règles :<br/>
        1. Tout ce qui se trouve sur l'île principale ne peut pas être réclamé (ceci n'inclut pas la ville finale)<br/>
        2. La plate-forme d'apparition ne peut pas être modifiée de toute façon<br/>
        3. Les portails de Bedrock pour quitter ou entrer dans la Ville de l'End ne peuvent pas être réclamés ou modifiés de toute façon<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region KSP Rules */}
      <Accordion expanded={expanded === 'ksppanel'} onChange={handleChange('ksppanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-user-astronaut"></i> Règles du serveur KSP</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Utilisez le bon sens.<br/>
          2. Ne faites pas apparaître des véhicules qui causent un retard significatif.<br/>
          3. Pas de désordres avec les véhicules des autres joueurs ou les Kerbals.<br/>
          4. Il ne faut pas retirer les véhicules des autres joueurs sauf si vous avez la permission de la personne qui les a créés.<br/>
          5. Supprimez les véhicules que vous ne prévoyez pas d'utiliser et/ou qui ne bénéficieront pas au serveur.<br/>
          6. <a href="https://trickys.gg/staffteam">Staff</a> ont le dernier mot.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region CC2 Rules */}
      <Accordion expanded={expanded === 'cc2panel'} onChange={handleChange('cc2panel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-ship"></i> Règles du serveur CC2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. N'endeuillez/ne ruinez pas intentionnellement le plaisir du jeu pour les autres utilisateurs.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region BeamMP Rules */}
      <Accordion expanded={expanded === 'beampanel'} onChange={handleChange('beampanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-car-side"></i> Règles du serveur BeamMP</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. N'endeuillez/ne ruinez pas intentionnellement le plaisir du jeu pour les autres utilisateurs.<br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Project Zomboid Rules */}
      <Accordion  disabled expanded={expanded === 'pzpanel'} onChange={handleChange('pzpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-biohazard"></i> Règles du serveur du projet Zomboid</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          À ajouter
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Factorio Rules */}
      <Accordion  disabled expanded={expanded === 'factpanel'} onChange={handleChange('factpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-industry"></i> Règles du serveur Factorio</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          À ajouter
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region MotorTown Rules */}
      <Accordion expanded={expanded === 'mtpanel'} onChange={handleChange('mtpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-car"></i> Règles du serveur MotorTown</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          1. Les travaux de police sont en liste blanche, pour être mis en liste blanche, appliquer <a href="https://trickys.gg/applications/new">ici</a>.<br/>
          2. Respectez les joueurs et leurs emplois.<br/>
          3. Pas de modding, de triche ou de causant intentionnellement du ralentissement.<br/>
          4. <a href="https://trickys.gg/staffteam">Staff</a> ont le dernier mot.<br/><br/>
          <Alert variant="outlined" severity="info"> Si vous trouvez un joueur qui abuse de ses avantages en liste blanche, vous pouvez <a href="discord://discord.com/channels/710922135580835950/846373509470748722" class="discord-text">#soumettre un ticket</a> sur Discord pour le signaler.</Alert><br/>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region WarThunder Rules */}
      <Accordion expanded={expanded === 'wtpanel'} onChange={handleChange('wtpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-fighter-jet"></i> Règles du serveur WarThunder</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <span class="tricky-color">Règles générales</span><br/>
          1. Pas d'apparition du camp d'apparition <span class="text-muted">(3 règle de frappe, si les équipes ennemies utilisent les trois frappes, alors elles perdent le round).</span><br/>
          2. No teamkilling <span class="text-muted">(one off incidents are to be looked over but persistent teamkills will result in punishment dealt by the game manager).</span><br/>
          3. The use of "Vaulted Vehicles" is forbidden <span class="text-muted">(vehicles that are removed from tech tree's for balancing reasons or are event exclusive, a brief exemption can be made if the vehicle has been made available for a short period of time at around the time of an upcoming event).</span>
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    </div>
  ); }





