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

export const updatePin = async (
  pin,
  newLevel,
  comment,
  bonus = 0,
  setAllTabs,
  setSubmission
) => {
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
        updateApp(setAllTabs, setSubmission);
      });
  } catch (error) {
    console.error("Error fetching data:");
    console.error(error);
  }
};

export const updateApp = (
  setAllTabs,
  setSubmission,
  setPrevComments,
  setPing,
) => {
  //TODO: add prevcomment
  try {
    if (setPing != null) {
      getJson("ping")
      .then((response) => {
        setPing(response);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    if (setPrevComments != null) {
      getJson("prevcomments")
      .then((response) => {
        setPrevComments(response);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    getJson("getalltabs")
      .then((response) => {
        setAllTabs(response);
      })
      .catch((err) => {
        console.log(err);
      });
    getJson("getsubmission")
      .then((response) => {
        setSubmission(response);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export const handlePhotoClick = (
  e,
  setInfoToAdd,
  setShowAdd,
  setShowCommentAdd,
  activeMarkIcon
) => {
  // const rect = imageRef.current.getBoundingClientRect();
  const rect = e.target.getBoundingClientRect();

  const absoluteX = e.clientX;
  const absoluteY = e.clientY; //These are the coordinates of the click in px, based at the top of the page

  const relativeX = absoluteX - rect.left;
  const relativeY = absoluteY - rect.top;

  // const relativeX = absoluteX / parseInt((window.innerWidth / 10) * 6);
  // const relativeY = absoluteY / parseInt((window.innerWidth / 10) * 8);

  const pageId = e.target.id; // Starting from 1, the index of the page

  setInfoToAdd((prevState) => ({
    ...prevState,
    posx: relativeX,
    posy: relativeY,
    pageno: pageId,
  }));
  console.log("Active = " + activeMarkIcon);
  if (activeMarkIcon == 2) {
    setShowAdd(true);
  } else {
    setShowCommentAdd(true);
  }

  return "hola";
};

export const newPin = async (
  infoToAdd,
  levelSelectedId,
  bonus = 0,
  comment = "",
  setAllTabs,
  setSubmission
) => {
  try {
    axios
      .get(
        emarking +
          "?ids=" +
          ids +
          "&action=addmark&level=" +
          levelSelectedId +
          "&posx=" +
          infoToAdd.posx +
          "&posy=" +
          infoToAdd.posy +
          "&pageno=" +
          infoToAdd.pageno +
          "&bonus=" +
          bonus +
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
        updateApp(setAllTabs, setSubmission);
      });
  } catch (error) {
    console.error("Error fetching data:");
    console.error(error);
  }
};

export const newComment = async (
  infoToAdd,
  format,
  comment = "",
  setAllTabs,
  setSubmission,
  colour = "0",
  criterionid = "0"
) => {
  // var color = "0"; //TODO: En rúbricas multicolor, color se asigna al color de la rúbrica
  // var criterionid = "0"; //TODO: En rúbricas multicolor, criterionid se asigna al color de la rúbrica
  try {
    console.log(infoToAdd);
    axios
      .get(
        emarking +
          "?ids=" +
          ids +
          "&action=addcomment" +
          "&comment=" +
          comment +
          "&posx=" +
          infoToAdd.posx +
          "&posy=" +
          infoToAdd.posy +
          "&width=" +
          parseInt((window.innerWidth / 10) * 6) +
          "&height=" +
          parseInt((window.innerWidth / 10) * 8) + //TODO: For some reason, emarkingsJava gives the same value, check it!
          "&format=" +
          format +
          "&pageno=" +
          infoToAdd.pageno +
          "&criterionid=" +
          criterionid +
          "&colour=" +
          colour +
          "&windowswidth=" + //Width an heigth OF THE IMG TAG
          parseInt((window.innerWidth / 10) * 6) + //60 vw
          "&windowsheight=" +
          parseInt((window.innerWidth / 10) * 8) //80 VW (WIDTH)
        // "&level=" +
        // levelSelectedId
      )
      .then((response) => {
        updateApp(setAllTabs, setSubmission);
      });
  } catch (error) {
    console.error("Error fetching data:");
    console.error(error);
  }
};

export const newRecorrection = async (
  infoToAdd,
  comment = "",
  motive,
  level,
  setAllTabs,
  setSubmission
) => {
  try {
    console.log(infoToAdd);
    axios
      .get(
        emarking +
          "?ids=" +
          ids +
          "&action=addregrade" +
          "&comment=" +
          comment +
          "&motive=" +
          motive +
          "&level=" +
          level
      )
      .then((response) => {
        updateApp(setAllTabs, setSubmission);
      });
  } catch (error) {
    console.error("Error fetching data:");
    console.error(error);
  }
};
