import { EnumBaseButton } from "./ButtonDefinitions";

export interface ICoreButtonVNS {
    code: any;
    iconClass?: any;
    caption : string;
    styleClass? : any;
    order?: any;
}

export const BASE_BUTTONS: ICoreButtonVNS[] = [
    {
        code: EnumBaseButton.CREATE,
        iconClass: 'flaticon-043-plus',
        caption: 'Create',
        styleClass: 'btn btn-primary',
        order: 1,
    },
    {
        code: EnumBaseButton.EDIT,
        iconClass: 'flaticon-068-pencil',
        caption: 'Edit',
        styleClass: 'btn btn-primary',
        order: 2,
    },
    {
        code: EnumBaseButton.ACTIVATE,
        iconClass: 'flaticon-151-check',
        caption: 'Active',
        styleClass: 'btn btn-primary',
        order: 3,
    },
    {
        code: EnumBaseButton.INACTIVATE,
        iconClass: 'flaticon-042-minus',
        caption: 'Inactive',
        styleClass: 'btn btn-primary',
        order: 4,
    },
    {
        code: EnumBaseButton.DELETE,
        iconClass: 'flaticon-133-trash',
        caption: 'Delete',
        styleClass: 'btn btn-primary',
        order: 5,
    },
    {
        code: EnumBaseButton.PDF,
        iconClass: 'fa fa-file-pdf-o',
        caption: 'Export PDF',
        styleClass: 'btn btn-primary',
        order: 7,
    },
    {
        code: EnumBaseButton.EXCEL,
        iconClass: 'fa fa-file-excel-o',
        caption: 'Export Excel',
        styleClass: 'btn btn-primary',
        order: 6,
    },
    {
        code: EnumBaseButton.PRINT,
        iconClass: 'flaticon-119-printer',
        caption: 'Export Report',
        styleClass: 'btn btn-primary',
        order: 8,
    },
    {
        code: EnumBaseButton.VIEW,
        iconClass: 'flaticon-057-eye',
        caption: 'View',
        styleClass: 'btn btn-primary',
        order: 8,
    },

]