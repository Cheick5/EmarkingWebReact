import axios from "axios";

// const emarking = "http://localhost/mod/emarking/ajax/debug/a2.php";
const emarking = "http://localhost/mod/emarking/ajax/a.php";
// const ids = 203;
const urlParams = new URLSearchParams(window.location.search);
const ids = urlParams.get("id");


export const getJson = async (action) => {
  try {
    
    const response = await axios.get(
      emarking + "?ids=" + ids + "&action=" + action
    );
    // return response;
   return response;

  } catch (error) {
    console.error("Error fetching data:");
    console.error(error);
  }
  };

  export const updatePin = async (pin,newLevel,comment,bonus = 0,setAllTabs,setSubmission) => {
    try {
      axios
        .get(
          emarking +
            "?ids=" +
            ids +
            "&action=updcomment&cid=" +
            pin.id +
            "&posx=" +
            pin.posx * parseInt((window.innerWidth / 10) * 6) +
            "&posy=" +
            pin.posy * parseInt((window.innerWidth / 10) * 8) +
            "&bonus=" +
            bonus +
            "&format=" +
            pin.format +
            "&levelid=" +
            newLevel +
            "&regradeid=" +
            pin.regradeid +
            "&regradeaccepted=" +
            pin.regradeaccepted +
            "&regrademarkercomment=" +
            pin.regrademarkercomment +
            "&markerid=" +
            pin.markerid + //This should be your id!!!
            "&width=" +
            pin.width +
            "&height=" +
            pin.height +
            "&comment=" +
            comment +
            "&windowswidth=" + //Width an heigth OF THE IMG TAG
            parseInt((window.innerWidth / 10) * 6) + //60 vw
            "&windowsheight=" +
            parseInt((window.innerWidth / 10) * 8) + //80 VW (WIDTH)
            "&feedback=" +
            ""
        )
        .then((response) => {
          updateApp(setAllTabs,setSubmission);

        });
    } catch (error) {
      console.error("Error fetching data:");
      console.error(error);
    }
    };

  export const updateApp = (setAllTabs,setSubmission) => {
    try {
      // console.log('Updating app');
      // setSubmission(getJson("getsubmission"));
      // setAllTabs(getJson("getalltabs"));
      getJson("getalltabs").then((response) => {
        setAllTabs(response);
      }).catch((err) => {
        console.log(err)
      });
      getJson("getsubmission").then((response) => {
        setSubmission(response);
      }
      ).catch((err) => {
        console.log(err)
      });

    } catch (error) {
      console.log(error);
    }  
  }


