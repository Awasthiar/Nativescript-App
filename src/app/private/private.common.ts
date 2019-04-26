import { Routes } from '@angular/router';
import { TeamsRevenueComponent } from './teams-revenue/teams-revenue.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {path:'teamRevenue', component:TeamsRevenueComponent},
    {path:'addRecord',component:AddNewRecordComponent},
    {path:'editRecord',component:EditRecordComponent},
    {path:'deleteRecord', component:DeleteRecordComponent}
];
