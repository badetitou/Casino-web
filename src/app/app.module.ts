import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { CsnModelCardComponent } from './home/csn-model-card/csn-model-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ModelHomeComponent } from './model-home/model-home.component';
import { ModelHomeOverviewComponent } from './model-home/model-home-overview/model-home-overview.component';
import { ModelHomeExplorerComponent } from './model-home/model-home-explorer/model-home-explorer.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TreeExplorerComponent } from './model-home/model-home-explorer/tree-explorer/tree-explorer.component';
import { CodeViewerComponent } from './model-home/model-home-explorer/code-viewer/code-viewer.component';
import { AttributeViewerComponent } from './model-home/model-home-explorer/attribute-viewer/attribute-viewer.component';
import { MatTableModule } from '@angular/material/table';
import { ApiElementComponent } from './about/api-element/api-element.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApiGroupComponent } from './about/api-group/api-group.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CsnModelCardComponent,
    AboutComponent,
    ModelHomeComponent,
    ModelHomeOverviewComponent,
    ModelHomeExplorerComponent,
    TreeExplorerComponent,
    CodeViewerComponent,
    AttributeViewerComponent,
    ApiElementComponent,
    ApiGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatTableModule,
    MatExpansionModule,
    MatChipsModule,

    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
