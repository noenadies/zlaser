gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.repeatCount2 = 0;

gdjs.New_32sceneCode.repeatCount3 = 0;

gdjs.New_32sceneCode.repeatIndex2 = 0;

gdjs.New_32sceneCode.repeatIndex3 = 0;

gdjs.New_32sceneCode.GDHeroObjects1= [];
gdjs.New_32sceneCode.GDHeroObjects2= [];
gdjs.New_32sceneCode.GDHeroObjects3= [];
gdjs.New_32sceneCode.GDWallObjects1= [];
gdjs.New_32sceneCode.GDWallObjects2= [];
gdjs.New_32sceneCode.GDWallObjects3= [];
gdjs.New_32sceneCode.GDZombieObjects1= [];
gdjs.New_32sceneCode.GDZombieObjects2= [];
gdjs.New_32sceneCode.GDZombieObjects3= [];
gdjs.New_32sceneCode.GDLaserDrawerObjects1= [];
gdjs.New_32sceneCode.GDLaserDrawerObjects2= [];
gdjs.New_32sceneCode.GDLaserDrawerObjects3= [];
gdjs.New_32sceneCode.GDBackgroundObjects1= [];
gdjs.New_32sceneCode.GDBackgroundObjects2= [];
gdjs.New_32sceneCode.GDBackgroundObjects3= [];
gdjs.New_32sceneCode.GDGameOverObjects1= [];
gdjs.New_32sceneCode.GDGameOverObjects2= [];
gdjs.New_32sceneCode.GDGameOverObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallObjects2ObjectsGDgdjs_46New_9532sceneCode_46GDZombieObjects2Objects = Hashtable.newFrom({"Wall": gdjs.New_32sceneCode.GDWallObjects2, "Zombie": gdjs.New_32sceneCode.GDZombieObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.New_32sceneCode.GDZombieObjects2});gdjs.New_32sceneCode.eventsList0x674de8 = function(runtimeScene) {

{



}


{

/* Reuse gdjs.New_32sceneCode.GDZombieObjects2 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects2Objects) > 0;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDZombieObjects2 */
{}{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x674de8
gdjs.New_32sceneCode.eventsList0x30a58c28 = function(runtimeScene) {

{



}


{


{
{runtimeScene.getVariables().get("Contact").setNumber(0);
}}

}


{



}


{

gdjs.New_32sceneCode.GDHeroObjects2.createFrom(runtimeScene.getObjects("Hero"));
gdjs.New_32sceneCode.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));
gdjs.New_32sceneCode.GDZombieObjects2.createFrom(runtimeScene.getObjects("Zombie"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallObjects2ObjectsGDgdjs_46New_9532sceneCode_46GDZombieObjects2Objects, (( gdjs.New_32sceneCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects2[0].getPointX("Barrel")), (( gdjs.New_32sceneCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects2[0].getPointY("Barrel")), (( gdjs.New_32sceneCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects2[0].getDirectionOrAngle()), 800, runtimeScene.getVariables().get("ContactX"), runtimeScene.getVariables().get("ContactY"), false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Contact").setNumber(1);
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0x674de8(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Contact")) == 0;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHeroObjects2.createFrom(runtimeScene.getObjects("Hero"));
{runtimeScene.getVariables().get("ContactX").setNumber((( gdjs.New_32sceneCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects2[0].getPointX("Barrel")) + 800*Math.cos(gdjs.toRad((( gdjs.New_32sceneCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects2[0].getAngle()))));
}{runtimeScene.getVariables().get("ContactY").setNumber((( gdjs.New_32sceneCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects2[0].getPointY("Barrel")) + 800*Math.sin(gdjs.toRad((( gdjs.New_32sceneCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects2[0].getAngle()))));
}}

}


{



}


{


{
gdjs.New_32sceneCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
gdjs.New_32sceneCode.GDLaserDrawerObjects1.createFrom(runtimeScene.getObjects("LaserDrawer"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDLaserDrawerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLaserDrawerObjects1[i].drawLine((( gdjs.New_32sceneCode.GDHeroObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects1[0].getPointX("Barrel")), (( gdjs.New_32sceneCode.GDHeroObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects1[0].getPointY("Barrel")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ContactX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ContactY")), 3);
}
}{}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x30a58c28
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.New_32sceneCode.GDZombieObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.New_32sceneCode.GDZombieObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.New_32sceneCode.GDZombieObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.New_32sceneCode.GDZombieObjects1});gdjs.New_32sceneCode.eventsList0x30af69a0 = function(runtimeScene) {

{


{
gdjs.New_32sceneCode.GDZombieObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects, gdjs.random(2000)-500, -500, "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects, -500, gdjs.random(2000)-500, "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects, gdjs.random(2000)-500, 1500, "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects, 1500, gdjs.random(2000)-500, "");
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x30af69a0
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.New_32sceneCode.GDZombieObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHeroObjects1Objects = Hashtable.newFrom({"Hero": gdjs.New_32sceneCode.GDHeroObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBackgroundObjects3Objects = Hashtable.newFrom({"Background": gdjs.New_32sceneCode.GDBackgroundObjects3});gdjs.New_32sceneCode.eventsList0x30a64950 = function(runtimeScene) {

}; //End of gdjs.New_32sceneCode.eventsList0x30a64950
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.New_32sceneCode.GDWallObjects2});gdjs.New_32sceneCode.eventsList0x30ad5ad8 = function(runtimeScene) {

}; //End of gdjs.New_32sceneCode.eventsList0x30ad5ad8
gdjs.New_32sceneCode.eventsList0x30a64768 = function(runtimeScene) {

{


{
}

}


{


gdjs.New_32sceneCode.repeatCount3 = 35+gdjs.random(5);
for(gdjs.New_32sceneCode.repeatIndex3 = 0;gdjs.New_32sceneCode.repeatIndex3 < gdjs.New_32sceneCode.repeatCount3;++gdjs.New_32sceneCode.repeatIndex3) {
gdjs.New_32sceneCode.GDBackgroundObjects3.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBackgroundObjects3Objects, gdjs.random(900), gdjs.random(700), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBackgroundObjects3[i].setAnimation(gdjs.random(2));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBackgroundObjects3[i].setZOrder(-10);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBackgroundObjects3[i].setOpacity(155+gdjs.random(100));
}
}}
}

}


{


gdjs.New_32sceneCode.repeatCount2 = 15+gdjs.random(3);
for(gdjs.New_32sceneCode.repeatIndex2 = 0;gdjs.New_32sceneCode.repeatIndex2 < gdjs.New_32sceneCode.repeatCount2;++gdjs.New_32sceneCode.repeatIndex2) {
gdjs.New_32sceneCode.GDHeroObjects2.createFrom(runtimeScene.getObjects("Hero"));
gdjs.New_32sceneCode.GDWallObjects2.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDWallObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDWallObjects2[i].setAnimation(gdjs.random(2));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDWallObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDWallObjects2[i].setZOrder(-8);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDWallObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDWallObjects2[i].setDirectionOrAngle(gdjs.random(360));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDWallObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDWallObjects2[i].putAroundObject((gdjs.New_32sceneCode.GDHeroObjects2.length !== 0 ? gdjs.New_32sceneCode.GDHeroObjects2[0] : null), 100+gdjs.random(400), gdjs.random(360));
}
}}
}

}


}; //End of gdjs.New_32sceneCode.eventsList0x30a64768
gdjs.New_32sceneCode.eventsList0xb0118 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGameOverObjects1[i].hide();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameOver")) == 0;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHeroObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0x30a58c28(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "ZombieCreation");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ZombieCreation");
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0x30af69a0(runtimeScene);} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDZombieObjects1.createFrom(runtimeScene.getObjects("Zombie"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDZombieObjects1[i].getBehavior("Pathfinding").pathFound()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieObjects1[k] = gdjs.New_32sceneCode.GDZombieObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
/* Reuse gdjs.New_32sceneCode.GDZombieObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.New_32sceneCode.GDHeroObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects1[0].getPointX("")), (( gdjs.New_32sceneCode.GDHeroObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDHeroObjects1[0].getPointY("")));
}
}}

}


{

gdjs.New_32sceneCode.GDZombieObjects1.createFrom(runtimeScene.getObjects("Zombie"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDZombieObjects1[i].getBehavior("Pathfinding").pathFound()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieObjects1[k] = gdjs.New_32sceneCode.GDZombieObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDZombieObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.New_32sceneCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
gdjs.New_32sceneCode.GDZombieObjects1.createFrom(runtimeScene.getObjects("Zombie"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDHeroObjects1Objects, false, runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("GameOver").setNumber(1);
}}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameOver")) == 1;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.3, "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGameOverObjects1[i].hide(false);
}
}}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0x30a64768(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.New_32sceneCode.eventsList0xb0118


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.New_32sceneCode.GDHeroObjects1.length = 0;
gdjs.New_32sceneCode.GDHeroObjects2.length = 0;
gdjs.New_32sceneCode.GDHeroObjects3.length = 0;
gdjs.New_32sceneCode.GDWallObjects1.length = 0;
gdjs.New_32sceneCode.GDWallObjects2.length = 0;
gdjs.New_32sceneCode.GDWallObjects3.length = 0;
gdjs.New_32sceneCode.GDZombieObjects1.length = 0;
gdjs.New_32sceneCode.GDZombieObjects2.length = 0;
gdjs.New_32sceneCode.GDZombieObjects3.length = 0;
gdjs.New_32sceneCode.GDLaserDrawerObjects1.length = 0;
gdjs.New_32sceneCode.GDLaserDrawerObjects2.length = 0;
gdjs.New_32sceneCode.GDLaserDrawerObjects3.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDGameOverObjects1.length = 0;
gdjs.New_32sceneCode.GDGameOverObjects2.length = 0;
gdjs.New_32sceneCode.GDGameOverObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;

gdjs.New_32sceneCode.eventsList0xb0118(runtimeScene);
return;
}
gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
