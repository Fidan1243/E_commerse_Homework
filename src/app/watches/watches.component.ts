import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Watch } from '../models/watch';
import { WatchService } from '../services/watch.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css'],
  providers:[WatchService]
})
export class WatchesComponent implements OnInit {
  watches:Watch[]=[];
  constructor(private service: WatchService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var valueb = params["brandId"]
      var valueca = params["categoryId"]
      var valuec = params["colorId"]
      
      this.service.getWatches(valueca,valuec,valueb).subscribe(data => {
        this.watches = data;
      });
    });
  }

}
