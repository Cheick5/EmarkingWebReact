<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 *
 * @package mod
 * @subpackage emarking
 * @copyright 2012-2015 Jorge Villalón {@link http://www.uai.cl}
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.php');
require_once($CFG->dirroot . '/mod/emarking/locallib.php');
require_once($CFG->dirroot . '/mod/emarking/marking/locallib.php');
global $CFG, $DB, $OUTPUT, $PAGE, $USER;
// Required and optional params for ajax interaction in emarking.
$draftid = required_param('id', PARAM_INT);
// A valid submission is required.
if (! $draft = $DB->get_record('emarking_draft', array(
    'id' => $draftid))) {
    throw new moodle_exception('Invalid draft');
}
// A valid submission is required.
if (! $submission = $DB->get_record('emarking_submission', array(
    'id' => $draft->submissionid))) {
    throw new moodle_exception('Invalid submission');
}
if (! $emarking = $DB->get_record("emarking", array(
    "id" => $draft->emarkingid))) {
    throw new moodle_exception('Invalid assignment');
}
// The course to which the assignment belongs.
if (! $course = $DB->get_record("course", array(
    "id" => $emarking->course))) {
    throw new moodle_exception('Invalid course');
}
// The marking process course module.
if (! $cm = get_coursemodule_from_instance("emarking", $emarking->id, $course->id)) {
    throw new moodle_exception('Invalid emarking course module');
}
// Now require login so full security is checked.
require_login($course->id, false, $cm);
$url = new moodle_url('/mod/emarking/marking/index.php', array(
    'id' => $draftid));
// Create the context within the course module.
$context = context_module::instance($cm->id);

// if the user is a student then he can only see his own emarkings
// this is implemented the following way:
// if the user cannot grade, and its not its own emarking
// the emarking is hidden
list ($issupervisor, $usercangrade) = emarking_get_grading_permissions($emarking, $context);

if($usercangrade == false && $submission->student != $USER->id){
    echo get_string("emptypermissions", "mod_emarking");
    return false;
}

// Event indicating that a user opened an exam.
$item = array(
    'context' => $context,
    'objectid' => $cm->id);
// Add to Moodle log so some auditing can be done.
\mod_emarking\event\emarking_viewed::create($item)->trigger();
// Read the module version.
$module = new stdClass();
list($lang, $langshort, $langspecific) = emarking_get_user_lang();
$langhtml = '<meta name="gwt:property" content="locale=' . $lang . '">';
$emarkingdir = $CFG->wwwroot . '/mod/emarking/marking/EmarkingWebReact';
$imagewidth=0;
// echo $emarkingdir;
if($imageinfo = emarking_get_page_image_info($submission, 1)) {
    $imagewidth = $imageinfo['width'];
}
header('Content-Type: text/html; charset=utf-8');

$cssFiles = glob('EmarkingWebReact/dist/assets/*.css');
$jsFiles = glob('EmarkingWebReact/dist/assets/*.js');

?>
<!doctype html>
<!-- The DOCTYPE declaration above will set the     -->
<!-- browser's rendering engine into                -->
<!-- "Standards Mode". Replacing this declaration   -->
<!-- with a "Quirks Mode" doctype is not supported. -->
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="shortcut icon" type="image/png"
	href="<?php echo $CFG->wwwroot ?>/mod/emarking/pix/icon.png" />
<?php echo $langhtml?>
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<!-- <link rel="stylesheet" href="EWeb/styles.css"> -->


<!--                                                               -->
<!-- Consider inlining CSS to reduce the number of requested files -->
<!--                                                               -->
<!--                                           -->
<!-- Any title is fine                         -->
<!--                                           -->
<title>Emarking</title>
<!--                                           -->
<!-- This script loads your compiled module.   -->
<!-- If you add any GWT meta tags, they must   -->
<!-- be added before this line.                -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML"></script>
<!-- <script type="text/javascript" src="<?php echo $emarkingdir?>/emarkingweb.nocache.js"></script> -->
<!--                                           -->
<!-- The body can have arbitrary html, or      -->
<!-- you can leave the body empty if you want  -->
<!-- to create a completely dynamic UI.        -->
<!--                                           -->
<body style="padding-top: 0px;">
 <?php include('./EmarkingWebReact/index.html'); ?>
<link rel="stylesheet" crossorigin href="/mod/emarking/marking/<?php echo $cssFiles[0] ?>">
<script type="module" crossorigin src="/mod/emarking/marking/<?php echo $jsFiles[0] ?>"></link>
<script>
  window.onload = function() {
	  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  }
  </script>
	<div id="emarking"
		imagewidth="<?php echo $imagewidth; ?>"
		moodleurl="<?php echo $CFG->wwwroot ?>/mod/emarking/ajax/a.php"></div>
        <div id="root"></div>
</body>
</html>
