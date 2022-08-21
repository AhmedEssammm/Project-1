import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getMenu');
    if(this.getMenuId)
    {
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;
      })
    }
  }

}
