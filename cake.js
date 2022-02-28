function vacation() {
  let season = prompt("Would you like to go on vacation in the Summer or Winter?","summer");
  
  if (season == null || season == "") {
    alert("User cancelled the prompt.");
  } 
  else {
    season = season.toLowerCase();
      if (season === 'summer') {
        //ANOTHER PROMPT HERE ASKING FOR VIBE
        let vibe = prompt("What kind of vibe are you looking for? Pick Historical, Relaxing, or Adventure.", " ");
        vibe = vibe.toLowerCase();
        if (vibe === 'historical') {
          alert('You\'d love Athens!')
        } else if (vibe === 'relaxing') {
          alert('You\'d love the Bahamas!')
        } else if (vibe === 'adventure') {
          alert('You\'d love Egypt!')
        }
      } 
      else if (season === 'winter') {
        //PROMPT FOR VIBES
        let vibe = prompt("what kind of vibe are you looking for? Pick Historical, Relaxing, or Adventure.", " ");
        vibe = vibe.toLowerCase();
        if (vibe === 'historical') {
          alert('You\'d love Edinburgh!')
        } else if (vibe === 'relaxing') {
          alert('You\'d love Alaska!')
        } else if (vibe === 'adventure') {
          alert('You\'d love Aspen!')
        }
        }
}
  
  
  }
 
vacation();
