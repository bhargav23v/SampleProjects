import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.css']
})
export class BranchDetailComponent implements OnInit {
  currentBranch = {
    Availability: {
StandardAvailability: {
Day:[
{Name: "Monday", OpeningHours: Array(1)},
 {Name: "Tuesday", OpeningHours: Array(1)},
 {Name: "Wednesday", OpeningHours: Array(1)},
 {Name: "Thursday", OpeningHours: Array(1)},
 {Name: "Friday", OpeningHours: Array(1)},
 {Name: "Saturday", OpeningHours: Array(1)},
]}   },
ContactInfo: [
{ContactType: "Phone", ContactContent: "+44-1937835809"},
 {ContactType: "Fax", ContactContent: "+44-1937835674"}],

CustomerSegment: ["Personal"],
Identification: "11863000",
Name: "TADCASTER",
OtherServiceAndFacility: [
{ Code: "ATMB",
Description: "ATMAtBranch",
 Name: "ATMAtBranch" }],
PostalAddress: {
AddressLine: ["HALIFAX BRANCH 24 BRIDGE STREET"],
Country: "GB",
CountrySubDivision: ["NORTH YORKSHIRE"],
GeoLocation: {
GeographicCoordinates: {
Latitude: "53.884262",
Longitude: "-1.261096" },
PostCode: "LS24 9AL",
TownName: "TADCASTER"},
SequenceNumber: "00",
Type: "Physical"
  }};
  constructor(private repository: RepositoryService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBranchDetail();
  }

  getBranchDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    let list = [];
    this.repository.getBranches().subscribe(reponse => {
      list = reponse.data[0].Brand[0].Branch.filter(item => {
        return item.Identification == id;
      });
      this.currentBranch = list[0];
      console.dir(this.currentBranch);
    })
  }

}
