// comb

const combination = {};

combination.build = (combObjArray, soundMap) => {

  //console.log(Object.keys(soundMap)[1]);
  //console.log(Object.values(soundMap)[1]);

  for (let combObj of combObjArray) {
    let type = combObj.type;
    let name = combObj.name;
    let tracks = combObj.tracks;

    for (let track of tracks) {
      //console.log(track);
      let maxLength = track.maxLength;
      let offset = 0;

      if (track.hasOwnProperty('offset')) {
        offset = track.offset;
      }

      let volume = track.volume;
      let components = track.components;

      for (let component of components) {
        let repeat = component.repeat;
        let name = component.name;

        // find name in map
        try {
          let fileExt = '.wav';
          let fileName = soundMap[name] + fileExt;
          let filePath = '../static/sounds/' + fileName;
          console.log(filePath);
        }
        catch (err) {
          console.log(err.message);
        }

        //console.log(component);
      }
    }
    //console.log(combObj);

  }

}

export default combination;