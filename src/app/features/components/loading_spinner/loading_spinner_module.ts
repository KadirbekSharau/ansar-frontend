import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoadingSpinner } from "./loading_spinner";

@NgModule({
    declarations: [
        LoadingSpinner
      ],
      imports: [
        BrowserModule,
      ],
      exports: [
          LoadingSpinner,
      ],
      providers: []
})

export class LoadingSpinnerModule { }