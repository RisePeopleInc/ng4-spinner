# Ng4Spinner

The Ng4Spinner package allows you to design your customized loader or spinner ,control  show & hide it using a service.

You can also use the default spinner created and control it.

Include the HTML in the landing component and can control show and hide from any  components in the respective module.


## Working StackBlitz Example

Check out  working examples of our components at Stackblitz first....


 [Open StackBlitz ng4-spinner ]( https://stackblitz.com/edit/ng4-spinner)

## Installation

Install npm module:
    
    `npm install ng4-spinner --save` 

## Usage

Import `Ng4SpinnerModule` from  node_modules/ng4-spinner in your app and start using a component

Add the following html code in your application landing component based on your choice, generally app-component 


Add the following for  a customizable loader

```html
<ng4-spinner>
// create you own spinner or loader according to your design using html and css
// 
// Loader content html goes here
</ng4-spinner>
```


Add the following for the default spinner

```html
<ng4-default-spinner>
</ng4-default-spinner>
```

Import `Ng4SpinnerService` from ng4-spinner package  in any of the component you would like to start the Spinner/loader

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
import {Ng4SpinnerModule} from 'ng4-spinner';

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

Customizable Spinner

```html
<ng4-spinner>
  // loader html goes here
</ng4-spinner>
```

or 

Default Spinner

```html
<ng4-default-spinner>
</ng4-default-spinner>
```


app.component.ts

```typescript
import { Component } from '@angular/core';
import {Ng4SpinnerService} from 'ng4-spinner'
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