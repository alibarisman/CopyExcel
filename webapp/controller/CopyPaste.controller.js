sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.ploud.CopyExcel.controller.CopyPaste", {
		onInit: function () {
			var model = new sap.ui.model.json.JSONModel({
				items: []
			});
			this.getView().setModel(model);
		},
		
		onAfterRendering: function() {
		
		},
		
		onChange:function(oEvent){
		
		}
	});
});