import React from "react";
import HomePage from "./HomePage/HomePage";
import HomePageTamil from "./Homepage-tamil/HomePageTamil";
import ServicePage from "./ServicePage/ServicePage";
// import Servicepage1 from "./ServicePage/Saledeed/ServicePage";
import { Route } from "react-router-dom";
import SaleDeed from "./ServicePage/SaleDeed/SaleDeed";
import ConstructionAgreement from "./ServicePage/ConstructionAgreement/ConstructionAgreement";
import SaleAgreement from "./ServicePage/Sale Agreement/SaleAgreement";
import SettlementDeed from "./ServicePage/Settlement Deed/SettlementDeed";
import LeaseDeed from "./ServicePage/Lease Deed/LeaseDeed";
import GiftDeed from "./ServicePage/Gift Deed/GiftDeed";
import PartitionDeed from "./ServicePage/Partition Deed/PartitionDeed";
import MODT from "./ServicePage/MODT Registration/MODTreg";
import SimpleMortage from "./ServicePage/Simple Mortage/SimpleMortage";
import ReleaseDeed from "./ServicePage/Release Deed/ReleaseDeed";
import RentalAgreement from "./ServicePage/Rental Agreement/RentalAgreement";
import WILLdeed from "./ServicePage/Will Deed/WillDeed";
import ManualEC from "./ServicePage/ManualEC/ManualEC";
import PattaChitta from "./ServicePage/PattaChitta/PattaChitta";
import NameTransfer from "./ServicePage/Name Transfer/NameTransfer";
import SubDivison from "./ServicePage/SubDivision/Subdivison";
import BirthCertificate from "./ServicePage/Birth Certificate/BirthCertificate";
import MarriageCertificate from "./ServicePage/Marriage Certificate/MarriageCertificate";
import DeathCertificate from "./ServicePage/Death Certificate/DeathCertificate";
import LegalHeirCertificate from "./ServicePage/Legal heir Certificate/LegalHeirCertificate";
import DTCP from "./ServicePage/DTCP Approval/DTCP";
import CMDA from "./ServicePage/CMDA Approval/CMDA";
import Survey from "./ServicePage/Survey/Survey";
import Fencing from "./ServicePage/Fencing/Fencing";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/service" component={ServicePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/தமிழ்" component={HomePageTamil} />
      <Route exact path="/sale-deed" component={SaleDeed} />
      <Route
        exact
        path="/Construction-agreement"
        component={ConstructionAgreement}
      />
      <Route exact path="/Sale-agreement" component={SaleAgreement} />
      <Route exact path="/lease-deed" component={LeaseDeed} />
      <Route exact path="/Settlement-deed" component={SettlementDeed} />
      <Route exact path="/Gift-deed" component={GiftDeed} />
      <Route exact path="/Partition-deed" component={PartitionDeed} />
      <Route exact path="/MODT-registration" component={MODT} />
      <Route exact path="/Simple-mortgage" component={SimpleMortage} />
      <Route exact path="/Release-deed" component={ReleaseDeed} />
      <Route exact path="/rental-agreement" component={RentalAgreement} />
      <Route exact path="/Will-deed" component={WILLdeed} />
      <Route exact path="/ManualEC-ComputerEC" component={ManualEC} />
      <Route exact path="/Patta-Chitta-Adangal" component={PattaChitta} />
      <Route exact path="/Name-transfer" component={NameTransfer} />
      <Route exact path="/Sub-division" component={SubDivison} />
      <Route exact path="/Birth-certificate" component={BirthCertificate} />
      <Route exact path="/Death-certificate" component={DeathCertificate} />
      <Route
        exact
        path="/Legal-heir-certificate"
        component={LegalHeirCertificate}
      />
      <Route
        exact
        path="/Marriage-certificate"
        component={MarriageCertificate}
      />
      <Route exact path="/DTCP-Approval" component={DTCP} />
      <Route exact path="/CMDA-Approval" component={CMDA} />
      <Route exact path="/Surveying" component={Survey} />
      <Route exact path="/Fencing" component={Fencing} />
    </div>
  );
}

export default App;
