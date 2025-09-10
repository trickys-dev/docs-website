---
sidebar_position: 0
description: War Thunder Vaulted Vehicles
---
import React from 'react'; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

# Vaulted Vehicles

export const ControlledAccordions = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange =(panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
    {/* #region USA Vehicles */}
      <Accordion expanded={expanded === 'usapanel'} onChange={handleChange('usapanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/> USA</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            {/* #region USA Table */} 
            <table>
            <tr>
                <td></td>
                <td></td>
                <td>Name</td>
                <td>Reason</td>
                <td>Exception</td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_lvt_a_4.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/LVT(A)(4)">LVT(A)(4)</a><br/>RB: 1.3</td>
                <td><a href="https://warthunder.com/en/news/6703-event-winner-vehicles-for-the-victory-anniversary-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_m5a1_stuart_canadian_5st_arm.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Stuart_VI_(5th_CAD)_(USA)"><i class="far fa-star"></i> Stuart VI (5th CAD)</a><br/>RB: 2.7</td>
                <td><a href="https://warthunder.com/en/news/4684-vday-victory-day-discounts-en/">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_m5a1_stuart_td.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/M5A1_TD">M5A1 TD</a><br/>RB: 2.7</td>
                <td><a href="https://warthunder.com/en/news/7077-twitch-drops-rewards-for-war-thunder-and-enlisted-this-weekend-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_m24_chaffee_tl.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/M24_(TL)">M24 (TL)</a><br/>RB: 3.7</td>
                <td><a href="https://warthunder.com/en/news/3480--en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_t55e1.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/T55E1">T55E1</a><br/>RB: 4.3</td>
                <td><a href="https://wiki.warthunder.com/Battle_Pass:_Season_II,_%22Steel_Centurion%22">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_m26e1_pershing.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/M26E1">M26E1</a><br/>RB: 6.7</td>
                <td><a href="https://warthunder.com/en/news/7408-news-happy-birthday-war-thunder-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_m728.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/M728_CEV">M728 CEV</a><br/>RB: 7.0</td>
                <td><a href="https://warthunder.com/en/news/8580-shop-war-thunders-birthday-sale-in-the-gaijinnet-store-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_magach_3.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Magach_3_(ERA)_(USA)"><i class="far fa-star"></i> Magach 3 (ERA)</a><br/>RB: 8.0</td>
                <td><a href="https://warthunder.com/en/news/7573-development-zachlam-m3-tager-half-track-abroad-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_usa.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_m1a1_abrams.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/M1A1_(YouTube_Cup)"><i class="fas fa-trophy"></i> M1A1</a><br/>RB: 11.0</td>
                <td><a href="https://warthunder.com/en/news/6286-esport-war-thunder-youtube-cup-results-en">Removed</a></td>
                <td></td>
            </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Germany Vehicles */}
      <Accordion expanded={expanded === 'germanypanel'} onChange={handleChange('germanypanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/> Germany</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            {/* #region Germany Table */} 
          <table>
            <tr>
                <td></td>
                <td></td>
                <td>Info</td>
                <td>Reason</td>
                <td>Exception</td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_ii_ausf_c_td.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Pz.II_C_TD">Pz.II C TD</a><br/>RB: 1.3</td>
                <td>Removed</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_amd_35_kwk.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Pz.Sp.Wg.P204(f)_KwK">Pz.Sp.Wg.P204(f) KwK</a><br/>RB: 2.0</td>
                <td>Removed</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_ii_ausf_h.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Pz.Sfl.Ic">Pz.Sfl.Ic</a><br/>RB: 2.3</td>
                <td><a href="https://warthunder.com/en/news/7154-shop-may-sale-in-the-gaijin-store-en">Limited</a></td>
                <td><a href="https://warthunder.com/en/news/9117-special-shop-german-unity-day-a-tank-and-plane-for-golden-eagles-plus-a-festive-decal-en">German Unity Day</a></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_j_td.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Pz.III_J1_TD">Pz.III J1 TD</a><br/>RB: 2.7</td>
                <td>Removed</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_sdkfz_251_22.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Sd.Kfz.251/22">Sd.Kfz.251/22</a><br/>RB: 3.0</td>
                <td>Removed</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_sdkfz_234_2_td.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Sd.Kfz.234/2_TD">Sd.Kfz.234/2 TD</a><br/>RB: 3.7</td>
                <td>Removed</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/us_m4a2_1944_germ.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/M4_748_(a)_(Germany)">M4 748 (a)</a><br/>RB: 4.0</td>
                <td>Removed</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_pz_iv_l70_a.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Panzer_IV/70(A)">Panzer IV/70(A)</a><br/>RB: 4.3</td>
                <td><a href="https://warthunder.com/en/news/7408-news-happy-birthday-war-thunder-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_sturmmorser_sturmtiger.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/38_cm_Sturmm%C3%B6rser">38 cm Sturmmörser</a><br/>RB: 5.7</td>
                <td><a href="https://warthunder.com/en/news/7946-event-dreams-come-true-sturmtiger-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_v_ersatz_m10.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Ersatz_M10">Ersatz M10</a><br/>RB: 6.0</td>
                <td><a href="https://warthunder.com/en/news/5224-special-festive-quest-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_v_coelian.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Flakpanzer_341">Flakpanzer_341</a><br/>RB: 6.3</td>
                <td><a href="https://wiki.warthunder.com/Update_1.91_&#34;Night_Vision&#34;">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_panther_ii.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Panther_II">Panther_II</a><br/>RB: 7.0</td>
                <td><a href="https://wiki.warthunder.com/Update_1.91_&#34;Night_Vision&#34;">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Tiger_II_(10.5_cm_Kw.K)">Tiger II (10.5 cm Kw.K)</a><br/>RB: 7.0</td>
                <td><a href="https://wiki.warthunder.com/Update_1.91_&#34;Night_Vision&#34;">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_maus.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Maus">Maus</a><br/>RB: 7.7</td>
                <td><a href="https://wiki.warthunder.com/Update_1.91_&#34;Night_Vision&#34;">Limited</a></td>
                <td><a href="https://warthunder.com/en/news/8559-special-war-thunders-11th-birthday-lets-celebrate-together-en">Anniversary Events</a></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_germany.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/germ_leopard_2a5.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Leopard_2A5_(YouTube_Cup)"><i class="fas fa-trophy"></i> Leopard 2A5</a><br/>RB: 11.7</td>
                <td>Removed</td>
                <td></td>
            </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region USSR Vehicles */}
      <Accordion expanded={expanded === 'ussrpanel'} onChange={handleChange('ussrpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/> USSR</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            {/* #region USSR Table */} 
                <table>
            <tr>
                <td></td>
                <td></td>
                <td>Info</td>
                <td>Reason</td>
                <td>Exception</td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_bt_7_1937_td.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/BT-7_TD">BT-7 TD</a><br/>RB: 1.3</td>
                <td><a href="https://warthunder.com/en/news/7020-special-twitch-drops-watch-enlisted-streams-and-get-rewards-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/uk_valentine_mk_9.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/MK-IX_%22Valentine%22_(USSR)"><i class="fas fa-star"></i> МК-IX "Valentine</a><br/>RB: 3.0</td>
                <td>Limited</td>
                <td><a href="https://warthunder.com/en/news/8093-special-happy-valentine-s-day-en">Valentine's Day Event</a></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_t_34_1940_l_11.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/T-34_(Prototype)">T-34 (Prototype)</a><br/>RB: 3.3</td>
                <td>Removed</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_t_34_1941_cast_turret.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/T-34_(1st_Gv.T.Br.)">T-34 (1st Gv.T.Br.)</a><br/>RB: 3.7</td>
                <td>Limited</td>
                <td><a href="https://warthunder.com/en/news/6588-event-defender-of-the-fatherland-en">Defender Of The Fatherland</a><br/>
                <a href="https://warthunder.com/en/news/7447-special-80th-anniversary-of-the-battle-of-moscow-en">Battle Of Moscow</a><br/>
                <a href="https://warthunder.com/en/news/8111-esport-defender-tournament-series-en">Defender Tournament Series</a></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_bm_31_12.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/BM-31-12">BM-31-12</a><br/>RB: 4.0</td>
                <td><a href="https://warthunder.com/en/news/8227-event-legend-of-victory-bm-31-12-andryusha-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_t_34e.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/T-34E">T-34E</a><br/>RB: 4.0</td>
                <td><a href="https://warthunder.com/en/news/5650-marathon-operation-s-u-m-m-e-r-assemble-a-tank-updated-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_kv_1e.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/KV-1E">KV-1E</a><br/>RB: 4.0</td>
                <td><a href="https://warthunder.com/en/news/5232-shop-winter-sales-special-bundle-and-gift-certificates-en">Limited</a></td>
                <td><a href="https://warthunder.com/en/news/6588-event-defender-of-the-fatherland-en">Defender Of The Fatherland</a></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_type_65_aa.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/Ph%C3%B2ng_kh%C3%B4ng_T-34_(USSR)"><i class="fas fa-star"></i> Phòng không T-34</a><br/>RB: 5.0</td>
                <td><a href="https://warthunder.com/en/news/4868-marathon-operation-s-u-m-m-e-r-awards-together-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_t_34_85e.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/T-34-85E">T-34-85E</a><br/>RB: 5.7</td>
                <td><a href="https://warthunder.com/en/news/5488-shop-victory-day-allied-bundles-and-discounts-en">Removed</a></td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_is_2_1944_revenge.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/IS-2_%22Revenge%22">IS-2 "Revenge"</a><br/>RB: 6.7</td>
                <td><a href="https://warthunder.com/en/news/4684-vday-victory-day-discounts-en/">Limited</a></td>
                <td><a href="https://warthunder.com/en/news/7408-news-happy-birthday-war-thunder-en">Anniversary Events</a></td>
            </tr>
            <tr>
                <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_ussr.svg" class="wtflag-header"/></td>
                <td><img src="https://static.encyclopedia.warthunder.com/images/ussr_t_80u.png" width="200px"/></td>
                <td><a href="https://wiki.warthunder.com/T-80U_(YouTube_Cup)"><i class="fas fa-trophy"></i> T-80U</a><br/>RB: 11.3</td>
                <td><a href="https://warthunder.com/en/news/6286-esport-war-thunder-youtube-cup-results-en">Removed</a></td>
                <td></td>
            </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Great Britain Vehicles */}
      <Accordion expanded={expanded === 'gbpanel'} onChange={handleChange('gbpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/> Great Britain</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            {/* #region Great Britain Table */} 
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Info</td>
                    <td>Reason</td>
                    <td>Exception</td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_ac1_sentinel.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/A.C.I">A.C.I</a><br/>RB: 3.0</td>
                    <td><a href="https://warthunder.com/en/news/7469-event-operation-w-i-n-t-e-r-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_ac1_sentinel.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Achilles_(65_Rg.)">Achilles (65 Rg.)</a><br/>RB: 3.3</td>
                    <td><a href="https://warthunder.com/en/news/4684-vday-victory-day-discounts-en/">Limited</a></td>
                    <td><a href="https://warthunder.com/en/news/8306-special-vehicles-of-d-day-for-golden-eagles-en">D-Day</a></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_tog_2.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/TOG_II">TOG II</a><br/>RB: 5.3</td>
                    <td><a href="https://warthunder.com/en/news/8566-development-dreams-come-true-tog-ii-the-old-gangs-land-battleship-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_a_43_black_prince.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Black_Prince">Black Prince</a><br/>RB: 6.0</td>
                    <td><a href="https://warthunder.com/en/news/5232-shop-winter-sales-special-bundle-and-gift-certificates-en">Limited</a></td>
                    <td><a href="https://warthunder.com/en/news/8599-shop-black-friday-bundle-en">Black Friday</a></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_centurion_mk_3_ss11.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Strv_81_(RB_52)_(Great_Britain)"><i class="far fa-dot-circle"></i> Strv 81 (RB 52)</a><br/>RB: 7.7</td>
                    <td><a href="https://warthunder.com/en/news/6694-shop-may-sale-in-war-thunder-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_vijayanta.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Vijayanta">Vijayanta</a><br/>RB: 8.3</td>
                    <td>Removed</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_centurion_shot_kal_d.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Sho%27t_Kal_Dalet_(Great_Britain)"><i class="far fa-dot-circle"></i> Sho't Kal Dalet</a><br/>RB: 9.0</td>
                    <td><a href="https://warthunder.com/en/news/7573-development-zachlam-m3-tager-half-track-abroad-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_britain.svg" class="wtflag-header"/></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/uk_challenger_ii.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Challenger_2_(YouTube_Cup)"><i class="fas fa-trophy"></i> Challenger 2</a><br/>RB: 11.3</td>
                    <td><a href="https://warthunder.com/en/news/6286-esport-war-thunder-youtube-cup-results-en">Removed</a></td>
                    <td></td>
                </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Japan Vehicles */}
      <Accordion expanded={expanded === 'japanpanel'} onChange={handleChange('japanpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_japan.svg" class="wtflag-header"/> Japan</Typography>
        </AccordionSummary>
        <AccordionDetails>                    
        <Typography>
            {/* #region Japan Table */} 
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Info</td>
                    <td>Reason</td>
                    <td>Exception</td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_japan.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/jp_type_3_ka_chi.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Ka-Chi">Ka-Chi</a><br/>RB: 2.0</td>
                    <td><a href="https://warthunder.com/en/news/7267-event-summer-landing-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_japan.svg" class="wtflag-header"/></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/jp_type_97_kai_td.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Chi-Ha_Kai_TD">Chi-Ha Kai TD</a><br/>RB: 2.3</td>
                    <td>Removed</td>
                    <td></td>
                </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region China Vehicles */}
      <Accordion expanded={expanded === 'chinapanel'} onChange={handleChange('chinapanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_china.svg" class="wtflag-header"/> China</Typography>
        </AccordionSummary>
        <AccordionDetails>                    
        <Typography>
            {/* #region China Table */} 
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Info</td>
                    <td>Reason</td>
                    <td>Exception</td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_china.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/cn_type_69_2a.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Type_69-IIa">Type 69-IIa</a><br/>RB: 8.7</td>
                    <td><a href="https://warthunder.com/en/news/7674-shop-may-sale-en">Limited</a></td>
                    <td><a href="https://warthunder.com/en/news/8380-special-t-69-ii-g-and-a-decal-to-commemorate-pla-day-en">PLA Day</a></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_china.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/cn_t_62.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/T-62_545_(China)">Т-62 №545</a><br/>RB: 9.7</td>
                    <td><a href="https://warthunder.com/en/news/6694-shop-may-sale-in-war-thunder-en">Limited</a></td>
                    <td><a href="https://warthunder.com/en/news/7534-special-lunar-new-year-en">Lunar New Year</a></td>
                </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Italy Vehicles */}
      <Accordion expanded={expanded === 'italypanel'} onChange={handleChange('italypanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_italy.svg" class="wtflag-header"/> Italy</Typography>
        </AccordionSummary>
        <AccordionDetails>                    
        <Typography>
            {/* #region Italy Table */} 
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Info</td>
                    <td>Reason</td>
                    <td>Exception</td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_italy.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/it_toldi_ii_a.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Toldi_IIA">Toldi IIA</a><br/>RB: 1.3</td>
                    <td><a href="https://wiki.warthunder.com/Battle_Pass:_Season_III,_&#34;Strength_athletics&#34;">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_italy.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/it_41m_turan_2.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Turan_II">Turan II</a><br/>RB: 2.3</td>
                    <td><a href="https://wiki.warthunder.com/Battle_Pass:_Season_VI,_&#34;Firepower&#34;">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_italy.svg" class="wtflag-header"/></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/it_semovente_m43_105_leoncello.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/M43_%22G.C.Leoncello%22">M43 "G.C.Leoncello"</a><br/>RB: 3.0</td>
                    <td><a href="https://warthunder.com/en/news/6263-shop-war-thunder-summer-sale-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_italy.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/it_p_26_40.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/P40_%22G.C._Leoncello%22">P40 "G.C. Leoncello"</a><br/>RB: 3.3</td>
                    <td><a href="https://warthunder.com/en/news/6694-shop-may-sale-in-war-thunder-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_italy.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/it_44m_zrinyi_1.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Zrinyi_I">Zrinyi I</a><br/>RB: 4.0</td>
                    <td><a href="https://warthunder.com/en/news/7796-event-summer-quest-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_italy.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/it_vrcc_centauro.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/VRCC">VRCC</a><br/>RB: 9.7</td>
                    <td>Removed</td>
                    <td></td>
                </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region France Vehicles */}
      <Accordion expanded={expanded === 'francepanel'} onChange={handleChange('francepanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_france.svg" class="wtflag-header"/> France</Typography>
        </AccordionSummary>
        <AccordionDetails>                    
        <Typography>
            {/* #region France Table */} 
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Info</td>
                    <td>Reason</td>
                    <td>Exception</td>
                   </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_france.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/fr_lvt_bofors.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/LVT-4/40">LVT-4/40</a><br/>RB: 3.7</td>
                    <td><a href="https://wiki.warthunder.com/Battle_Pass:_Season_V,_&#34;River_Hunter&#34;">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_france.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/fr_lorraine_155.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Lorraine_155_Mle.50">Lorraine 155 Mle.50</a><br/>RB: 4.3</td>
                    <td><a href="https://warthunder.com/en/news/5453-special-chronicles-of-world-war-ii-in-war-thunder-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_france.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/fr_panhard_ebr_1954.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/E.B.R._(1954)">E.B.R. (1954)</a><br/>RB: 6.7</td>
                    <td><a href="https://warthunder.com/en/news/6981-special-operation-w-i-n-t-e-r-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_france.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/fr_amx_13_75_ss11.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/AMX-13_(SS.11)">AMX-13 (SS.11)</a><br/>RB: 6.7</td>
                    <td>Removed</td>
                    <td></td>
                </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Sweden Vehicles */}
      <Accordion expanded={expanded === 'swedenpanel'} onChange={handleChange('swedenpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_sweden.svg" class="wtflag-header"/> Sweden</Typography>
        </AccordionSummary>
        <AccordionDetails>                    
        <Typography>
            {/* #region Sweden Table */} 
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Info</td>
                    <td>Reason</td>
                    <td>Exception</td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_sweden.svg" class="wtflag-header"/></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/sw_strv_m39_td.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Strv_m/39_TD">Strv m/39 TD</a><br/>RB: 1.0</td>
                    <td><a href="https://warthunder.com/en/news/6751-watch-streams-on-twitch-get-rewards-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_sweden.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/sw_ikv_73.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Ikv_73">Ikv 73</a><br/>RB: 2.7</td>
                    <td><a href="https://warthunder.com/en/news/6808-special-operation-s-u-m-m-e-r-2020-en">Removed</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_sweden.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/sw_sav_fm48.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/SAV_20.12.48">SAV 20.12.48</a><br/>RB: 3.7</td>
                    <td><a href="https://warthunder.com/en/news/7674-shop-may-sale-en">Limited</a></td>
                <td><a href="https://warthunder.com/en/news/8691-special-swedish-armed-forces-day-the-sav-201248-and-a-decal-en">Swedish Armed Forces Day</a><br/><a href="https://warthunder.com/en/news/8909-special-the-sav-201248-and-a-decal-are-available-for-swedish-national-security-forces-day-en">Swedish National Security Forces Day</a></td>
                </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Israel Vehicles */}
      <Accordion expanded={expanded === 'israelpanel'} onChange={handleChange('israelpanel')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><img src="https://wiki.warthunder.com/static/country_svg/country_israel.svg" class="wtflag-header"/> Israel</Typography>
        </AccordionSummary>
        <AccordionDetails>                    
        <Typography>
            {/* #region Israel Table */} 
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Info</td>
                    <td>Reason</td>
                    <td>Exception</td>
                </tr>
                <tr>
                    <td class="text-center"><img src="https://wiki.warthunder.com/static/country_svg/country_israel.svg" class="wtflag-header"/><br/><span class="wt-prem">PREMIUM</span></td>
                    <td><img src="https://static.encyclopedia.warthunder.com/images/il_merkava_mk_2d.png" width="200px"/></td>
                    <td><a href="https://wiki.warthunder.com/Merkava_Mk.2D">Merkava Mk.2D</a><br/>RB: 9.7</td>
                    <td>Removed</td>
                    <td></td>
                </tr>
        </table>
            {/* #endregion */}
        </Typography>
        </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    </div>
  );
}

Vehicles that are [forbidden](/warthunder/rules) in our War Thunder events.

<ControlledAccordions></ControlledAccordions>

<br/><br/>

:::note

Notice a error let us know, [click here](https://docs.google.com/forms/d/e/1FAIpQLSd_WhNjLQfa-tpMzAP2LP7nmy6-6_HJ2Iwhg1oBhyEtDrScIw/viewform).

:::
