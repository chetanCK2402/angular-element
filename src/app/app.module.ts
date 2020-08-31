import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [AppComponent, ClockComponent],
  imports: [BrowserModule],
  bootstrap: [],
  entryComponents: [ClockComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    if (!customElements.get('custom-clock-element')) {
      const clock: any = createCustomElement(ClockComponent, { injector: this.injector });
      customElements.define('custom-clock-element', clock);
    }
  }
}
