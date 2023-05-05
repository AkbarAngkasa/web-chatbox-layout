import React, { useState, useEffect, useRef } from 'react';
import { Button as ButtonFlowbite } from 'flowbite-react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";                                       
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import PrimeReact from 'primereact/api';
import { FilterMatchMode } from 'primereact/api';
import user_id_card_1 from '../../assets/images/user_id_card/user_id_card_1.jpg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBurger } from '@fortawesome/free-solid-svg-icons';

export default function PrimeTableExport() {
    PrimeReact.appendTo = 'self';

    const [products, setProducts] = useState([]);
    const dt = useRef(null);

    const ProductService = [
      {
        register_time: '19/05/22 10:43',
        account_no: 'EA-1-2345-6789-9',
        phone_no: 8229799327698,
        full_name: 'Siswanto Nugroho',
        nik: 3508105425938207,
        user_status: 'Active',
        user_kyc: 'Pending KYC-1',
      },
      {
        register_time: '12/12/23 10:43',
        account_no: 'EA-1-2345-6789-9',
        phone_no: 8123456789012,
        full_name: 'Angkasa',
        nik: 3508105425938207,
        user_status: 'Blocked',
        user_kyc: 'Pending KYC-1',
      },
    ]

    const cols = [
        { field: 'register_time', header: 'Register Time' },
        { field: 'account_no', header: 'Account No' },
        { field: 'phone_no', header: 'Phone No' },
        { field: 'full_name', header: 'Full Name' },
        { field: 'nik', header: 'NIK' },
        { field: 'user_status', header: 'User Status' },
        { field: 'user_kyc', header: 'User KYC' },
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        // ProductService.getProductsMini().then((data) => setProducts(data));
        setProducts(ProductService)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    // Search
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    
    // Components
    const header = (
        <div className="flex justify-end gap-2">
            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" className='bg-blue-400 hover:bg-red-800' />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS"/>
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF"/>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search" className='w-32'/>
            </span>
        </div>
    );
    
    // Modal Toggle Handler
    // const [defaultModalToggle, setDefaultModalToggle] = useState(false);
    // function onOpenDefault() {
    //     setDefaultModalToggle(true);
    // }

    // function onCloseDefault() {
    //     setDefaultModalToggle(false);
    // }
    
    const actionButtons = (product) => {
        
        let modalState = false;

        const modalToggler = (user_phone_no) => {

            const elhModalWrapper = document.getElementById('modal-wrapper');
            console.log(elhModalWrapper);

            let modal = document.createElement('p');
            modal.innerHTML = `
                <h1>Hello World</h1>
            `;
            elhModalWrapper.appendChild(modal);
            
            alert(`Hello ${user_phone_no}`)
            if(!modalState){
                modalState = true;
                console.log(modalState)
                console.log('Open Modal');
            } else {
                modalState = false;
                console.log(modalState)
                console.log('Close Modal');
            }
            return
        }

        // const closeModal = () => {
        //     modalState = false;
        //     console.log(modalState);
        //     console.log('Close Modal');
        //     return modalState;
        // }

        return (
            <>
                {product.user_status === "Active" &&
                    <div className='flex flex-row'>
                        <ButtonFlowbite onClick={() => modalToggler(product.phone_no)}>
                            {product.phone_no}
                        </ButtonFlowbite>
                    </div>
                }
                {product.user_status !== "Active" &&
                    <div className='flex flex-row'>
                        <ButtonFlowbite className='bg-red-700' onClick={() => modalToggler(product.phone_no)}>
                            {product.phone_no}
                        </ButtonFlowbite>
                    </div>
                }
            </>
        )
    }

    return (
        <>
            <div id="modal-wrapper">
                <div className='bg-[rgba(0,0,0,0.5)] absolute flex justify-center place-items-center z-50 top-0 right-0 bottom-0 left-0 p-[5%]'>
                    <div className='relative flex flex-col flex-wrap sm:flex-row justify-around w-full h-fit bg-white opacity-100'>
                        <div className='w-full sm:w-[50%]'>
                            <img src={user_id_card_1} alt={user_id_card_1}/>
                        </div>
                        <div className='flex flex-col w-full sm:w-[50%]'>
                            <div className='flex flex-row p-[5%] bg-slate-50'>
                                <ul className='w-[80%]'>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Acc No.</span>
                                        <span className='text-sm'>EA-1-2345-6789-9</span>
                                    </li>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Username</span>
                                        <span className='text-sm'>8123456789012</span>
                                    </li>
                                </ul>
                                <div className='w-[20%] flex justify-end place-items-end'>
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Active</span>
                                </div>
                            </div>
                            <div className='p-[5%]'>
                                <form className='w-[80%]'>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Full Name</span>
                                        <input type="text" className='text-sm p-1 border-none text-end placeholder:text-end placeholder:text-slate-900 placeholder:text-sm' placeholder='Siswanto Nugroho' />
                                    </li>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Username</span>
                                        <input type="text" className='text-sm p-1 border-none text-end placeholder:text-end placeholder:text-slate-900 placeholder:text-sm' placeholder='350810425938207' />
                                    </li>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Birthdate</span>
                                        <input type="date" className='text-sm p-1 border-none text-end placeholder:text-end placeholder:text-slate-900 placeholder:text-sm' placeholder='350810425938207' />
                                    </li>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Adress</span>
                                        <input type="text" className='text-sm p-1 border-none text-end placeholder:text-end placeholder:text-slate-900 placeholder:text-sm' placeholder='Pulinombo No. A11' />
                                    </li>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Village</span>
                                        <input type="text" className='text-sm p-1 border-none text-end placeholder:text-end placeholder:text-slate-900 placeholder:text-sm' placeholder='Citrodiwangsan' />
                                    </li>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>Subdistrict</span>
                                        <input type="text" className='text-sm p-1 border-none text-end placeholder:text-end placeholder:text-slate-900 placeholder:text-sm' placeholder='Lumajang' />
                                    </li>
                                    <li className='flex justify-between mb-1'>
                                        <span className='font-semibold text-sm'>City</span>
                                        <input type="text" className='text-sm p-1 border-none text-end placeholder:text-end placeholder:text-slate-900 placeholder:text-sm' placeholder='Lumajang' />
                                    </li>
                                </form>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <Tooltip target=".export-buttons>button" position="bottom" />
                <DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }} paginator rows={10} filters={filters}  globalFilterFields={['register_time', 'account_no', 'phone_no', 'full_name', 'nik', 'user_status', 'user_kyc', 'action']} emptyMessage="Query not found.">
                    <Column field="register_time" header="Register Time"/>
                    <Column field="account_no" header="Account No"/>
                    <Column field="phone_no" header="Phone No"/>
                    <Column field="full_name" header="Full Name"/>
                    <Column field="nik" header="NIK"/>
                    <Column field="user_status" header="User status"/>
                    <Column field="user_kyc" header="User KYC"/>
                    <Column body={actionButtons} header="Action"></Column>
                </DataTable>
            </div>
        </>
    );
}