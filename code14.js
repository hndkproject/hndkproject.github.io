gdjs.GameOverCode = {};
gdjs.GameOverCode.GDbackgroundObjects1= [];
gdjs.GameOverCode.GDbackgroundObjects2= [];
gdjs.GameOverCode.GDPausedObjects1= [];
gdjs.GameOverCode.GDPausedObjects2= [];
gdjs.GameOverCode.GDhelpObjects1= [];
gdjs.GameOverCode.GDhelpObjects2= [];
gdjs.GameOverCode.GDpapan3Objects1= [];
gdjs.GameOverCode.GDpapan3Objects2= [];
gdjs.GameOverCode.GDpapan2Objects1= [];
gdjs.GameOverCode.GDpapan2Objects2= [];
gdjs.GameOverCode.GDbantuan2Objects1= [];
gdjs.GameOverCode.GDbantuan2Objects2= [];
gdjs.GameOverCode.GDbanner2Objects1= [];
gdjs.GameOverCode.GDbanner2Objects2= [];
gdjs.GameOverCode.GDLOGOObjects1= [];
gdjs.GameOverCode.GDLOGOObjects2= [];
gdjs.GameOverCode.GDLEVEL1Objects1= [];
gdjs.GameOverCode.GDLEVEL1Objects2= [];
gdjs.GameOverCode.GDBEATLEVELObjects1= [];
gdjs.GameOverCode.GDBEATLEVELObjects2= [];
gdjs.GameOverCode.GDsoalObjects1= [];
gdjs.GameOverCode.GDsoalObjects2= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDResumeObjects1= [];
gdjs.GameOverCode.GDResumeObjects2= [];
gdjs.GameOverCode.GDHomeObjects1= [];
gdjs.GameOverCode.GDHomeObjects2= [];
gdjs.GameOverCode.GDBackObjects1= [];
gdjs.GameOverCode.GDBackObjects2= [];
gdjs.GameOverCode.GDMenuObjects1= [];
gdjs.GameOverCode.GDMenuObjects2= [];
gdjs.GameOverCode.GDNewTextObjects1= [];
gdjs.GameOverCode.GDNewTextObjects2= [];


gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBEATLEVELObjects1Objects = Hashtable.newFrom({"BEATLEVEL": gdjs.GameOverCode.GDBEATLEVELObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

};gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDhelpObjects1Objects = Hashtable.newFrom({"help": gdjs.GameOverCode.GDhelpObjects1});
gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

};gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.GameOverCode.GDMenuObjects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.GameOverCode.GDBackObjects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"papan2": gdjs.GameOverCode.GDpapan2Objects1});
gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

};gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

};gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameOverCode.GDGameOverObjects1, "Menu": gdjs.GameOverCode.GDMenuObjects1, "papan2": gdjs.GameOverCode.GDpapan2Objects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.GameOverCode.GDHomeObjects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameOverCode.GDGameOverObjects1, "Menu": gdjs.GameOverCode.GDMenuObjects1, "papan2": gdjs.GameOverCode.GDpapan2Objects1});
gdjs.GameOverCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.GameOverCode.GDGameOverObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameOverCode.GDHomeObjects1);
/* Reuse gdjs.GameOverCode.GDMenuObjects1 */
/* Reuse gdjs.GameOverCode.GDpapan2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDHomeObjects1Objects, gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDHomeObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHomeObjects1[i].setColor("0;0;0");
}
}}

}


};gdjs.GameOverCode.eventsList5 = function(runtimeScene) {

};gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameOverCode.GDGameOverObjects1, "Menu": gdjs.GameOverCode.GDMenuObjects1, "papan2": gdjs.GameOverCode.GDpapan2Objects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.GameOverCode.GDHomeObjects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameOverCode.GDGameOverObjects1, "Menu": gdjs.GameOverCode.GDMenuObjects1, "papan2": gdjs.GameOverCode.GDpapan2Objects1});
gdjs.GameOverCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.GameOverCode.GDGameOverObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameOverCode.GDHomeObjects1);
/* Reuse gdjs.GameOverCode.GDMenuObjects1 */
/* Reuse gdjs.GameOverCode.GDpapan2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDHomeObjects1Objects, gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDHomeObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHomeObjects1[i].setColor("80;227;194");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.GameOverCode.eventsList7 = function(runtimeScene) {

};gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameOverCode.GDGameOverObjects1, "Menu": gdjs.GameOverCode.GDMenuObjects1, "papan2": gdjs.GameOverCode.GDpapan2Objects1});
gdjs.GameOverCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameOverCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GameOverCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.GameOverCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDGameOverObjects1 */
/* Reuse gdjs.GameOverCode.GDMenuObjects1 */
/* Reuse gdjs.GameOverCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOverObjects1[i].setColor("144;19;254");
}
for(var i = 0, len = gdjs.GameOverCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDMenuObjects1[i].setColor("144;19;254");
}
for(var i = 0, len = gdjs.GameOverCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDpapan2Objects1[i].setColor("144;19;254");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects = Hashtable.newFrom({"GameOver": gdjs.GameOverCode.GDGameOverObjects1, "Menu": gdjs.GameOverCode.GDMenuObjects1, "papan2": gdjs.GameOverCode.GDpapan2Objects1});
gdjs.GameOverCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "mixkit-kidding-around-9.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BEATLEVEL"), gdjs.GameOverCode.GDBEATLEVELObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBEATLEVELObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Level1"), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level Menu!", false);
}}

}


{


gdjs.GameOverCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("help"), gdjs.GameOverCode.GDhelpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDhelpObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}}

}


{


gdjs.GameOverCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GameOverCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level Menu!", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.GameOverCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBackObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-click-melodic-tone-1128.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.GameOverCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
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


gdjs.GameOverCode.eventsList2(runtimeScene);
}


{


gdjs.GameOverCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameOverCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GameOverCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.GameOverCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDGameOverObjects1 */
/* Reuse gdjs.GameOverCode.GDMenuObjects1 */
/* Reuse gdjs.GameOverCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOverObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.GameOverCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDMenuObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.GameOverCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDpapan2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.GameOverCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOverObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.GameOverCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDMenuObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.GameOverCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDpapan2Objects1[i].enableEffect("Effect", false);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameOverCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GameOverCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.GameOverCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12470300);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDGameOverObjects1 */
/* Reuse gdjs.GameOverCode.GDMenuObjects1 */
/* Reuse gdjs.GameOverCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOverObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.GameOverCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDMenuObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.GameOverCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDpapan2Objects1[i].enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12472500);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameOverCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.GameOverCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GameOverCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("papan2"), gdjs.GameOverCode.GDpapan2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDGameOverObjects1ObjectsGDgdjs_9546GameOverCode_9546GDMenuObjects1ObjectsGDgdjs_9546GameOverCode_9546GDpapan2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDGameOverObjects1 */
/* Reuse gdjs.GameOverCode.GDMenuObjects1 */
/* Reuse gdjs.GameOverCode.GDpapan2Objects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOverObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.GameOverCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDMenuObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.GameOverCode.GDpapan2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDpapan2Objects1[i].setColor("255;255;255");
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDbackgroundObjects1.length = 0;
gdjs.GameOverCode.GDbackgroundObjects2.length = 0;
gdjs.GameOverCode.GDPausedObjects1.length = 0;
gdjs.GameOverCode.GDPausedObjects2.length = 0;
gdjs.GameOverCode.GDhelpObjects1.length = 0;
gdjs.GameOverCode.GDhelpObjects2.length = 0;
gdjs.GameOverCode.GDpapan3Objects1.length = 0;
gdjs.GameOverCode.GDpapan3Objects2.length = 0;
gdjs.GameOverCode.GDpapan2Objects1.length = 0;
gdjs.GameOverCode.GDpapan2Objects2.length = 0;
gdjs.GameOverCode.GDbantuan2Objects1.length = 0;
gdjs.GameOverCode.GDbantuan2Objects2.length = 0;
gdjs.GameOverCode.GDbanner2Objects1.length = 0;
gdjs.GameOverCode.GDbanner2Objects2.length = 0;
gdjs.GameOverCode.GDLOGOObjects1.length = 0;
gdjs.GameOverCode.GDLOGOObjects2.length = 0;
gdjs.GameOverCode.GDLEVEL1Objects1.length = 0;
gdjs.GameOverCode.GDLEVEL1Objects2.length = 0;
gdjs.GameOverCode.GDBEATLEVELObjects1.length = 0;
gdjs.GameOverCode.GDBEATLEVELObjects2.length = 0;
gdjs.GameOverCode.GDsoalObjects1.length = 0;
gdjs.GameOverCode.GDsoalObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDResumeObjects1.length = 0;
gdjs.GameOverCode.GDResumeObjects2.length = 0;
gdjs.GameOverCode.GDHomeObjects1.length = 0;
gdjs.GameOverCode.GDHomeObjects2.length = 0;
gdjs.GameOverCode.GDBackObjects1.length = 0;
gdjs.GameOverCode.GDBackObjects2.length = 0;
gdjs.GameOverCode.GDMenuObjects1.length = 0;
gdjs.GameOverCode.GDMenuObjects2.length = 0;
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;

gdjs.GameOverCode.eventsList9(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
