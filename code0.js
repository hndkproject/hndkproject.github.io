gdjs.SplashSceneCode = {};
gdjs.SplashSceneCode.GDbackgroundObjects1= [];
gdjs.SplashSceneCode.GDbackgroundObjects2= [];
gdjs.SplashSceneCode.GDPausedObjects1= [];
gdjs.SplashSceneCode.GDPausedObjects2= [];
gdjs.SplashSceneCode.GDhelpObjects1= [];
gdjs.SplashSceneCode.GDhelpObjects2= [];
gdjs.SplashSceneCode.GDpapan3Objects1= [];
gdjs.SplashSceneCode.GDpapan3Objects2= [];
gdjs.SplashSceneCode.GDpapan2Objects1= [];
gdjs.SplashSceneCode.GDpapan2Objects2= [];
gdjs.SplashSceneCode.GDbantuan2Objects1= [];
gdjs.SplashSceneCode.GDbantuan2Objects2= [];
gdjs.SplashSceneCode.GDbanner2Objects1= [];
gdjs.SplashSceneCode.GDbanner2Objects2= [];
gdjs.SplashSceneCode.GDLOGOObjects1= [];
gdjs.SplashSceneCode.GDLOGOObjects2= [];
gdjs.SplashSceneCode.GDLogoObjects1= [];
gdjs.SplashSceneCode.GDLogoObjects2= [];
gdjs.SplashSceneCode.GDBordingObjects1= [];
gdjs.SplashSceneCode.GDBordingObjects2= [];
gdjs.SplashSceneCode.GDBarObjects1= [];
gdjs.SplashSceneCode.GDBarObjects2= [];


gdjs.SplashSceneCode.mapOfGDgdjs_9546SplashSceneCode_9546GDLogoObjects1Objects = Hashtable.newFrom({"Logo": gdjs.SplashSceneCode.GDLogoObjects1});
gdjs.SplashSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.SplashSceneCode.GDLogoObjects1);
{gdjs.evtsExt__SplashLoad__SplashScreen.func(runtimeScene, gdjs.SplashSceneCode.mapOfGDgdjs_9546SplashSceneCode_9546GDLogoObjects1Objects, "LoadingScene", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.SplashSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashSceneCode.GDbackgroundObjects1.length = 0;
gdjs.SplashSceneCode.GDbackgroundObjects2.length = 0;
gdjs.SplashSceneCode.GDPausedObjects1.length = 0;
gdjs.SplashSceneCode.GDPausedObjects2.length = 0;
gdjs.SplashSceneCode.GDhelpObjects1.length = 0;
gdjs.SplashSceneCode.GDhelpObjects2.length = 0;
gdjs.SplashSceneCode.GDpapan3Objects1.length = 0;
gdjs.SplashSceneCode.GDpapan3Objects2.length = 0;
gdjs.SplashSceneCode.GDpapan2Objects1.length = 0;
gdjs.SplashSceneCode.GDpapan2Objects2.length = 0;
gdjs.SplashSceneCode.GDbantuan2Objects1.length = 0;
gdjs.SplashSceneCode.GDbantuan2Objects2.length = 0;
gdjs.SplashSceneCode.GDbanner2Objects1.length = 0;
gdjs.SplashSceneCode.GDbanner2Objects2.length = 0;
gdjs.SplashSceneCode.GDLOGOObjects1.length = 0;
gdjs.SplashSceneCode.GDLOGOObjects2.length = 0;
gdjs.SplashSceneCode.GDLogoObjects1.length = 0;
gdjs.SplashSceneCode.GDLogoObjects2.length = 0;
gdjs.SplashSceneCode.GDBordingObjects1.length = 0;
gdjs.SplashSceneCode.GDBordingObjects2.length = 0;
gdjs.SplashSceneCode.GDBarObjects1.length = 0;
gdjs.SplashSceneCode.GDBarObjects2.length = 0;

gdjs.SplashSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['SplashSceneCode'] = gdjs.SplashSceneCode;
