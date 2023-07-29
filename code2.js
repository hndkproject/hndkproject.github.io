gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDbackgroundObjects1= [];
gdjs.Main_32MenuCode.GDbackgroundObjects2= [];
gdjs.Main_32MenuCode.GDPausedObjects1= [];
gdjs.Main_32MenuCode.GDPausedObjects2= [];
gdjs.Main_32MenuCode.GDhelpObjects1= [];
gdjs.Main_32MenuCode.GDhelpObjects2= [];
gdjs.Main_32MenuCode.GDpapan3Objects1= [];
gdjs.Main_32MenuCode.GDpapan3Objects2= [];
gdjs.Main_32MenuCode.GDpapan2Objects1= [];
gdjs.Main_32MenuCode.GDpapan2Objects2= [];
gdjs.Main_32MenuCode.GDbantuan2Objects1= [];
gdjs.Main_32MenuCode.GDbantuan2Objects2= [];
gdjs.Main_32MenuCode.GDbanner2Objects1= [];
gdjs.Main_32MenuCode.GDbanner2Objects2= [];
gdjs.Main_32MenuCode.GDLOGOObjects1= [];
gdjs.Main_32MenuCode.GDLOGOObjects2= [];
gdjs.Main_32MenuCode.GDPAPANPLAYObjects1= [];
gdjs.Main_32MenuCode.GDPAPANPLAYObjects2= [];
gdjs.Main_32MenuCode.GDPAPANBACKObjects1= [];
gdjs.Main_32MenuCode.GDPAPANBACKObjects2= [];
gdjs.Main_32MenuCode.GDbannerObjects1= [];
gdjs.Main_32MenuCode.GDbannerObjects2= [];
gdjs.Main_32MenuCode.GDplayObjects1= [];
gdjs.Main_32MenuCode.GDplayObjects2= [];
gdjs.Main_32MenuCode.GDInfoObjects1= [];
gdjs.Main_32MenuCode.GDInfoObjects2= [];
gdjs.Main_32MenuCode.GDBACKObjects1= [];
gdjs.Main_32MenuCode.GDBACKObjects2= [];
gdjs.Main_32MenuCode.GDCreditsObjects1= [];
gdjs.Main_32MenuCode.GDCreditsObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"PAPANPLAY": gdjs.Main_32MenuCode.GDPAPANPLAYObjects1, "PAPANBACK": gdjs.Main_32MenuCode.GDPAPANBACKObjects1, "papan2": gdjs.Main_32MenuCode.GDpapan2Objects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDplayObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDbannerObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDInfoObjects1Objects = Hashtable.newFrom({"play": gdjs.Main_32MenuCode.GDplayObjects1, "BACK": gdjs.Main_32MenuCode.GDBACKObjects1, "banner": gdjs.Main_32MenuCode.GDbannerObjects1, "Info": gdjs.Main_32MenuCode.GDInfoObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"PAPANPLAY": gdjs.Main_32MenuCode.GDPAPANPLAYObjects1, "PAPANBACK": gdjs.Main_32MenuCode.GDPAPANBACKObjects1, "papan2": gdjs.Main_32MenuCode.GDpapan2Objects1});
gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.Main_32MenuCode.GDBACKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.Main_32MenuCode.GDInfoObjects1);
/* Reuse gdjs.Main_32MenuCode.GDPAPANBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDPAPANPLAYObjects1 */
gdjs.copyArray(runtimeScene.getObjects("banner"), gdjs.Main_32MenuCode.GDbannerObjects1);
/* Reuse gdjs.Main_32MenuCode.GDpapan2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDplayObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDbannerObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDInfoObjects1Objects, gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDInfoObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDbannerObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBACKObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDbannerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbannerObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDInfoObjects1[i].setColor("0;0;0");
}
}}

}


};gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"PAPANPLAY": gdjs.Main_32MenuCode.GDPAPANPLAYObjects1, "PAPANBACK": gdjs.Main_32MenuCode.GDPAPANBACKObjects1, "papan2": gdjs.Main_32MenuCode.GDpapan2Objects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDplayObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDbannerObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDInfoObjects1Objects = Hashtable.newFrom({"play": gdjs.Main_32MenuCode.GDplayObjects1, "BACK": gdjs.Main_32MenuCode.GDBACKObjects1, "banner": gdjs.Main_32MenuCode.GDbannerObjects1, "Info": gdjs.Main_32MenuCode.GDInfoObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"PAPANPLAY": gdjs.Main_32MenuCode.GDPAPANPLAYObjects1, "PAPANBACK": gdjs.Main_32MenuCode.GDPAPANBACKObjects1, "papan2": gdjs.Main_32MenuCode.GDpapan2Objects1});
gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.Main_32MenuCode.GDBACKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.Main_32MenuCode.GDInfoObjects1);
/* Reuse gdjs.Main_32MenuCode.GDPAPANBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDPAPANPLAYObjects1 */
gdjs.copyArray(runtimeScene.getObjects("banner"), gdjs.Main_32MenuCode.GDbannerObjects1);
/* Reuse gdjs.Main_32MenuCode.GDpapan2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDplayObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDbannerObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDInfoObjects1Objects, gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDInfoObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDbannerObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].setColor("80;227;194");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBACKObjects1[i].setColor("80;227;194");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDbannerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbannerObjects1[i].setColor("80;227;194");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDInfoObjects1[i].setColor("80;227;194");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"PAPANPLAY": gdjs.Main_32MenuCode.GDPAPANPLAYObjects1, "PAPANBACK": gdjs.Main_32MenuCode.GDPAPANBACKObjects1, "papan2": gdjs.Main_32MenuCode.GDpapan2Objects1});
gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PAPANBACK"), gdjs.Main_32MenuCode.GDPAPANBACKObjects1);
gdjs.copyArray(runtimeScene.getObjects("PAPANPLAY"), gdjs.Main_32MenuCode.GDPAPANPLAYObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.Main_32MenuCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPAPANBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDPAPANPLAYObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANPLAYObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANPLAYObjects1[i].setColor("144;19;254");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANBACKObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANBACKObjects1[i].setColor("144;19;254");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDpapan2Objects1[i].setColor("144;19;254");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"PAPANPLAY": gdjs.Main_32MenuCode.GDPAPANPLAYObjects1, "PAPANBACK": gdjs.Main_32MenuCode.GDPAPANBACKObjects1, "papan2": gdjs.Main_32MenuCode.GDpapan2Objects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1Objects = Hashtable.newFrom({"PAPANPLAY": gdjs.Main_32MenuCode.GDPAPANPLAYObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1Objects = Hashtable.newFrom({"PAPANBACK": gdjs.Main_32MenuCode.GDPAPANBACKObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.Main_32MenuCode.GDpapan2Objects1});
gdjs.Main_32MenuCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("banner"), gdjs.Main_32MenuCode.GDbannerObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbannerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbannerObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeAway", 0, "easeInQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDbannerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbannerObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12070068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "mixkit-kidding-around-9.mp3", 2, true, 100, 1);
}}

}


{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


{



}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PAPANBACK"), gdjs.Main_32MenuCode.GDPAPANBACKObjects1);
gdjs.copyArray(runtimeScene.getObjects("PAPANPLAY"), gdjs.Main_32MenuCode.GDPAPANPLAYObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.Main_32MenuCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPAPANBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDPAPANPLAYObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANPLAYObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANPLAYObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANBACKObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANBACKObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDpapan2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANPLAYObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANPLAYObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANBACKObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANBACKObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDpapan2Objects1[i].enableEffect("Effect", false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PAPANBACK"), gdjs.Main_32MenuCode.GDPAPANBACKObjects1);
gdjs.copyArray(runtimeScene.getObjects("PAPANPLAY"), gdjs.Main_32MenuCode.GDPAPANPLAYObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.Main_32MenuCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12477156);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPAPANBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDPAPANPLAYObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANPLAYObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANPLAYObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANBACKObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANBACKObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDpapan2Objects1[i].enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12479068);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PAPANBACK"), gdjs.Main_32MenuCode.GDPAPANBACKObjects1);
gdjs.copyArray(runtimeScene.getObjects("PAPANPLAY"), gdjs.Main_32MenuCode.GDPAPANPLAYObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.Main_32MenuCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1ObjectsGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPAPANBACKObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDPAPANPLAYObjects1 */
/* Reuse gdjs.Main_32MenuCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANPLAYObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANPLAYObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDPAPANBACKObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPAPANBACKObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDpapan2Objects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PAPANPLAY"), gdjs.Main_32MenuCode.GDPAPANPLAYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANPLAYObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level Menu!", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PAPANBACK"), gdjs.Main_32MenuCode.GDPAPANBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPAPANBACKObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.Main_32MenuCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Info", false);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDbackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDbackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDPausedObjects1.length = 0;
gdjs.Main_32MenuCode.GDPausedObjects2.length = 0;
gdjs.Main_32MenuCode.GDhelpObjects1.length = 0;
gdjs.Main_32MenuCode.GDhelpObjects2.length = 0;
gdjs.Main_32MenuCode.GDpapan3Objects1.length = 0;
gdjs.Main_32MenuCode.GDpapan3Objects2.length = 0;
gdjs.Main_32MenuCode.GDpapan2Objects1.length = 0;
gdjs.Main_32MenuCode.GDpapan2Objects2.length = 0;
gdjs.Main_32MenuCode.GDbantuan2Objects1.length = 0;
gdjs.Main_32MenuCode.GDbantuan2Objects2.length = 0;
gdjs.Main_32MenuCode.GDbanner2Objects1.length = 0;
gdjs.Main_32MenuCode.GDbanner2Objects2.length = 0;
gdjs.Main_32MenuCode.GDLOGOObjects1.length = 0;
gdjs.Main_32MenuCode.GDLOGOObjects2.length = 0;
gdjs.Main_32MenuCode.GDPAPANPLAYObjects1.length = 0;
gdjs.Main_32MenuCode.GDPAPANPLAYObjects2.length = 0;
gdjs.Main_32MenuCode.GDPAPANBACKObjects1.length = 0;
gdjs.Main_32MenuCode.GDPAPANBACKObjects2.length = 0;
gdjs.Main_32MenuCode.GDbannerObjects1.length = 0;
gdjs.Main_32MenuCode.GDbannerObjects2.length = 0;
gdjs.Main_32MenuCode.GDplayObjects1.length = 0;
gdjs.Main_32MenuCode.GDplayObjects2.length = 0;
gdjs.Main_32MenuCode.GDInfoObjects1.length = 0;
gdjs.Main_32MenuCode.GDInfoObjects2.length = 0;
gdjs.Main_32MenuCode.GDBACKObjects1.length = 0;
gdjs.Main_32MenuCode.GDBACKObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList9(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
