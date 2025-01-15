/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace testdestination.controller
 */
export default class Main extends Controller {
  /*eslint-disable @typescript-eslint/no-empty-function*/
  public async onInit(): Promise<void> {
    const oModel = this.getOwnerComponent()?.getModel("oNorthWindModel");

    oModel.read("/Products", {
      success: function (oData) {
        console.log(oData?.results);
      },
    });
  }
}
