/*global QUnit*/

sap.ui.define(
  ["project1/controller/FioriApp1.controller"],
  function (Controller) {
    "use strict";

    QUnit.module("FioriApp1 Controller");

    QUnit.test("I should test the FioriApp1 controller", function (assert) {
      var oAppController = new Controller();
      oAppController.onInit();
      assert.ok(oAppController);
    });
  },
);
