import React, {useEffect, useState} from 'react';
import {Table, TableColumn, TableTextFilter} from '@consta/uikit/Table'
import {Button} from "@consta/uikit/Button";
import {IconTrash} from '@consta/icons/IconTrash';
import lotService from "../api/services/LotService";
import LotUpdate from "./LotUpdate";
import LotService from "../api/services/LotService";

const renderCustomerCodeCell = (value) => {
    return value ? value : 'Кода клиента нет';
};

const columns: TableColumn = [
    {
        title: 'ID',
        accessor: 'lotId',
        width: 100,
        sortable: true,
    },
    {
        title: 'Название',
        accessor: 'lotName',
        width: 250,
        sortable: true,
    },
    {
        title: 'Описание',
        accessor: 'lotDescription',
        width: 500,
    },
    {
        title: 'Цена',
        accessor: 'price',
        width: 200,
        sortable: true,
    },
    {
        title: 'Валюта',
        accessor: 'currencyCode',
        width: 200,
    },
    {
        title: 'Ставка НДС',
        accessor: 'ndsRate',
        width: 200,
    },
    {
        title: 'Код клиента',
        accessor: 'customerCode',
        width: 200,
        sortable: true,
        renderCell: (row) => renderCustomerCodeCell(row.customerCode),
    },
    {
        title: 'Действия',
        accessor: 'actions',
        renderCell: (row) => (
            <div style={{display: 'flex', justifyContent: 'center', gap: '8px'}}>
                <LotUpdate id={row.lotId}/>
                <Button
                    className="button-red"
                    size="s"
                    iconLeft={IconTrash}
                    onClick={() => {
                        LotService.delete(row.lotId).then((response) => {
                            window.location.reload()
                        })
                    }}
                />
            </div>
        ),
        align: 'center',
        width: 150,
    },
];

const filters = [
    {
        id: 'currencyFilter',
        name: 'Выбранные значения цены: ',
        field: 'currencyCode',
        filterer: (
            cellValue,
            filterValues: Array<{ value: string; name: string }>,
        ) => {
            return filterValues.some(
                (filterValue) => filterValue && filterValue.value === cellValue,
            );
        },
        component: {
            name: TableTextFilter,
            props: {
                withSearch: true,
                items: [
                    {name: 'RUB', value: 'RUB'},
                    {name: 'USD', value: 'USD'},
                    {name: 'EUR', value: 'EUR'},
                ],
            },
        },
    },
    {
        id: 'ndsFilter',
        name: 'Выбранные значения НДС: ',
        field: 'ndsRate',
        filterer: (
            cellValue,
            filterValues: Array<{ value: string; name: string }>,
        ) => {
            return filterValues.some(
                (filterValue) => filterValue && filterValue.value === cellValue,
            );
        },
        component: {
            name: TableTextFilter,
            props: {
                withSearch: true,
                items: [
                    {name: 'Без НДС', value: 'Без НДС'},
                    {name: '18%', value: '18%'},
                    {name: '20%', value: '20%'},
                ],
            },
        },
    },
];

const LotTable = () => {
    const [lots, setLots] = useState([]);

    useEffect(() => {
        lotService.getAll()
            .then(response => {
                setLots(response.data);
            }).catch(e => {
            console.error(e);
        });
    }, []);

    return (
        <Table
            columns={columns}
            rows={lots}
            filters={filters}
            borderBetweenColumns
            borderBetweenRows
            stickyHeader
            getCellWrap={(row) => 'break'}
        />
    );
};

export default LotTable;
