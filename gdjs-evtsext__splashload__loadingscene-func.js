
if (typeof gdjs.evtsExt__SplashLoad__LoadingScene !== "undefined") {
  gdjs.evtsExt__SplashLoad__LoadingScene.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SplashLoad__LoadingScene = {};
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1= [];
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2= [];
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects3= [];
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects1= [];
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2= [];
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects3= [];


gdjs.evtsExt__SplashLoad__LoadingScene.mapOfGDgdjs_9546evtsExt_9595_9595SplashLoad_9595_9595LoadingScene_9546GDBarObjects2Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2});
gdjs.evtsExt__SplashLoad__LoadingScene.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BarBorder"), gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2);
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SplashLoad__LoadingScene.mapOfGDgdjs_9546evtsExt_9595_9595SplashLoad_9595_9595LoadingScene_9546GDBarObjects2Objects, (( gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2[0].getPointX("")), (( gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2[i].setScaleX(0.1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("BarBorder"), gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2);
{for(var i = 0, len = gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2[i].setX((( gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2[0].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2[i].getScaleX() < 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2[k] = gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2[i].setScaleX(gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2[i].getScaleX() + (0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1[i].getScaleX() >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1[k] = gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Scene") : ""), false);
}}

}


};gdjs.evtsExt__SplashLoad__LoadingScene.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SplashLoad__LoadingScene.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SplashLoad__LoadingScene.func = function(runtimeScene, Bar, BarBorder, Scene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Bar": Bar
, "BarBorder": BarBorder
},
  _objectArraysMap: {
"Bar": gdjs.objectsListsToArray(Bar)
, "BarBorder": gdjs.objectsListsToArray(BarBorder)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Scene") return Scene;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects1.length = 0;
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects2.length = 0;
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarObjects3.length = 0;
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects1.length = 0;
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects2.length = 0;
gdjs.evtsExt__SplashLoad__LoadingScene.GDBarBorderObjects3.length = 0;

gdjs.evtsExt__SplashLoad__LoadingScene.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SplashLoad__LoadingScene.registeredGdjsCallbacks = [];