---
sidebar_position: 1
description: Steam Safety Information
---
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

# Steam Safety

export const ControlledAccordions = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange =(panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
    {/* #region Quick Reference for Common Scams */}
      <Accordion expanded={expanded === 'steamsafety1'} onChange={handleChange('steamsafety1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-bookmark"></i> Quick Reference For Common Scams</Typography>
            </AccordionSummary>
              <AccordionDetails>
                A Steam/Valve administrator/employee/moderator will <b>NEVER</b> contact you through Discord, Steam chat or any other place to talk about anything pertaining to your account.
                <br/><br/>
                A Steam/Valve administrator/employee/moderator will never add you as a friend to talk about any of the following things. If Valve needs to talk to you about something they will contact you through an account alert. Here are some examples of what an account alert might look like: Example 1, Example 2, Example 3, Example 4, Example 5.
                <br/><br/>
                A Steam/Valve administrator/employee/moderator will <b>never</b> send you a picture, gif, video or any other form of media as proof or information about <b>anything</b>. Any pictures, gifs, etc. sent to you that look like your account is being viewed by someone with special permissions are <b>fake</b>.<br/><br/>
                A Valve employee will <b>always</b> have a Valve Employee Steam profile badge and a Steam moderator will <b>always</b> have a Steam Community Moderator Steam profile badge on their Steam profiles. Check it yourself, never trust ANY form of picture or media sent to you, and never trust a link to a profile sent to you. A scammer can send you a link to any profile.
                <br/><br/>
                A scammer screensharing with you on Discord or somewhere else will use programs and extensions to falsely modify Steam pages, and make fake pages that look like they have special administrator privileges. This is never real, just understand that a Valve employee or Steam moderator <b>will NEVER contact you in this way</b>, the only way you will ever be contacted is through Steam Support, and <b>no other way</b>.
                <br/><br/>
                - There's no such thing as appealing a pending or false report or ban.
                - There's no such thing as a pending ban.<br/>
                - There's no such thing as a pending report.<br/>
                - There's no such thing as a false or accidental report.<br/>
                - There's no such thing as item verification or item scanning.<br/>
                - There's no such thing as a Certificate of Eligibility.<br/>
                <br/>
                There's no such thing as an <b>accidental report</b>, and if someone truly did accidentally report you, Valve will see that the report is not valid and nothing will happen, you would never be contacted about it in such a manner.
                Someone representing Valve or Steam will <b>never</b> ask you for your items, money or other monetary commodity such as gift cards, account credentials, <b>this includes your log-in name and authenticator codes. Do not share them with anyone</b>.
                <br/><br/>
                Someone's account age, profile level, high amount of friends, or high amount of comments on a profile is <b>NOT</b> a way to verify someone's legitimacy. Scammers purchase old accounts, it costs a few dollars to get a high profile level, friends can be farmed through malicious groups and comments can also be farmed or bought.
                <br/><br/>
                You cannot trade Steam wallet funds or CD-keys via Steam, and there's no way for it to be automatically added to your account when a trade is completed.
                <br/><br/>
                CD and Wallet codes can be purchased with stolen credit cards or other malicious methods. If this has happened with a CD or Wallet code you've redeemed your account is at high risk of being locked for fraudulence, as such it is never recommended you trade for CD or Wallet keys, and it is never recommended to purchase anything from unauthorized re-sellers like the scam sites G2A or Kinguin.
              </AccordionDetails>
    {/* #endregion */}
    {/* #region SteamAPI Scam (Phishing) */}
      </Accordion>
      <Accordion expanded={expanded === 'steamsafety2'} onChange={handleChange('steamsafety2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-code"></i> SteamAPI Scam (Phishing)</Typography>
            </AccordionSummary>
              <AccordionDetails>
              This is functionally a sub-set of Phishing and Trading, but because its extremely common we're outlining it here.
              <br/><br/>
              In order to trade items, a user must initiate the trade and confirm it in the Steam Mobile Authenticator. There is no way for a scammer to bypass this. However they can trick users into approving the 'wrong' trade via this scam. It effectively tricks a user into approving a bad trade without them knowing via the SteamAPI.
              <br/><br/>
                  1. User logs into a fake website - This is PHISHING. YOU ALREADY SCREWED UP, you are essentially just giving away your log-in credentials and authenticator code.<br/>
                  2. The attacker then logs into your account.<br/>
                  3. They add a SteamAPI key to your account.<br/>
                  4. The attacker waits, this is the insidious part, because you dont know you've been compromised.<br/>
                  5. You get a legitimate trade from someone.<br/>
                  6. The attacker detects this via the SteamAPI key they created on your account.<br/>
                  7. The attacker then immediately cancels that trade, creates another account that looks exactly like the account from the original trade, and sends you that trade instead. They can do this automatically via the SteamAPI key by way of programs, scripts and bots.<br/>
                  8. You look at your trades, and at first glance everything looks fine as the profile at first glance looks the same as the one from the legitimate trade.<br/>
                  9. You approve the trade in your Steam Mobile Authenticator.<br/>
                  10. Your stuff is now gone.<br/>
                  <a href="https://store.steampowered.com/account/">Change your steam password</a><br/>
                  <a href="https://store.steampowered.com/twofactor/manage">De-authorize all other devices</a><br/>
                  <a href="https://support.steampowered.com/kb_article.php?ref=4440-RTUI-9218">Set up 2FA if you haven't already</a><br/>
              Functionally this is a phishing scam. You logged into a phishing site to get free money or whatever and gave away your steam credentials.<br/>
              If there is anything in here your account is compromised.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Scams via viruses */}
      <Accordion expanded={expanded === 'steamsafety3'} onChange={handleChange('steamsafety3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-virus"></i> Scams Via Viruses</Typography>
            </AccordionSummary>
              <AccordionDetails>
              This risk exists pretty much everywhere on the internet and Steam is not an exception. Just as usual, it is very important that you pay attention to what links you click and what you download. The vast majority of threats can be dealt with an anti-virus software <b>and</b> common sense.<br/><br/>
              - Be especially cautious with new friends who want something from you.<br/>
              - We highly recommend you enable Steam Guard two-factor authentication to secure your account - <a href="https://help.steampowered.com/en/faqs/view/6891-E071-C9D9-0134">How to set up</a><br/>
              - NEVER trust a website when your friend has to bypass Steam's URL filter in order to send you the URL, e.g.<br/>
              &bull; <i>[username]: Visit this awesome website: fakeandmalicioussite .com</i><br/>
              &bull; <i>[username]: Just remove the space</i><br/>
              You might end on a site like <a href="https://i.imgur.com/uykVPI1.png">this one</a> and the downloaded file is a Trojan.<br/><br/>
              <h2>Variation: Fake screenshot link</h2>
              Here a scammer will try to get you to download a file by tricking you into believing it is a screenshot.
              <br/>
              Either via a comment or pm this person will make up a story in order to make you click the link. You assume it leads to a screenshot. The most common stories are e.g.
              <br/><br/>
              <i>"Congratulations, you won a prize in the giveaway group X. Simply tell me which of the ones on this image you want."</i>
              <br/><br/>
              <i>"I want to trade with you, but I sadly have to keep my inventory private due to many scammers. Please tell me which skin you'd want to trade from this screenshot"</i>
              <br/><br/>
              Some may notice the link leads to a site similar looking to other popular image hosting sites, but is in fact malicious. Usually one letter is changed, or sometimes their order. Even if the url says sitename.com/image.png, is doesn't mean it leads to an image file. Some sites will try to download the file in the background, other will display a fake error message ("unable to load the picture") and tell you to download the image which, as it later turns out, isn't actually one. It was straight up malware named image.png.scr, or image.png.exe<br/><br/>
              <h2>Variation: ESEA Crack</h2>
              Sometimes, when you're playing competitive Counter-Strike: Global Offensive, you meet a nice dude who you'd like to play with again. Sadly do some people have bad intentions. This rarely happens, but if it does, it often goes as this:
              <br/><br/>
              The guy who added you will do everything to be nice to you: offer you some items for free, play matches with you, etc...
              <br/><br/>
              After a while, he'll ask if you have ever played on ESEA or if you know about it. You probably have heard about it, but since you're playing competitive, you don't have a subscription for it. The scammer knows this and will use it against you.
              <br/><br/>
              He will ask you if you want it for free. Meanwhile, behind the scenes, the file he wants to send you will hijack you.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Phishing scams */}
      <Accordion expanded={expanded === 'steamsafety4'} onChange={handleChange('steamsafety4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-fish"></i> Phishing Scams</Typography>
            </AccordionSummary>
              <AccordionDetails>
              One of the most common ways for account hijackers to get access to your account is by creating a fake page and tricking their victims into believing it is the real website. The URL and the site itself will usually look very similar to the original, e.g: steamco<b><u>mn</u></b>unity, steamcomun<b><u>ii</u></b>ty or st<b><u>ae</u></b>mcommunity.
              <br/><br/>
              Hackers will usually spread these fake links via automated bots or already hijacked accounts which either add you or just comment the fake links. The chance of receiving these messages increases when using trading sites like TF2Backpack, CSGOLoungue and DOTA2Lounge.<br/><br/>
              Such a message could for example look like this:
              <br/><br/>
              <i>[username]: Hi, my friend somehow can't add you as a friend. He always receives an error message, but he wants to trade with you. Can you please add him: steam<b><u>s</u></b>communtiy.com/id/scammerusername/</i>
              <br/><br/>
              The easiest way to never fall for a phishing scam (especially if you're unsure if the login page is legit) to use a simply trick:
              <br/><br/>
              Visit the official <a href="https://steamcommunity.com/">Steam Community page</a> first and log in as usual. Now tell the other page to log in via Steam. If the site is legit, it will now show you as already logged in. If it asks you to enter your credentials, it is a phishing scam and you should immediately close the site.<br/><br/>
              Valve operates the following websites for Steam. If you are prompted with a login page, the first part of the URL within the browser will always be one of the following domains:<br/>
              &bull; <a href="https://steamcommunity.com">https://steamcommunity.com</a><br/>
              &bull; <a href="https://steampowered.com">https://steampowered.com</a><br/>
              &bull; <a href="https://store.steampowered.com">https://store.steampowered.com</a><br/>
              &bull; <a href="https://help.steampowered.com">https://help.steampowered.com</a><br/><br/>
              <h2>Variation: SSFN Scam</h2>
              One way hijackers are trying to bypass SteamGuard is by asking you to upload the "SSFN" file(s) which lie in Steam's installation folder. <b>Never</b> under any circumstances upload or share this file. Not even Valve themselves will ever ask you for it.<br/><br/>
              This files is essentially a prove that the current device is already authorized and doesn't require a SteamGuard code anymore (the <i>Remember me</i> feature).<br/><br/>
              <h2>Variation: Punycode</h2>
              This scam is essentially also phishing, but the most difficult one to notice and it requires quite a lot of effort. The attacker will send you a link that looks exactly like the original and often can not be distinguished by looking at it. However when opening the link, it will send you to a different site, which is usually a phishing site; in some case even straight up malware.
              <br/><br/>
              The best way to protect yourself against it is to either type in the URL manually or copy only parts of it (e.g. /id/scammerusername/). If you don't want to do this effort, you should at least check the link displayed in Steam's warning message. Steam will in these cases show you a different, weird looking, URL at which point you should immediately stop. Here is an example of how it could look like.
              <br/><br/>
              For example, try to tell the difference between the following URLs (first one is the original, second one fake):<br/>
              &bull; store.steampowered.com<br/>
              &bull; store.steampоwered.com<br/>
              For the more technical part, it works by using certain unicode characters that look identical to the "normal" ASCII ones. One example would be <b>о</b> and <b>o</b> which look very similar, but are <b>not</b> the same letter (cyrillic on the left, latin on the right). Many browsers will convert these unicode letters to ASCII which results in <a href="https://en.wikipedia.org/wiki/Punycode">Punnycode</a>, this weird looking url (here: store.xn--steampwered-wnj.com).
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Scams Via Impersonation */}
      <Accordion expanded={expanded === 'steamsafety5'} onChange={handleChange('steamsafety5')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-user-secret"></i> Scams Via Impersonation</Typography>
            </AccordionSummary>
              <AccordionDetails>
              There are several scam variations of essentially the same concept of impersonation. This is usually done with the intention to scam valuable items, but doesn't have to.<br/><br/>
              Always verify that people are who they claim to be, for example if they claim to be from Valve, visit <a href="http://steamcommunity.com/discussions/moderators">this page</a> click on the person in the list and see if you have them added as a friend (<b>very</b> unlikely).<br/><br/>
              Give your friends nicknames so you can easily distinguish them from impersonator and also better remember them (open the Friends window, right click on the person and select Add Nickname).<br/><br/>
              <h2>Variation: Third person scam / Chatroom Scam</h2>
              A random guy adds you. He makes an offer (CS:GO/TF2 keys for a high-priced item for example) for you via steam chat, usually an overpay. He then says that he doesn't know if he can trust you, so he asks you if you have a trusted friend. Then the guy wants you to tell him the friends name/link to his steam profile. He then adds your friend and asks him some useless questions about trust (and invites your friend to a chatroom with another account).
              <br/><br/>
              After that he will ask you if you can trade your expensive item to your friend to see it really is your friend ("you trust your friend so it should be no problem"). After you've given your item to your friend, the scammer's second account will come into play. Now that your friend probably accepted the chatroom invite, he will change his second account's name similar to yours (usually adding a . (dot) into the end of your name so that there wont be YOURNAME (2) when trading).
              <br/><br/>
              And after that, he will send a trade invite to your friend and your friend will probably give the item back to "you" (the scammer's 2nd account with a name similar to yours).<br/><br/>
              <h2>Variation: Middleman Injection</h2>
              After a trade that takes place partially outside Steam has been agreed to, a middleman needs to be chosen. The scammer will suggest a trusted middleman that checks out correctly on SteamRep. However, once the victim agrees to the middleman a fake account pretending to be that middleman adds the victim. Once the unaware victim completes their side of the transaction, believing that they are using a trusted middleman, both the scammer and accomplice will delete and block them while keeping the stolen goods. Make sure you personally add the middleman yourself, and independently verify the identity of the person who added you using the instructions above (look up both accounts on SteamRep and compare). If you're not listed in the friends list of the actual trusted middleman, you're dealing with a scammer. You need to check the MM out yourself - that means you click on the MM's profile and copy/paste their profile URL into SteamRep and verify that it's the person they say they are.<br/><br/>
              <h2>Variation: Valve Impersonation</h2>
              Some people will try to scam items by telling you that they're an employee and that you got reported for duping/scamming/... and/or that they want to "scan" your items. Valve will <b>NEVER</b> trade or participate in trading. Do not trust anyone who claims otherwise, even if they go so far as to threaten with some kind of ban. Everyone claiming to be from/involved with Valve and is trying to trading with you or threatening you is lying.<br/><br/>
              <b>Everyone</b> associated with Valve is listed <a href="https://steamcommunity.com/discussions/moderators">here</a>. If the person actually worked for Valve, they would be listed on that page and have a badge that says <i>"Valve Employee"</i> or <i>"Steam Community Moderator"</i>.<br/><br/>
              This scam method can also include spoofed emails from Valve or Steam Support. Please keep in mind that neither of them will ever send you emails with attachments.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Trade scams */}
      <Accordion expanded={expanded === 'steamsafety6'} onChange={handleChange('steamsafety6')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-right-left"></i> Trade scams</Typography>
            </AccordionSummary>
              <AccordionDetails>
              There are many trade scams ranging from pathetic to very sneaky.<br/><br/>
              You should always keep all aspect of a trade within a single trade. Avoid all external trades such a game keys or money, especially if you're inexperienced. Otherwise you could end up trading your goods first and when it's your trading partner's turn, they'll simply block you and walk away with your items.<br/><br/>
              There are a few things that are <b>always</b> a scam:<br/>
              &bull; <b>Trading Steam Wallet funds:</b> Steam Wallet funds can not be transferred or added to a trade.<br/>
              &bull; <b>Item verification:</b> There is no such thing as item verification. Valve will <b>never</b> ask you for items.<br/>
              &bull; <b>Borrowing an item:</b> This can be a teammate begging for items, or sometimes even an impersonator of popular individuals (e.g. YouTube) who claims to "borrow" your items for a few matches.<br/>
              &bull; <b>Voting for a team on a website:</b> A user will ask for you to vote for their "team", such as a CS:GO or Dota team. They will direct you to a website to vote, but it is a normal phishing scam.<br/><br/>
              <h2>Variation: Quick-switching</h2>
              This involves the victim thinking they're getting one item but gets another instead. While in a trade, a scammer will put up the desired item. Without the victim noticing, he'll quickly switch it to another item of less value that looks similar. A common attempt is switching an expensive unusual hat with a much cheaper unusual version of that hat; the item will look the same in the trade window but have a different effect. The item might also be renamed so that chat window of the trade that updates when items are removed/added looks less suspicious. After trading, the victim is left with the switched item. This scam often involves misdirection; they'll ask a question in Steam chat so the victim switches windows and then the scammer will swap the item while the victim is typing. They might also ask the victim to add another item or remove one of them, or add and remove many items themselves to mask the visible chat log from showing that they've switched the item. With updates to Steam trading this has become easier to notice. Any change in items is shown in the trade chat log and any change after you have readied up on the trade will stop you from accepting the trade. Always take your time in trades, and double check all items after you have clicked "ready".<br/><br/>
              <h2>Variation: Charge-backs</h2>
              One issue that comes with any external transaction that allows charge-backs, such as PayPal. This feature allows customers to get their money back if the seller did not properly deliver sold goods. However this system can rather easily be abused, since PayPal can not properly verify these "trades". If you still want to use these transaction methods, inform yourself of the risks and how to prevent them.<br/><br/>
              <h2>Variation: Invoices</h2>
              An invoice is a method for a seller to request payment from a buyer, and there are scams designed to take advantage of people's familiarity and lack of familiarity with the process. The following covers PayPal, a popular service that can send invoices.<br/><br/>
              With a PayPal Invoice, sellers are able to customize the contents of an invoice they are planning to send to a buyer. They can list the items they are selling, the quantity, unit price, and amount, all leading to a total amount for the invoice. Additionally, there are "Terms and conditions" and "Note to recipient" sections where they can add in more details about the transaction. Because sellers are free to write whatever they want in these two sections, businesses who use PayPal Invoice will write down the conditions of the transactions so customers will understand them before purchasing goods from them. Scammers take advantage of these two sections by writing in such a way that misleads buyers into thinking the invoice is a payment method.<br/><br/>
              In the "Terms and Conditions," they may write variations and combinations of the following statement: "This is a PayPal Gift. Gifts are non-refundable. It may take up to 24 hours to process and reflect in your PayPal balance. PayPal has you covered." All of this is written by the scammer to mislead the reader into thinking that the invoice is actually a "PayPal Gift" payment system with PayPal's terms and conditions. The "Note to recipient" section may have similar wording that suggests PayPal is more involved in the transaction than the service actually provides. With these set in place, scammers will send invoices to potential victims.<br/><br/>
              One version of the scam involves the scammer who is the buyer sending an invoice to the seller. Because of the wording in the two sections in the invoice, it would suggest that the seller would have to pay the scammer. The solution is to ignore the invoice.<br/><br/>
              Another scam involves the scammer who is the buyer offering to pay first to the seller.<br/><br/>
              1. Scammer offers to pay for item prior to trade.
              <span class="text-muted">This would instill a sense of ease in the seller for not having to worry about being paid.</span><br/>
              2. Scammer sends an invoice disguised as a fake PayPal Gift statement.
              <span class="text-muted">Remember that it should be the seller who sends an invoice to the buyer, but what the scammer does is after sending the invoice to the seller, he will mark it as paid. Marking it as paid does not mean a transaction has taken place, but it will show up to the seller as though one has been made.</span><br/>
              3. Seller thinks that he has been paid.
              <span class="text-muted">By reading the "Terms and conditions" and "Note to recipient," the seller will believe that he has been paid through a PayPal gift process. Furthermore, because the term says the gift is non-refundable or can't be charged-back, he will be mislead into thinking that he will not be a victim of a chargeback scam (even though he's about to become the victim of another scam).</span><br/>
              4. Seller then trades item with scammer.
              <span class="text-muted">What the seller failed to notice is that his PayPal balance has not changed, so he has not actually been paid. Even if the seller did notice, because the misleading "Terms and conditions" created by the scammer states that PayPal Gift payments may take up to 24 hours to process, he may think that it will take a while before his PayPal balance is updated.
              5. Result is that the scammer has received an item from the seller and the seller did not receive payment.</span><br/>
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Fake Gambling Sites */}
      <Accordion expanded={expanded === 'steamsafety7'} onChange={handleChange('steamsafety7')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-dice"></i> Fake Gambling Sites</Typography>
            </AccordionSummary>
              <AccordionDetails>
              There are many different methods that involve a fake gambling site and all of them are centered around 2 things, phishing you and/or stealing your skins by baiting you into using the fake gambling site. In this section we will go over a few known methods.<br/><br/>
              Because <b>all of them can be centered around phishing you</b> we will not mention this in every method.<br/>
              All of these sites also present themselves to be real by having a fake chat where there are bots saying things, usually in conjunction with a fake jackpot. For example when someone wins big the bots will spam about that specific big win. All of the events are scripted, and if you stay long enough you will start to see the events repeating themselves, think of it like a video playing over and over.
              <br/><br/>
              It can also be ran through an API where the bots basically have a library of things they can say with a time limit that controls how often the bots can say something, and trigger events as to when they say some specific things, like when someone wins/loses a jackpot.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region The Common Scams */}
      <Accordion expanded={expanded === 'steamsafety8'} onChange={handleChange('steamsafety8')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fas fa-fighter-jet"></i> The Common Scams</Typography>
            </AccordionSummary>
              <AccordionDetails>
              A common method is that you're just being phished, the gambling site is just to bait you. Phishing is something you should always be wary of, it can happen anywhere or anytime with any link or website.
              <br/><br/>
              Read Phishing Scams for further information.
              <br/><br/>
              Another common method is that you're presented with a fake gambling website that uses the real Steam API. It has a jackpot that is seemingly active with real players in it, but you will simply never win the jackpot because the website is just a facade, the chat and the jackpot is simulated, no matter how much you deposit, no matter how big of a chance you have to win, you will never actually win.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region The Deposit Scam */}
      <Accordion expanded={expanded === 'steamsafety9'} onChange={handleChange('steamsafety9')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-money-bill-transfer"></i> The Deposit Scam</Typography>
            </AccordionSummary>
              <AccordionDetails>
              A scammer will add you and tell a story about how they won a lot of skins on a gambling site, but they are having issues with withdrawing them. That's where you get asked the help them out, and they will promise you a nice reward for helping them.
              <br/><br/>
              In this stage of the scam many different things can happen, but in short they try to convince you through one way or another of social engineering that to help them you need to withdraw the skins for them; this is where the scam kicks in.
              <br/><br/>
              To withdraw the skins you need to make a first-time deposit onto the gambling site. If you do this you will lose those skins and you've been scammed. There is no skins to withdraw, there's no one who needs help and there's definitely no reward at the end of it for you.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region The Job Offer */}
      <Accordion expanded={expanded === 'steamsafety10'} onChange={handleChange('steamsafety10')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-briefcase"></i> The Job Offer</Typography>
            </AccordionSummary>
              <AccordionDetails>
              In this scam there will be a person who adds you on Steam and pitches you a job offer on a fake gambling site, most commonly either a moderation job or a coding job.
              <br/><br/>
              Here you may notice that this job offer is quite weird. Unlike a traditional job offer where you have to prove yourself to the company, the scammer is trying to prove their website to you, they are pitching themselves to you as if you're the one in control, this is to make you feel comfortable, it is a method of social engineering. Usually they give you no real information. They usually tell you how many hours a day you need to work, but they wont go any further and literally anything you say will be okay with them. If you tell them you can only moderate for 30 minutes a day they will be completely fine with it.
              <br/><br/>
              Through social engineering they will try and convince you that they will pay you before you even start to work on the website. Again they are trying to make you feel comfortable and make you feel as if there's nothing to lose, they are even giving you the opportunity to scam them by taking the payment and leaving, but again this is social engineering, and the scam is about to begin.
              <br/><br/>
              Assuming this isn't a phishing scam and you've logged into the site using Valve's real Steam API the scammer will try to get you to deposit something, usually through 2 different methods.
              <br/><br/>
              One way of baiting you is that the scammer will add fake items to your site inventory and tell you to withdraw them, but to withdraw them you need to make a first-time deposit. If you deposit something you've been scammed, there's no job and there's no items for you to withdraw.
              <br/><br/>
              Another way of doing it is that the scammer will tell you to make a deposit on the gambling site and they will make you win the jackpot and they will try to convince you that you have to make a considerably large bet so your chances of winning are bigger than 1%-5% because it can be hard to make you win if your chances are too low.
              <br/><br/>
              If you do deposit something you've lost the items and the scam may be over, but sometimes it isn't. Sometimes the scammer will try to continue socially engineering you.
              <br/><br/>
              If the scammer decides to continue they will make it look like you've won the jackpot but you will obviously not receive any of these items, the scammer will try to convince you that a hiccup with the site happened and that you need to deposit and win the jackpot again. If you haven't caught onto the scam yet and you decide to deposit again they will yet again make it look like you won the jackpot, but you will be in this loophole until you're out of skins or until you've caught onto the scam.
              <br/><br/>
              The reason this scam can work quite well on gullible people is because throughout the entire scam you're always shown that you have the upper hand. For example the way they presented the job offer to you, and the fact that they are paying you before you even start to work, and at the last stage of the scam you are proven that you are talking to a real admin of the website because they did in fact make it look like you won the jackpot.
              <br/><br/>
              Social engineering can be quite malicious.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    {/* #region Steam Gifts Scam */}
      <Accordion expanded={expanded === 'steamsafety11'} onChange={handleChange('steamsafety11')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><i class="fa-solid fa-gift"></i> Steam Gifts Scam</Typography>
            </AccordionSummary>
              <AccordionDetails>
              In this method, a scammer will try to trade your expensive items in exchange for gifts and sometimes even offer to go first. Usually the person asks you to add their "alt account" from which they want to send you them. This should already raise red flags. Everything might look fine at first, you usually even receive your gifts.
              <br/><br/>
              However these games were purchased with stolen credit cards or compromised accounts and the owner will do a chargeback when they notice the transaction.
              <br/><br/>
              Since you were involved in this fraud, all games will be revoked and your account may even be suspended. Yes, redeeming fraudulent gifts is explicitly listed as a possible reason to suspend an account (<a href="https://support.steampowered.com/kb_article.php?ref=5406-WFZC-5519">here</a>).
              <br/><br/>
              Do <b>not</b> accept gifts from strangers.
              </AccordionDetails>
      </Accordion>
    {/* #endregion */}
    </div>
  );
}

Steam Support does not reach out to people by Steam chat or Discord. Anyone approaching you that says they're from Steam Support (or Trickys Support) and asks for your account information or items is a scammer.

:::info Watch out for Account Hijacking

- NEVER give out your password to anyone.
- NEVER click unknown links from untrusted sources.
- NEVER follow instructions to speak with someone claiming to represent Steam Support through Discord or any other chat system, even if they come from a friend's account.
- There's no such thing as a false report that you need to take steps to solve. This is a scam.

:::

### Get Secure
- Having a phone number linked with your account will help you recover your account if it is compromised - [Manage Now](https://store.steampowered.com/phone/manage)
- Steam Guard Mobile Authenticator [Get Steam Guard](http://store.steampowered.com/mobile)


### Common Type Of Scams

These cover most common scams that occur on Steam. It includes various trade scams and also several other risks for your account.

<ControlledAccordions></ControlledAccordions>

<br/><br/>
This page will be presented in English, as translators are unable to make edits to ensure the preservation of the guide's integrity.