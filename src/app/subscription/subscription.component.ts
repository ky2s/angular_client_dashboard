import { Component } from '@angular/core';
import { SubscriptionService } from './subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  constructor(
    private service : SubscriptionService,
  ){
    this.getDataList();
  }

  title="Projects List"
  dataList:any

  getDataList()
  {
    return this.service.get('list').forEach(
      (response: any) => {
        console.log(response.data)
        this.dataList = response.data
      }
    );
  }
}
