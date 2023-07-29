gdjs.LoadingSceneCode = {};
gdjs.LoadingSceneCode.GDbackgroundObjects1= [];
gdjs.LoadingSceneCode.GDbackgroundObjects2= [];
gdjs.LoadingSceneCode.GDPausedObjects1= [];
gdjs.LoadingSceneCode.GDPausedObjects2= [];
gdjs.LoadingSceneCode.GDhelpObjects1= [];
gdjs.LoadingSceneCode.GDhelpObjects2= [];
gdjs.LoadingSceneCode.GDpapan3Objects1= [];
gdjs.LoadingSceneCode.GDpapan3Objects2= [];
gdjs.LoadingSceneCode.GDpapan2Objects1= [];
gdjs.LoadingSceneCode.GDpapan2Objects2= [];
gdjs.LoadingSceneCode.GDbantuan2Objects1= [];
gdjs.LoadingSceneCode.GDbantuan2Objects2= [];
gdjs.LoadingSceneCode.GDbanner2Objects1= [];
gdjs.LoadingSceneCode.GDbanner2Objects2= [];
gdjs.LoadingSceneCode.GDLOGOObjects1= [];
gdjs.LoadingSceneCode.GDLOGOObjects2= [];
gdjs.LoadingSceneCode.GDLogoObjects1= [];
gdjs.LoadingSceneCode.GDLogoObjects2= [];
gdjs.LoadingSceneCode.GDBardingObjects1= [];
gdjs.LoadingSceneCode.GDBardingObjects2= [];
gdjs.LoadingSceneCode.GDbarObjects1= [];
gdjs.LoadingSceneCode.GDbarObjects2= [];


gdjs.LoadingSceneCode.mapOfGDgdjs_9546LoadingSceneCode_9546GDbarObjects1Objects = Hashtable.newFrom({"bar": gdjs.LoadingSceneCode.GDbarObjects1});
gdjs.LoadingSceneCode.mapOfGDgdjs_9546LoadingSceneCode_9546GDBardingObjects1Objects = Hashtable.newFrom({"Barding": gdjs.LoadingSceneCode.GDBardingObjects1});
gdjs.LoadingSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Barding"), gdjs.LoadingSceneCode.GDBardingObjects1);
gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.LoadingSceneCode.GDbarObjects1);
{gdjs.evtsExt__SplashLoad__LoadingScene.func(runtimeScene, gdjs.LoadingSceneCode.mapOfGDgdjs_9546LoadingSceneCode_9546GDbarObjects1Objects, gdjs.LoadingSceneCode.mapOfGDgdjs_9546LoadingSceneCode_9546GDBardingObjects1Objects, "Main Menu", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.LoadingSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingSceneCode.GDbackgroundObjects1.length = 0;
gdjs.LoadingSceneCode.GDbackgroundObjects2.length = 0;
gdjs.LoadingSceneCode.GDPausedObjects1.length = 0;
gdjs.LoadingSceneCode.GDPausedObjects2.length = 0;
gdjs.LoadingSceneCode.GDhelpObjects1.length = 0;
gdjs.LoadingSceneCode.GDhelpObjects2.length = 0;
gdjs.LoadingSceneCode.GDpapan3Objects1.length = 0;
gdjs.LoadingSceneCode.GDpapan3Objects2.length = 0;
gdjs.LoadingSceneCode.GDpapan2Objects1.length = 0;
gdjs.LoadingSceneCode.GDpapan2Objects2.length = 0;
gdjs.LoadingSceneCode.GDbantuan2Objects1.length = 0;
gdjs.LoadingSceneCode.GDbantuan2Objects2.length = 0;
gdjs.LoadingSceneCode.GDbanner2Objects1.length = 0;
gdjs.LoadingSceneCode.GDbanner2Objects2.length = 0;
gdjs.LoadingSceneCode.GDLOGOObjects1.length = 0;
gdjs.LoadingSceneCode.GDLOGOObjects2.length = 0;
gdjs.LoadingSceneCode.GDLogoObjects1.length = 0;
gdjs.LoadingSceneCode.GDLogoObjects2.length = 0;
gdjs.LoadingSceneCode.GDBardingObjects1.length = 0;
gdjs.LoadingSceneCode.GDBardingObjects2.length = 0;
gdjs.LoadingSceneCode.GDbarObjects1.length = 0;
gdjs.LoadingSceneCode.GDbarObjects2.length = 0;

gdjs.LoadingSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['LoadingSceneCode'] = gdjs.LoadingSceneCode;
