/*global QUnit*/

sap.ui.define([
	"com/ploud/CopyExcel/controller/CopyPaste.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CopyPaste Controller");

	QUnit.test("I should test the CopyPaste controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});