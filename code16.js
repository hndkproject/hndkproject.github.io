gdjs.InfoCode = {};
gdjs.InfoCode.GDbackgroundObjects1= [];
gdjs.InfoCode.GDbackgroundObjects2= [];
gdjs.InfoCode.GDPausedObjects1= [];
gdjs.InfoCode.GDPausedObjects2= [];
gdjs.InfoCode.GDhelpObjects1= [];
gdjs.InfoCode.GDhelpObjects2= [];
gdjs.InfoCode.GDpapan3Objects1= [];
gdjs.InfoCode.GDpapan3Objects2= [];
gdjs.InfoCode.GDpapan2Objects1= [];
gdjs.InfoCode.GDpapan2Objects2= [];
gdjs.InfoCode.GDbantuan2Objects1= [];
gdjs.InfoCode.GDbantuan2Objects2= [];
gdjs.InfoCode.GDbanner2Objects1= [];
gdjs.InfoCode.GDbanner2Objects2= [];
gdjs.InfoCode.GDLOGOObjects1= [];
gdjs.InfoCode.GDLOGOObjects2= [];
gdjs.InfoCode.GDNewTextObjects1= [];
gdjs.InfoCode.GDNewTextObjects2= [];
gdjs.InfoCode.GDbackObjects1= [];
gdjs.InfoCode.GDbackObjects2= [];
gdjs.InfoCode.GDNewText2Objects1= [];
gdjs.InfoCode.GDNewText2Objects2= [];


gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.InfoCode.GDNewText2Objects1});
gdjs.InfoCode.eventsList0 = function(runtimeScene) {

};gdjs.InfoCode.eventsList1 = function(runtimeScene) {

};gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.InfoCode.GDpapan2Objects1});
gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.InfoCode.GDNewText2Objects1});
gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.InfoCode.GDpapan2Objects1});
gdjs.InfoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.InfoCode.GDNewText2Objects1);
/* Reuse gdjs.InfoCode.GDpapan2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDNewText2Objects1Objects, gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InfoCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.InfoCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.InfoCode.GDNewText2Objects1[i].setColor("0;0;0");
}
}}

}


};gdjs.InfoCode.eventsList3 = function(runtimeScene) {

};gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.InfoCode.GDpapan2Objects1});
gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.InfoCode.GDNewText2Objects1});
gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.InfoCode.GDpapan2Objects1});
gdjs.InfoCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.InfoCode.GDNewText2Objects1);
/* Reuse gdjs.InfoCode.GDpapan2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDNewText2Objects1Objects, gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InfoCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.InfoCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.InfoCode.GDNewText2Objects1[i].setColor("126;211;33");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.InfoCode.eventsList5 = function(runtimeScene) {

};gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.InfoCode.GDpapan2Objects1});
gdjs.InfoCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.InfoCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InfoCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.InfoCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.InfoCode.GDpapan2Objects1[i].setColor("74;144;226");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.InfoCode.GDpapan2Objects1});
gdjs.InfoCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.InfoCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{



}


{


gdjs.InfoCode.eventsList0(runtimeScene);
}


{


gdjs.InfoCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.InfoCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.InfoCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.InfoCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.InfoCode.GDpapan2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.InfoCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.InfoCode.GDpapan2Objects1[i].enableEffect("Effect", false);
}
}
{ //Subevents
gdjs.InfoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.InfoCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.InfoCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12398852);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.InfoCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.InfoCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.InfoCode.GDpapan2Objects1[i].enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.InfoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.InfoCode.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12401052);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.InfoCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.InfoCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InfoCode.mapOfGDgdjs_9546InfoCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.InfoCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.InfoCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.InfoCode.GDpapan2Objects1[i].setColor("255;255;255");
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


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


};

gdjs.InfoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InfoCode.GDbackgroundObjects1.length = 0;
gdjs.InfoCode.GDbackgroundObjects2.length = 0;
gdjs.InfoCode.GDPausedObjects1.length = 0;
gdjs.InfoCode.GDPausedObjects2.length = 0;
gdjs.InfoCode.GDhelpObjects1.length = 0;
gdjs.InfoCode.GDhelpObjects2.length = 0;
gdjs.InfoCode.GDpapan3Objects1.length = 0;
gdjs.InfoCode.GDpapan3Objects2.length = 0;
gdjs.InfoCode.GDpapan2Objects1.length = 0;
gdjs.InfoCode.GDpapan2Objects2.length = 0;
gdjs.InfoCode.GDbantuan2Objects1.length = 0;
gdjs.InfoCode.GDbantuan2Objects2.length = 0;
gdjs.InfoCode.GDbanner2Objects1.length = 0;
gdjs.InfoCode.GDbanner2Objects2.length = 0;
gdjs.InfoCode.GDLOGOObjects1.length = 0;
gdjs.InfoCode.GDLOGOObjects2.length = 0;
gdjs.InfoCode.GDNewTextObjects1.length = 0;
gdjs.InfoCode.GDNewTextObjects2.length = 0;
gdjs.InfoCode.GDbackObjects1.length = 0;
gdjs.InfoCode.GDbackObjects2.length = 0;
gdjs.InfoCode.GDNewText2Objects1.length = 0;
gdjs.InfoCode.GDNewText2Objects2.length = 0;

gdjs.InfoCode.eventsList7(runtimeScene);

return;

}

gdjs['InfoCode'] = gdjs.InfoCode;
