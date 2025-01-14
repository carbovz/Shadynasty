/*   STEP 1   */
export const leagueID = "958574088392450048"; // your league ID
export const leagueName = "Shadynasty"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Hearken! Behold the glorious realm of Shadynasty, where valiant souls gather to engage in the noble art of fantasy football. In this hallowed contest, warriors of strategy and cunning assemble their chosen champions, forging bonds between the realms of sport and imagination. With quill and parchment, they draft their rosters, selecting stalwart athletes to wage gridiron battles of skill and might. As the seasons unfold, the realm resounds with the clash of titans, as these heroic gladiators vanquish foes and ascend the ranks of Shadynasty, leaving their mark upon the annals of sporting lore. Amidst cheers and fervent cries, the champions of Shadynasty strive for victory, their spirits aflame with the desire to etch their names upon the pedestal of triumph. So gather, oh valiant souls, for Shadynasty awaits, where fantasy and football entwine in an eternal dance of glory and honor.</p>
  <p>-Hugh G. Rection</p>
  <p>The NFL is rigged</p>
  <p>-Eura Kunt</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

// export const managers = [
//     {
//       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "958576424116363264",
//       "name": "T-Blz",
// //       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Starbucks, CA", // (optional)
//       "bio": "Here to win rings and collude.",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Myself", // Can be anything (usually your rival's name)
//         link: 0, // manager array number within this array, or null to link back to all managers page
// //         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 5859, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Everyone overvalues QBs",
//       "tradingScale": 8, // 1 - 10
//       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//     {
//       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "465654298533949440"
//       "name": "AJ",
// //       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Jersey City, NJ", // (optional)
//       "bio": "Pats/Bills fan",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "nep", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Ryan", // Can be anything (usually your rival's name)
//         link: 2, // manager array number within this array, or null to link back to all managers page
// //         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy sucks.",
//       "tradingScale": 8, // 1 - 10
//       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
// //     {
// //       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
// //       "name": "Your Name",
// //       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
// //       "location": "Brooklyn", // (optional)
// //       "bio": "Lorem ipsum...",
// //       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
// //       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
// //       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
// //       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
// //       "rival": {
// //         name: "Rival", // Can be anything (usually your rival's name)
// //         link: 6, // manager array number within this array, or null to link back to all managers page
// //         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
// //       },
// //       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
// //       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
// //       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
// //       "philosophy": "Your fantasy team's philosophy",
// //       "tradingScale": 10, // 1 - 10
// //       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
// //     },
//   ]
  
  
//   /*   !!  !!  IMPORTANT  !!  !! */
//   /*
//   Below is the most up to-date version of a manager. Please leave this commented out
//   and don't delete it. This will be updated if any fields are added, removed or changed
//   and will allow updates without causing merge conflicts
//   */
  
//     // {
//     //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy", // (optional)
//     //   "tradingScale": 10, // 1 - 10 (optional)
//     //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },
    
