import axios from "axios";

// const emarking = "http://localhost/mod/emarking/ajax/debug/a2.php";
const emarking = "http://localhost/mod/emarking/ajax/a.php";
// const ids = 203;
const urlParams = new URLSearchParams(window.location.search);
const ids = urlParams.get("id");

export const getJson = async (
  action,
  turn,
  setSubmission,
  setAllTabs,
  loading = null
) => {
  try {
    const response = await axios.get(
      emarking + "?ids=" + ids + "&action=" + action
    );

    if (turn === 0) {
      setSubmission(response);
    }

    if (turn === 1) {
      setAllTabs(response);
    }
  } catch (error) {
    console.error("Error fetching data:");
    console.error(error);
  } finally {
    if (loading){
        loading[turn] = false;
    }
  }
};
