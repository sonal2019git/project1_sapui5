sap.ui.define(["sap/ui/core/mvc/Controller",
              
                "project1/model/formatter"
], (Controller, formatter) => {
  "use strict";
console.log("Run fiori app1 controller");
  return Controller.extend("project1.controller.FioriApp1", {
    formatter:formatter,
    onInit(
      
    ) {
      console.log("Run fiori app1 controller");
      var empObject = {
        Employees: [
          {
            EmpNo: 1,
            Name: "Alex",
            Gender: "Male",
            Country: "US",
            Age: 10,
          },
          {
            EmpNo: 2,
            Name: "Alex",
            Gender: "Male",
            Country: "US",
            Age: 20,
          },
          {
            EmpNo: 3,
            Name: "Alex11",
            Gender: "Male",
            Country: "US",
            Age: 30,
          },
        ],
      };
      var oModel = new sap.ui.model.json.JSONModel();
      oModel.setData(empObject);
      this.getView().setModel(oModel, "EmployeeModel");
    },
  });
});
