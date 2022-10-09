/**
 * // SUMMER
// Historical: Athens
// Relaxing: Bahamas
// Adventure: Egypt

// WINTER
// Historical: Edinburgh
// Relaxing: Alaska
// Adventure: Aspen
 */
function vacation() {
  let season = prompt('When do you like to eat your cake? Summer or Winter?');

  if (season == null || season == '') {
    alert('Do you not want cake anymore?');
  } else {
    season = season.toLowerCase();
    if (season === 'summer') {
      // ANOTHER PROMPT HERE ASKING FOR VIBE
      let vibe = prompt('Vibe? Historical, Relaxing, or Adventure.');
      if (vibe == null || vibe == '') {
        alert('Sorry to hear your PTO was cancelled!');
      } else {
        vibe = vibe.toLowerCase();
      };

      if (vibe === 'historical') {
        alert('You\'d love Athens!');
      } else if (vibe === 'relaxing') {
        alert('You\'d love the Bahamas!');
      } else if (vibe === 'adventure') {
        alert('You\'d love Egypt!');
      }
    } else if (season === 'winter') {
      // PROMPT FOR VIBES
      let vibe = prompt('Vibe? Historical, Relaxing, or Adventure.');
      if (vibe == null || vibe == '') {
        alert('Sorry to hear your PTO was cancelled!');
      } else {
        vibe = vibe.toLowerCase();
      };
      if (vibe === 'historical') {
        alert('You\'d love Edinburgh!');
      } else if (vibe === 'relaxing') {
        alert('You\'d love Alaska!');
      } else if (vibe === 'adventure') {
        alert('You\'d love Aspen!');
      }
    }
  }
}

vacation();
