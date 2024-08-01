import React, {useState} from 'react';
import {Modal} from '@consta/uikit/Modal';
import {Button} from '@consta/uikit/Button';
import {TextField} from "@consta/uikit/TextField";
import {Select} from "@consta/uikit/Select";
import lotService from "../api/services/LotService";
import {IconAdd} from "@consta/icons/IconAdd";

const LotForm = () => {
    const [lot, setLot] = useState({
        lotName: '',
        lotDescription: '',
        price: '',
        currencyCode: 'RUB',
        ndsRate: 'Без НДС',
        customerCode: ''
    });

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleChangeSelect = ({value}, name) => {
        setLot((prevLot) => ({
            ...prevLot,
            [name]: value,
        }));
    };

    const handleChange = (value, params) => {
        setLot((prevLot) => ({
            ...prevLot,
            [params.name]: value,
        }));
    };

    const handleSave = () => {
        console.log(lot)
        lotService.create(lot)
            .then((response) => {
                console.log(response)
                window.location.reload()
            }).catch((e) => {
                console.error(e)
        });
    };

    const currencyOptions = [
        {label: 'RUB', value: 'RUB'},
        {label: 'USD', value: 'USD'},
        {label: 'EUR', value: 'EUR'},
    ];

    const ndsOptions = [
        {label: 'Без НДС', value: 'Без НДС'},
        {label: '18%', value: '18%'},
        {label: '20%', value: '20%'},
    ];

    return (
        <div>
            <Button
                className="button-green"
                iconLeft={IconAdd}
                label="Создать новый лот"
                onClick={() => setIsModalOpen(true)}
            />
            <Modal
                isOpen={isModalOpen}
                hasOverlay
                onClickOutside={() => setIsModalOpen(false)}
                onEsc={() => setIsModalOpen(false)}
            >
                <div className="text-container">
                    <TextField
                        label="Название"
                        name="lotName"
                        value={lot.lotName}
                        onChange={handleChange}
                        type="text"
                        incrementButtons={false}
                        required
                    />
                    <TextField
                        label="Описание"
                        name="lotDescription"
                        value={lot.lotDescription}
                        onChange={handleChange}
                        type="textarea"
                        incrementButtons={false}
                    />
                    <TextField
                        label="Цена"
                        name="price"
                        value={lot.price}
                        onChange={handleChange}
                        type="number"
                        incrementButtons={false}
                        required
                    />
                    <Select
                        label="Валюта"
                        items={currencyOptions}
                        value={currencyOptions.find(option => option.value === lot.currencyCode)}
                        onChange={(event) => handleChangeSelect(event, 'currencyCode')}
                        required
                    />
                    <Select
                        label="Ставка НДС"
                        items={ndsOptions}
                        value={ndsOptions.find(option => option.value === lot.ndsRate)}
                        onChange={(event) => handleChangeSelect(event, 'ndsRate')}
                        required
                    />
                    <TextField
                        label="Код клиента"
                        name="customerCode"
                        value={lot.customerCode}
                        onChange={handleChange}
                        type="text"
                        incrementButtons={false}
                    />
                </div>

                <div className="button-container">
                    <Button className="button-red"
                        label="Закрыть"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <Button className="button-green"
                        label="Сохранить"
                        onClick={handleSave}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default LotForm;