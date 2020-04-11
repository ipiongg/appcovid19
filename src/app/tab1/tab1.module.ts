import { Ng2SearchPipeModule } from "ng2-search-filter";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }]),
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
