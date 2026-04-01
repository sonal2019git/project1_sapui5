sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("project1.controller.FioriApp1", {
    onInit() {
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
