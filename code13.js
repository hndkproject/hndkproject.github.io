gdjs.PausedCode = {};
gdjs.PausedCode.GDbackgroundObjects1= [];
gdjs.PausedCode.GDbackgroundObjects2= [];
gdjs.PausedCode.GDPausedObjects1= [];
gdjs.PausedCode.GDPausedObjects2= [];
gdjs.PausedCode.GDhelpObjects1= [];
gdjs.PausedCode.GDhelpObjects2= [];
gdjs.PausedCode.GDpapan3Objects1= [];
gdjs.PausedCode.GDpapan3Objects2= [];
gdjs.PausedCode.GDpapan2Objects1= [];
gdjs.PausedCode.GDpapan2Objects2= [];
gdjs.PausedCode.GDbantuan2Objects1= [];
gdjs.PausedCode.GDbantuan2Objects2= [];
gdjs.PausedCode.GDbanner2Objects1= [];
gdjs.PausedCode.GDbanner2Objects2= [];
gdjs.PausedCode.GDLOGOObjects1= [];
gdjs.PausedCode.GDLOGOObjects2= [];
gdjs.PausedCode.GDLEVEL1Objects1= [];
gdjs.PausedCode.GDLEVEL1Objects2= [];
gdjs.PausedCode.GDBEATLEVELObjects1= [];
gdjs.PausedCode.GDBEATLEVELObjects2= [];
gdjs.PausedCode.GDsoalObjects1= [];
gdjs.PausedCode.GDsoalObjects2= [];
gdjs.PausedCode.GDhelpObjects1= [];
gdjs.PausedCode.GDhelpObjects2= [];
gdjs.PausedCode.GDResumeObjects1= [];
gdjs.PausedCode.GDResumeObjects2= [];
gdjs.PausedCode.GDmenuObjects1= [];
gdjs.PausedCode.GDmenuObjects2= [];
gdjs.PausedCode.GDBackObjects1= [];
gdjs.PausedCode.GDBackObjects2= [];
gdjs.PausedCode.GDMenuObjects1= [];
gdjs.PausedCode.GDMenuObjects2= [];


gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDBEATLEVELObjects1Objects = Hashtable.newFrom({"BEATLEVEL": gdjs.PausedCode.GDBEATLEVELObjects1});
gdjs.PausedCode.eventsList0 = function(runtimeScene) {

};gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDhelpObjects1Objects = Hashtable.newFrom({"help": gdjs.PausedCode.GDhelpObjects1});
gdjs.PausedCode.eventsList1 = function(runtimeScene) {

};gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.PausedCode.GDMenuObjects1});
gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.PausedCode.GDpapan2Objects1});
gdjs.PausedCode.eventsList2 = function(runtimeScene) {

};gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"Menu": gdjs.PausedCode.GDMenuObjects1, "papan2": gdjs.PausedCode.GDpapan2Objects1});
gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDmenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDResumeObjects1Objects = Hashtable.newFrom({"menu": gdjs.PausedCode.GDmenuObjects1, "Resume": gdjs.PausedCode.GDResumeObjects1});
gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"Menu": gdjs.PausedCode.GDMenuObjects1, "papan2": gdjs.PausedCode.GDpapan2Objects1});
gdjs.PausedCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.PausedCode.GDMenuObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.PausedCode.GDResumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.PausedCode.GDmenuObjects1);
/* Reuse gdjs.PausedCode.GDpapan2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDmenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDResumeObjects1Objects, gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PausedCode.GDResumeObjects1 */
/* Reuse gdjs.PausedCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.PausedCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDmenuObjects1[i].setColor("0;0;0");
}
for(var i = 0, len = gdjs.PausedCode.GDResumeObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDResumeObjects1[i].setColor("0;0;0");
}
}}

}


};gdjs.PausedCode.eventsList4 = function(runtimeScene) {

};gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"Menu": gdjs.PausedCode.GDMenuObjects1, "papan2": gdjs.PausedCode.GDpapan2Objects1});
gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDmenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDResumeObjects1Objects = Hashtable.newFrom({"menu": gdjs.PausedCode.GDmenuObjects1, "Resume": gdjs.PausedCode.GDResumeObjects1});
gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"Menu": gdjs.PausedCode.GDMenuObjects1, "papan2": gdjs.PausedCode.GDpapan2Objects1});
gdjs.PausedCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.PausedCode.GDMenuObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Resume"), gdjs.PausedCode.GDResumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.PausedCode.GDmenuObjects1);
/* Reuse gdjs.PausedCode.GDpapan2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDmenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDResumeObjects1Objects, gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PausedCode.GDResumeObjects1 */
/* Reuse gdjs.PausedCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.PausedCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDmenuObjects1[i].setColor("74;144;226");
}
for(var i = 0, len = gdjs.PausedCode.GDResumeObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDResumeObjects1[i].setColor("74;144;226");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.PausedCode.eventsList6 = function(runtimeScene) {

};gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"Menu": gdjs.PausedCode.GDMenuObjects1, "papan2": gdjs.PausedCode.GDpapan2Objects1});
gdjs.PausedCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.PausedCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.PausedCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PausedCode.GDMenuObjects1 */
/* Reuse gdjs.PausedCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.PausedCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDMenuObjects1[i].setColor("80;227;194");
}
for(var i = 0, len = gdjs.PausedCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.PausedCode.GDpapan2Objects1[i].setColor("80;227;194");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"Menu": gdjs.PausedCode.GDMenuObjects1, "papan2": gdjs.PausedCode.GDpapan2Objects1});
gdjs.PausedCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BEATLEVEL"), gdjs.PausedCode.GDBEATLEVELObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDBEATLEVELObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Level1"), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level Menu!", false);
}}

}


{


gdjs.PausedCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("help"), gdjs.PausedCode.GDhelpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDhelpObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


{


gdjs.PausedCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.PausedCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level Menu!", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.PausedCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{



}


{


gdjs.PausedCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.PausedCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.PausedCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.PausedCode.GDMenuObjects1 */
/* Reuse gdjs.PausedCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.PausedCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDMenuObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.PausedCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.PausedCode.GDpapan2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PausedCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDMenuObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.PausedCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.PausedCode.GDpapan2Objects1[i].enableEffect("Effect", false);
}
}
{ //Subevents
gdjs.PausedCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.PausedCode.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.PausedCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.PausedCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12483100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PausedCode.GDMenuObjects1 */
/* Reuse gdjs.PausedCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.PausedCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDMenuObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.PausedCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.PausedCode.GDpapan2Objects1[i].enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.PausedCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.PausedCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12485452);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}
{ //Subevents
gdjs.PausedCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.PausedCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.PausedCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PausedCode.mapOfGDgdjs_9546PausedCode_9546GDMenuObjects1ObjectsGDgdjs_9546PausedCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.PausedCode.GDMenuObjects1 */
/* Reuse gdjs.PausedCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.PausedCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.PausedCode.GDMenuObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.PausedCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.PausedCode.GDpapan2Objects1[i].setColor("255;255;255");
}
}}

}


};

gdjs.PausedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PausedCode.GDbackgroundObjects1.length = 0;
gdjs.PausedCode.GDbackgroundObjects2.length = 0;
gdjs.PausedCode.GDPausedObjects1.length = 0;
gdjs.PausedCode.GDPausedObjects2.length = 0;
gdjs.PausedCode.GDhelpObjects1.length = 0;
gdjs.PausedCode.GDhelpObjects2.length = 0;
gdjs.PausedCode.GDpapan3Objects1.length = 0;
gdjs.PausedCode.GDpapan3Objects2.length = 0;
gdjs.PausedCode.GDpapan2Objects1.length = 0;
gdjs.PausedCode.GDpapan2Objects2.length = 0;
gdjs.PausedCode.GDbantuan2Objects1.length = 0;
gdjs.PausedCode.GDbantuan2Objects2.length = 0;
gdjs.PausedCode.GDbanner2Objects1.length = 0;
gdjs.PausedCode.GDbanner2Objects2.length = 0;
gdjs.PausedCode.GDLOGOObjects1.length = 0;
gdjs.PausedCode.GDLOGOObjects2.length = 0;
gdjs.PausedCode.GDLEVEL1Objects1.length = 0;
gdjs.PausedCode.GDLEVEL1Objects2.length = 0;
gdjs.PausedCode.GDBEATLEVELObjects1.length = 0;
gdjs.PausedCode.GDBEATLEVELObjects2.length = 0;
gdjs.PausedCode.GDsoalObjects1.length = 0;
gdjs.PausedCode.GDsoalObjects2.length = 0;
gdjs.PausedCode.GDhelpObjects1.length = 0;
gdjs.PausedCode.GDhelpObjects2.length = 0;
gdjs.PausedCode.GDResumeObjects1.length = 0;
gdjs.PausedCode.GDResumeObjects2.length = 0;
gdjs.PausedCode.GDmenuObjects1.length = 0;
gdjs.PausedCode.GDmenuObjects2.length = 0;
gdjs.PausedCode.GDBackObjects1.length = 0;
gdjs.PausedCode.GDBackObjects2.length = 0;
gdjs.PausedCode.GDMenuObjects1.length = 0;
gdjs.PausedCode.GDMenuObjects2.length = 0;

gdjs.PausedCode.eventsList8(runtimeScene);

return;

}

gdjs['PausedCode'] = gdjs.PausedCode;
