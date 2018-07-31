import { NgModule } from '@angular/core';
import { ExampleNg6LibComponent } from './example-ng6-lib.component';
import { FooComponent } from './foo/foo.component';
import { Foo2Component } from './foo2/foo2.component';

@NgModule({
  imports: [
  ],
  declarations: [ExampleNg6LibComponent, FooComponent, Foo2Component],
  exports: [FooComponent, ExampleNg6LibComponent, Foo2Component]
})
export class ExampleNg6LibModule { }
