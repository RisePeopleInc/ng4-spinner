# Ng4Spinner

The Spinner allows you to show and hide loader , which can be devleoped according to your requirement and design

## Installation

Install npm module:
    
    `npm install ng4-spinner --save` 

## Usage

Import `Ng4SpinnerModule` from  node_modules/ng4-spinner in your app and start using a component


Add the following html code in your application landing component, generally app-component 

```html
<ng4-spinner>
// create you own loader according to your design
// Your Loader will go here
</ng4-spinner>
```

Import `Ng4SpinnerService` from  node_modules/ng4-spinner  in any of the component you would like to start the loader

    The service has two methods ```typescript show() ``` and  ```typescript hide() ```

    Call ```typescript show() ``` to enable the loader and ```typescript hide() ``` to disable loader


#Sample

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
