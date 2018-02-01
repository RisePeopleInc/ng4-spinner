# Ng4Spinner

The Ng4Spinner allows you to show and hide your customized loader ,  according to your requirement and design.
Include the HTML in the landing component and can control show and hide from any  components in the respective module.


## Installation

Install npm module:
    
    `npm install ng4-spinner --save` 

## Usage

Import `Ng4SpinnerModule` from  node_modules/ng4-spinner in your app and start using a component

Add the following html code in your application landing component, generally app-component 

```html
<ng4-spinner>
// create you own spinner or loader according to your design
// Your spinner or Loader will go here
</ng4-spinner>
```

Import `Ng4SpinnerService` from  node_modules/ng4-spinner  in any of the component you would like to start the Spinner/loader

    The service has two methods 

    ```typescript
     show() //to enable or show the SPINNER
    ```
     ```typescript
      hide() //to disable or hide the SPINNER
     ```



#Sample



app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/// import your Spinner module
import {Ng4SpinnerModule} from './../../node_modules/ng4-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4SpinnerModule// add it to the imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
app.component.html

```html
<ng4-spinner>
    My own Spinner
</ng4-spinner>
```

app.component.ts

```typescript
import { Component } from '@angular/core';
import {Ng4SpinnerService} from './../../node_modules/ng4-spinner'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private ngSpinner:Ng4SpinnerService){
    ngSpinner.show();
 /// to show the spinner


 ngSpinner.hide()
 //to hide the spinner
  }
}
```
